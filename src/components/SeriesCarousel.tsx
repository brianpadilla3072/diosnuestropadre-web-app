"use client";
import Link from "next/link";
import { useRef } from "react";
import type { SerieWithCount } from "@/lib/db";

interface Props {
  series: SerieWithCount[];
}

export default function SeriesCarousel({ series }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("article");
    const step = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  }

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--dark-navy)" }}>
      <div className="site-wrapper">

        {/* Encabezado */}
        <div className="flex items-end justify-between mb-10" data-aos="fade-up">
          <div>
            <span className="section-tag" style={{ display: "inline-block" }}>
              Palabras y Enseñanzas
            </span>
            <h2 className="heading-lg mt-2" style={{ color: "#fff" }}>
              Series de Estudio
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Explorá cada serie y accedé a todos sus cultos y enseñanzas.
            </p>
          </div>

          {/* Flechas desktop */}
          <div className="hidden md:flex gap-2 flex-shrink-0 mb-1">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center text-xl font-bold text-white hover:text-[#FFC53A] transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center text-xl font-bold text-white hover:text-[#FFC53A] transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>

        {/* Track del carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {series.map((serie, i) => (
            <article
              key={serie.id}
              className="flex-shrink-0 w-[260px] sm:w-[280px]"
              style={{ scrollSnapAlign: "start" }}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 80, 400)}
            >
              <Link
                href={`/series/${serie.id}`}
                className="flex flex-col h-full p-6 group transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Barra de acento superior */}
                <div
                  className="w-8 h-[3px] mb-5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--accent-red)" }}
                />

                {/* Contador */}
                <span
                  className="text-xs font-semibold mb-3 block"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {serie.count} culto{serie.count !== 1 ? "s" : ""}
                </span>

                {/* Nombre de la serie */}
                <h3
                  className="text-base font-semibold leading-snug flex-1 mb-6 group-hover:text-[#FFC53A] transition-colors"
                  style={{ color: "#fff" }}
                >
                  {serie.nombre}
                </h3>

                {/* CTA */}
                <div
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "var(--accent-red)" }}
                >
                  Ver serie
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA global */}
        <div className="text-center mt-10" data-aos="fade-up">
          <Link href="/reuniones-generales" className="btn btn-secondary">
            Ver todos los cultos
          </Link>
        </div>
      </div>
    </section>
  );
}
