import { NextRequest, NextResponse } from 'next/server'
import { syncChannel } from '@/lib/sync'

/**
 * GET /api/sync
 *
 * Descarga videos nuevos del canal DNP (últimos 14 días),
 * sus subtítulos y transcripciones. No sobreescribe datos existentes.
 *
 * Protegido con CRON_SECRET para uso desde cron o Vercel.
 *
 * Vercel Cron: configurado en vercel.json (schedule: 0 7 * * *)
 * Local:       curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/sync
 */
export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')
  const secret = process.env.CRON_SECRET

  if (!secret) {
    return NextResponse.json(
      { error: 'CRON_SECRET no configurado en variables de entorno' },
      { status: 500 }
    )
  }

  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const dias = Number(req.nextUrl.searchParams.get('dias') ?? '14')

  try {
    const result = await syncChannel(dias)
    return NextResponse.json({
      ok: true,
      resumen: {
        videosNuevos: result.videosNuevos,
        subtitulosGuardados: result.subtitulosGuardados,
        subtitulosSinDisponibilidad: result.subtitulosSinDisponibilidad,
        errores: result.errores.length,
      },
      detalle: result.detalle,
      ...(result.errores.length > 0 && { errores: result.errores }),
    })
  } catch (e) {
    console.error('[sync] Error inesperado:', e)
    return NextResponse.json(
      { ok: false, error: String(e) },
      { status: 500 }
    )
  }
}
