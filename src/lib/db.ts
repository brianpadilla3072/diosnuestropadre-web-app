import Database from 'better-sqlite3'
import path from 'path'

const DB_PATH =
  process.env.DB_PATH ||
  path.resolve('/home/kheiron/transcripcionYT/videos.db')

let _db: Database.Database | null = null

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH)
    _db.pragma('journal_mode = WAL')
    _db.pragma('foreign_keys = ON')
    _db.exec(`
      CREATE TABLE IF NOT EXISTS push_subscriptions (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        endpoint   TEXT UNIQUE NOT NULL,
        p256dh     TEXT NOT NULL,
        auth       TEXT NOT NULL,
        creado_en  TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `)
  }
  return _db
}

// ─── Push Subscriptions ───────────────────────────────────────────────────────

export interface PushSub {
  endpoint: string
  p256dh: string
  auth: string
}

export function savePushSubscription(sub: PushSub): void {
  getDb()
    .prepare(`
      INSERT INTO push_subscriptions (endpoint, p256dh, auth)
      VALUES (@endpoint, @p256dh, @auth)
      ON CONFLICT(endpoint) DO UPDATE SET p256dh = excluded.p256dh, auth = excluded.auth
    `)
    .run(sub)
}

export function deletePushSubscription(endpoint: string): void {
  getDb().prepare(`DELETE FROM push_subscriptions WHERE endpoint = ?`).run(endpoint)
}

export function getAllPushSubscriptions(): PushSub[] {
  return getDb()
    .prepare(`SELECT endpoint, p256dh, auth FROM push_subscriptions`)
    .all() as PushSub[]
}

export function countPushSubscriptions(): number {
  const row = getDb()
    .prepare(`SELECT COUNT(*) as n FROM push_subscriptions`)
    .get() as { n: number }
  return row.n
}

export interface VideoRow {
  id: string
  titulo: string
  fecha_publicacion: string | null
  descripcion: string | null
  url: string
}

export function getVideoIds(): Set<string> {
  const rows = getDb().prepare('SELECT id FROM videos').all() as { id: string }[]
  return new Set(rows.map((r) => r.id))
}

export function insertVideo(v: VideoRow): void {
  getDb()
    .prepare(`
      INSERT INTO videos (id, titulo, fecha_publicacion, descripcion, url)
      VALUES (@id, @titulo, @fecha_publicacion, @descripcion, @url)
      ON CONFLICT(id) DO NOTHING
    `)
    .run(v)
}

export function hasSubtitle(videoId: string): boolean {
  const row = getDb()
    .prepare('SELECT id FROM subtitulos WHERE video_id = ?')
    .get(videoId)
  return !!row
}

export function insertSubtitle(
  videoId: string,
  eventos: object[],
  duracionMs: number
): void {
  getDb()
    .prepare(`
      INSERT INTO subtitulos (video_id, idioma, eventos, duracion_ms)
      VALUES (?, 'es', ?, ?)
      ON CONFLICT(video_id) DO NOTHING
    `)
    .run(videoId, JSON.stringify(eventos), duracionMs)
}

export function hasTranscription(videoId: string): boolean {
  const row = getDb()
    .prepare('SELECT id FROM transcripciones WHERE video_id = ?')
    .get(videoId)
  return !!row
}

export function insertTranscription(videoId: string, contenido: string): void {
  const now = new Date().toISOString()
  getDb()
    .prepare(`
      INSERT INTO transcripciones (video_id, idioma, contenido, fuente, creado_en, actualizado)
      VALUES (?, 'es', ?, 'youtube', ?, ?)
      ON CONFLICT(video_id) DO NOTHING
    `)
    .run(videoId, contenido, now, now)
}

// ─── Palabras / Devocionales ───────────────────────────────────────────────

export interface PalabraRow {
  id: number
  video_id: string
  tipo: string
  contenido: string
  titulo: string
  serie: string
  serie_id: number
  fecha_publicacion: string
  url: string
}

const PALABRAS_SELECT = `
  SELECT p.id, p.video_id, p.tipo, p.contenido,
         t.nombre AS titulo,
         s.nombre AS serie, s.id AS serie_id,
         v.fecha_publicacion, v.url
  FROM palabras p
  JOIN titulos t ON t.id = p.titulo_id
  JOIN series  s ON s.id = p.serie_id
  JOIN videos  v ON v.id = p.video_id
  WHERE p.error = 'false'
`

export function listPalabras(opts: {
  page?: number
  limit?: number
  tipo?: string
  serie_id?: number
}): PalabraRow[] {
  const { page = 1, limit = 12, tipo, serie_id } = opts
  const offset = (page - 1) * limit
  let sql = PALABRAS_SELECT
  const params: (string | number)[] = []
  if (tipo) { sql += ` AND p.tipo = ?`; params.push(tipo) }
  if (serie_id) { sql += ` AND s.id = ?`; params.push(serie_id) }
  sql += ` ORDER BY v.fecha_publicacion DESC LIMIT ? OFFSET ?`
  params.push(limit, offset)
  return getDb().prepare(sql).all(...params) as PalabraRow[]
}

export function countPalabras(opts: { tipo?: string; serie_id?: number } = {}): number {
  const { tipo, serie_id } = opts
  let sql = `SELECT COUNT(*) as n FROM palabras p
             JOIN titulos t ON t.id = p.titulo_id
             JOIN series  s ON s.id = p.serie_id
             JOIN videos  v ON v.id = p.video_id
             WHERE p.error = 'false'`
  const params: (string | number)[] = []
  if (tipo) { sql += ` AND p.tipo = ?`; params.push(tipo) }
  if (serie_id) { sql += ` AND s.id = ?`; params.push(serie_id) }
  const row = getDb().prepare(sql).get(...params) as { n: number }
  return row.n
}

export function getPalabra(id: number): PalabraRow | null {
  return (
    getDb()
      .prepare(PALABRAS_SELECT + ` AND p.id = ?`)
      .get(id) as PalabraRow | undefined
  ) ?? null
}

export function listSeries(): { id: number; nombre: string }[] {
  return getDb()
    .prepare(`SELECT id, nombre FROM series ORDER BY nombre ASC`)
    .all() as { id: number; nombre: string }[]
}

export interface SerieWithCount {
  id: number
  nombre: string
  count: number
  latest_fecha: string | null
}

export function listSeriesWithCount(): SerieWithCount[] {
  return getDb()
    .prepare(`
      SELECT s.id, s.nombre,
             COUNT(p.id) as count,
             MAX(v.fecha_publicacion) as latest_fecha
      FROM series s
      LEFT JOIN palabras p ON p.serie_id = s.id AND p.error = 'false'
      LEFT JOIN videos  v ON v.id = p.video_id
      GROUP BY s.id, s.nombre
      ORDER BY latest_fecha DESC
    `)
    .all() as SerieWithCount[]
}
