import { NextResponse } from 'next/server'
import { sendPushToAll } from '@/lib/push'

const CANAL_LIVE = 'https://www.youtube.com/@DiosNuestroPadre/live'

let cache: { liveUrl: string | null; checkedAt: number } | null = null
const CACHE_TTL = 2 * 60 * 1000 // 2 minutos

async function checkLive(): Promise<string | null> {
  try {
    const res = await fetch(CANAL_LIVE, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        'Accept-Language': 'es-AR,es;q=0.9',
      },
      redirect: 'follow',
    })

    const html = await res.text()

    const isLive =
      html.includes('"isLive":true') ||
      html.includes('"style":"LIVE"') ||
      html.includes('"LIVE_STREAM"')

    if (!isLive) return null

    const videoIdMatch = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/)
    if (videoIdMatch) {
      return `https://www.youtube.com/watch?v=${videoIdMatch[1]}`
    }

    return CANAL_LIVE
  } catch {
    return null
  }
}

export async function GET() {
  const now = Date.now()

  if (cache && now - cache.checkedAt < CACHE_TTL) {
    return NextResponse.json({ liveUrl: cache.liveUrl }, { status: 200 })
  }

  const prevLiveUrl = cache?.liveUrl ?? null
  const liveUrl = await checkLive()
  cache = { liveUrl, checkedAt: now }

  // Si acaba de arrancar el live (antes no había, ahora sí) → push automático
  if (!prevLiveUrl && liveUrl) {
    sendPushToAll({
      title: '🔴 ¡Estamos en vivo!',
      body: 'Dios Nuestro Padre está transmitiendo en vivo ahora. ¡Unite!',
      url: liveUrl,
    }).catch(console.error)
  }

  return NextResponse.json({ liveUrl }, { status: 200 })
}
