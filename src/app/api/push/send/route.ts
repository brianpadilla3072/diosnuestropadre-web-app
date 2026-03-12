import { NextRequest, NextResponse } from 'next/server'
import { sendPushToAll } from '@/lib/push'

export async function POST(req: NextRequest) {
  const secret = process.env.ADMIN_SECRET
  const auth = req.headers.get('authorization')

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  try {
    const { title, body, url } = await req.json()
    if (!title || !body) {
      return NextResponse.json({ error: 'title y body son requeridos' }, { status: 400 })
    }

    const result = await sendPushToAll({ title, body, url })
    return NextResponse.json({ ok: true, ...result })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
