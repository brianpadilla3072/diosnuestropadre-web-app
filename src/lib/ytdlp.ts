import { spawnSync, execFileSync } from 'child_process'
import { mkdtempSync, rmSync, readFileSync, writeFileSync } from 'fs'
import { tmpdir } from 'os'
import path from 'path'
import type { VideoRow } from './db'

const CANAL = 'https://www.youtube.com/@DiosNuestroPadre'
const TABS = [`${CANAL}/streams`, `${CANAL}/videos`]

// Ruta a las cookies de Chrome (Windows montado en WSL2)
const CHROME_PROFILE =
  process.env.CHROME_PROFILE ||
  '/mnt/c/Users/padil/AppData/Local/Google/Chrome/User Data'

const YTDLP_ARGS_BASE = [
  '--cookies-from-browser', `chrome:${CHROME_PROFILE}`,
  '--no-warnings',
  '--quiet',
]

/** Retorna IDs de todos los videos del canal (flat, rápido) */
export function getAllChannelIds(): Set<string> {
  const ids = new Set<string>()
  for (const tab of TABS) {
    const result = spawnSync('yt-dlp', [
      ...YTDLP_ARGS_BASE,
      '--flat-playlist',
      '--print', 'id',
      tab,
    ], { encoding: 'utf8', timeout: 120_000 })

    if (result.stdout) {
      result.stdout
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .forEach((id) => ids.add(id))
    }
  }
  return ids
}

/** Retorna IDs publicados en los últimos `days` días */
export function getRecentChannelIds(days: number): Set<string> {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  const cutoffStr = cutoff.toISOString().slice(0, 10).replace(/-/g, '')  // YYYYMMDD

  const ids = new Set<string>()
  for (const tab of TABS) {
    const result = spawnSync('yt-dlp', [
      ...YTDLP_ARGS_BASE,
      '--flat-playlist',
      '--print', '%(id)s %(upload_date)s',
      tab,
    ], { encoding: 'utf8', timeout: 120_000 })

    if (result.stdout) {
      for (const line of result.stdout.split('\n')) {
        const parts = line.trim().split(' ')
        if (parts.length < 2) continue
        const [id, dateStr] = parts
        if (dateStr && dateStr >= cutoffStr) {
          ids.add(id)
        }
      }
    }
  }
  return ids
}

/** Obtiene metadata completa de una lista de IDs */
export function getVideosMetadata(ids: string[]): VideoRow[] {
  if (ids.length === 0) return []

  // Escribir batch file temporal
  const tmpDir = mkdtempSync(path.join(tmpdir(), 'dnp-sync-'))
  const batchFile = path.join(tmpDir, 'batch.txt')
  writeFileSync(
    batchFile,
    ids.map((id) => `https://www.youtube.com/watch?v=${id}`).join('\n')
  )

  const result = spawnSync('yt-dlp', [
    ...YTDLP_ARGS_BASE,
    '--dump-json',
    '--batch-file', batchFile,
  ], { encoding: 'utf8', timeout: 300_000, maxBuffer: 50 * 1024 * 1024 })

  rmSync(tmpDir, { recursive: true, force: true })

  const videos: VideoRow[] = []
  for (const line of (result.stdout || '').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue
    try {
      const info = JSON.parse(trimmed)
      const dateRaw: string = info.upload_date || ''
      const fecha =
        dateRaw.length === 8
          ? `${dateRaw.slice(0, 4)}-${dateRaw.slice(4, 6)}-${dateRaw.slice(6)}`
          : dateRaw || null

      videos.push({
        id: info.id,
        titulo: info.title || '',
        fecha_publicacion: fecha,
        descripcion: info.description || '',
        url: info.webpage_url || `https://www.youtube.com/watch?v=${info.id}`,
      })
    } catch {
      // línea inválida, ignorar
    }
  }
  return videos
}

export interface SubtitleEvent {
  t: number   // timestamp ms
  s: string   // texto
}

export interface SubtitleResult {
  eventos: SubtitleEvent[]
  duracionMs: number
}

/** Descarga subtítulos automáticos en JSON3 para un video */
export function downloadSubtitles(videoId: string): SubtitleResult | null {
  const tmpDir = mkdtempSync(path.join(tmpdir(), `dnp-sub-${videoId}-`))
  const outBase = path.join(tmpDir, 'sub')
  const jsonPath = `${outBase}.es.json3`

  spawnSync('yt-dlp', [
    ...YTDLP_ARGS_BASE,
    '--skip-download',
    '--write-auto-subs',
    '--sub-format', 'json3',
    '--sub-lang', 'es',
    '--sleep-requests', '2',
    '--extractor-retries', '3',
    '-o', outBase,
    `https://www.youtube.com/watch?v=${videoId}`,
  ], { encoding: 'utf8', timeout: 90_000 })

  let result: SubtitleResult | null = null
  try {
    const raw = JSON.parse(readFileSync(jsonPath, 'utf8'))
    const eventos: SubtitleEvent[] = []
    let maxT = 0

    for (const e of raw.events || []) {
      if (!e.segs) {
        const t = e.tStartMs || 0
        const d = e.dDurationMs || 0
        if (t + d > maxT) maxT = t + d
        continue
      }
      const tMs: number = e.tStartMs || 0
      const texto = (e.segs as Array<{ utf8?: string }>)
        .map((s) => s.utf8 || '')
        .join('')
        .replace(/\n/g, ' ')
        .trim()
      if (texto) {
        eventos.push({ t: tMs, s: texto })
        if (tMs > maxT) maxT = tMs
      }
    }

    if (eventos.length > 0) {
      result = { eventos, duracionMs: maxT }
    }
  } catch {
    // sin subtítulos disponibles
  }

  rmSync(tmpDir, { recursive: true, force: true })
  return result
}
