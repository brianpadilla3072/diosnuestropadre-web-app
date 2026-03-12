"use client";
import { useEffect, useState } from "react";

const POLL_INTERVAL = 2 * 60 * 1000; // 2 minutos

export default function TopBar() {
  const [liveUrl, setLiveUrl] = useState<string | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/live-status");
        const data = await res.json();
        setLiveUrl(data.liveUrl ?? null);
      } catch {
        // silencioso
      }
    }

    check();
    const interval = setInterval(check, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (!liveUrl) return null;

  return (
    <div className="w-full bg-[#D14F42] text-white hidden md:block">
      <div className="max-w-[1260px] mx-auto px-10 py-2 flex items-center justify-center gap-3">
        {/* Punto parpadeante */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <span className="text-sm font-semibold tracking-wide uppercase">
          ¡Estamos en vivo ahora!
        </span>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold bg-white text-[#D14F42] px-4 py-1 hover:bg-[#FFC53A] hover:text-black transition-colors"
        >
          Ver en vivo →
        </a>
      </div>
    </div>
  );
}
