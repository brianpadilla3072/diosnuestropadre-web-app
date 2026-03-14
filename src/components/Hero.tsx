"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      {/* TODO: video DNP */}
      <video
        className="hero-video"
        autoPlay
        muted
        playsInline
        loop
        src="https://misioninstituto.com/wp-content/uploads/2023/10/web-mision1.mp4"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 site-wrapper py-32">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="heading-xl heading-white mb-6">
            Entrenando hijos e hijas de Dios para manifestar el Reino eterno en las naciones
          </h1>
          <p
            className="heading-sm mb-10"
            style={{ color: "var(--accent-cream)", fontFamily: "var(--font-heading)" }}
          >
            ¿Estás listo para ser parte?
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/vision-y-proposito" className="btn btn-outline-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Nuestra visión
            </Link>
            <a href="#carreras" className="btn btn-ghost-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Carreras Ministeriales
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
