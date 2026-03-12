"use client";
import { useEffect } from "react";

function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const arr = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; i++) arr[i] = rawData.charCodeAt(i);
  return arr.buffer as ArrayBuffer;
}

async function subscribeUser(reg: ServiceWorkerRegistration) {
  try {
    const existing = await reg.pushManager.getSubscription();
    if (existing) return; // ya suscripto

    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });

    await fetch("/api/push/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sub.toJSON()),
    });
  } catch {
    // permiso denegado o error — silencioso
  }
}

export default function PwaInit() {
  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;

    navigator.serviceWorker
      .register("/sw.js")
      .then(async (reg) => {
        // Si ya tiene permiso, suscribir directamente
        if (Notification.permission === "granted") {
          await subscribeUser(reg);
          return;
        }

        // Si no fue denegado, pedir permiso después de 3 segundos
        if (Notification.permission !== "denied") {
          setTimeout(async () => {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
              await subscribeUser(reg);
            }
          }, 3000);
        }
      })
      .catch(() => {});
  }, []);

  return null;
}
