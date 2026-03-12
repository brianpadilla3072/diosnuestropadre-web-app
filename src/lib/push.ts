import webpush from 'web-push'
import { getAllPushSubscriptions, deletePushSubscription, type PushSub } from './db'

webpush.setVapidDetails(
  process.env.VAPID_EMAIL!,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

export interface PushPayload {
  title: string
  body: string
  url?: string
  icon?: string
}

export async function sendPushToAll(payload: PushPayload): Promise<{ sent: number; failed: number }> {
  const subs = getAllPushSubscriptions()
  let sent = 0
  let failed = 0

  await Promise.allSettled(
    subs.map(async (sub: PushSub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          JSON.stringify({
            title: payload.title,
            body: payload.body,
            url: payload.url ?? '/',
            icon: payload.icon ?? '/icons/icon-192.png',
          })
        )
        sent++
      } catch (err: unknown) {
        // Si el endpoint ya no es válido (410 Gone), eliminarlo
        if (err && typeof err === 'object' && 'statusCode' in err && (err as { statusCode: number }).statusCode === 410) {
          deletePushSubscription(sub.endpoint)
        }
        failed++
      }
    })
  )

  return { sent, failed }
}
