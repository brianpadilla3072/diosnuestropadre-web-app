/**
 * Cron de sincronización del canal DNP.
 * Se ejecuta dentro del proceso Next.js (Node.js runtime).
 * PM2 mantiene el proceso activo en la VPS.
 *
 * Schedule default: todos los días a las 07:00
 * Configurable con la variable SYNC_SCHEDULE (cron expression)
 */
export async function register() {
  // Solo en runtime Node.js (no en Edge)
  if (process.env.NEXT_RUNTIME !== 'nodejs') return

  const cron = await import('node-cron')
  const { syncChannel } = await import('./lib/sync')

  const schedule = process.env.SYNC_SCHEDULE || '0 7 * * *'

  if (!cron.validate(schedule)) {
    console.error(`[sync-cron] Schedule inválido: "${schedule}"`)
    return
  }

  cron.schedule(schedule, async () => {
    console.log(`[sync-cron] ${new Date().toISOString()} — Iniciando sincronización...`)
    try {
      const result = await syncChannel()
      console.log(
        `[sync-cron] Listo — ${result.videosNuevos} videos nuevos | ` +
        `${result.subtitulosGuardados} subtítulos guardados | ` +
        `${result.subtitulosSinDisponibilidad} sin subtítulo`
      )
      if (result.errores.length > 0) {
        console.warn('[sync-cron] Errores:', result.errores)
      }
    } catch (e) {
      console.error('[sync-cron] Error inesperado:', e)
    }
  })

  console.log(`[sync-cron] Programado: "${schedule}"`)
}
