import {
  getVideoIds,
  insertVideo,
  hasSubtitle,
  insertSubtitle,
  hasTranscription,
  insertTranscription,
} from './db'
import {
  getRecentChannelIds,
  getVideosMetadata,
  downloadSubtitles,
} from './ytdlp'

export interface SyncResult {
  videosNuevos: number
  subtitulosGuardados: number
  subtitulosSinDisponibilidad: number
  errores: string[]
  detalle: string[]
}

/**
 * Sincroniza el canal: busca videos de los últimos `days` días,
 * guarda los nuevos y descarga sus subtítulos.
 * Nunca sobreescribe registros existentes.
 */
export async function syncChannel(days = 14): Promise<SyncResult> {
  const result: SyncResult = {
    videosNuevos: 0,
    subtitulosGuardados: 0,
    subtitulosSinDisponibilidad: 0,
    errores: [],
    detalle: [],
  }

  // 1. IDs recientes del canal
  result.detalle.push(`Buscando videos de los últimos ${days} días...`)
  let recentIds: Set<string>
  try {
    recentIds = getRecentChannelIds(days)
  } catch (e) {
    result.errores.push(`Error al obtener IDs del canal: ${e}`)
    return result
  }
  result.detalle.push(`  ${recentIds.size} IDs encontrados en el canal`)

  // 2. Filtrar los que no están en DB
  const yaEnDb = getVideoIds()
  const nuevosIds = [...recentIds].filter((id) => !yaEnDb.has(id))
  result.detalle.push(`  ${nuevosIds.length} nuevos (no en DB)`)

  if (nuevosIds.length === 0) {
    result.detalle.push('No hay videos nuevos. Nada que hacer.')
    return result
  }

  // 3. Metadata de los nuevos
  result.detalle.push(`Descargando metadata de ${nuevosIds.length} videos...`)
  let videosMetadata
  try {
    videosMetadata = getVideosMetadata(nuevosIds)
  } catch (e) {
    result.errores.push(`Error al obtener metadata: ${e}`)
    return result
  }

  for (const video of videosMetadata) {
    insertVideo(video)
    result.videosNuevos++
    result.detalle.push(`  [+] ${video.fecha_publicacion} — ${video.titulo.slice(0, 60)}`)
  }

  // 4. Subtítulos y transcripciones para todos los videos nuevos (y los que faltan)
  // Incluye también videos anteriores sin subtítulo que caigan en el rango reciente
  const idsSinSubtitulo = [...recentIds].filter((id) => !hasSubtitle(id))
  result.detalle.push(`\nDescargando subtítulos de ${idsSinSubtitulo.length} videos...`)

  for (const videoId of idsSinSubtitulo) {
    try {
      const sub = downloadSubtitles(videoId)
      if (!sub || sub.eventos.length === 0) {
        result.subtitulosSinDisponibilidad++
        result.detalle.push(`  [–] ${videoId}: sin subtítulos disponibles`)
        continue
      }

      insertSubtitle(videoId, sub.eventos, sub.duracionMs)
      result.subtitulosGuardados++

      // Derivar transcripción como texto plano
      if (!hasTranscription(videoId)) {
        const texto = sub.eventos.map((e) => e.s).join(' ')
        insertTranscription(videoId, texto)
      }

      const durMin = Math.floor(sub.duracionMs / 60000)
      result.detalle.push(
        `  [✓] ${videoId}: ${sub.eventos.length} fragmentos | ${durMin}m`
      )
    } catch (e) {
      result.errores.push(`${videoId}: ${e}`)
      result.detalle.push(`  [✗] ${videoId}: error — ${e}`)
    }
  }

  return result
}
