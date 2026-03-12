import { NextRequest, NextResponse } from 'next/server'
import { savePushSubscription, deletePushSubscription } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { endpoint, keys } = body
    if (!endpoint || !keys?.p256dh || !keys?.auth) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
    }
    savePushSubscription({ endpoint, p256dh: keys.p256dh, auth: keys.auth })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { endpoint } = await req.json()
    if (!endpoint) return NextResponse.json({ error: 'Falta endpoint' }, { status: 400 })
    deletePushSubscription(endpoint)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
