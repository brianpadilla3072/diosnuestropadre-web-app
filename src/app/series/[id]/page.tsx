import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { listPalabras, listSeries } from "@/lib/db";

interface Props {
  params: Promise<{ id: string }>;
}

function tipoLabel(tipo: string) {
  return tipo === "diezmo" ? "Enseñanza" : "Palabra";
}

function tipoColor(tipo: string) {
  return tipo === "diezmo" ? "var(--accent-gold)" : "var(--accent-red)";
}

export default async function SerieDetallePage({ params }: Props) {
  const { id } = await params;
  const serieId = Number(id);

  const series = listSeries();
  const serie = series.find((s) => s.id === serieId);
  if (!serie) notFound();

  const palabras = listPalabras({ serie_id: serieId, limit: 200 });
  const total = palabras.length;

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          className="relative pt-20 pb-16 overflow-hidden"
          style={{ backgroundColor: "#0d0d1a" }}
        >
          {/* Barra de acento superior */}
          <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "var(--accent-red)" }} />

          {/* Fondo decorativo */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="site-wrapper relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm mb-8 transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Inicio
            </Link>

            <div className="max-w-3xl">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
                style={{
                  background: "color-mix(in srgb, var(--accent-red) 20%, transparent)",
                  color: "var(--accent-red)",
                  border: "1px solid color-mix(in srgb, var(--accent-red) 40%, transparent)",
                }}
              >
                Serie
              </span>

              <h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#fff" }}
              >
                {serie.nombre}
              </h1>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent-red)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <strong style={{ color: "#fff" }}>{total}</strong> culto{total !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent-red)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Ministerio Dios Nuestro Padre
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contenido principal ────────────────────────────────── */}
        <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
          <div className="site-wrapper">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              {/* ── Lista de cultos (currículo) ───────────────────── */}
              <div>
                <h2 className="heading-md mb-6" data-aos="fade-up">
                  Cultos de esta serie
                </h2>

                {palabras.length === 0 ? (
                  <p style={{ color: "var(--text-light)" }}>No hay cultos en esta serie todavía.</p>
                ) : (
                  <div className="flex flex-col" style={{ border: "1px solid var(--border-light)" }}>
                    {palabras.map((p, i) => {
                      const fecha = p.fecha_publicacion
                        ? new Date(p.fecha_publicacion + "T00:00:00").toLocaleDateString("es-AR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : null;

                      return (
                        <Link
                          key={p.id}
                          href={`/reuniones-generales/${p.id}`}
                          className="flex items-center gap-4 px-5 py-4 group transition-colors hover:bg-white"
                          style={{
                            borderBottom: i < palabras.length - 1 ? "1px solid var(--border-light)" : "none",
                            backgroundColor: "transparent",
                          }}
                          data-aos="fade-up"
                          data-aos-delay={Math.min(i * 40, 300)}
                        >
                          {/* Número */}
                          <span
                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold"
                            style={{
                              background: "color-mix(in srgb, var(--accent-red) 10%, transparent)",
                              color: "var(--accent-red)",
                            }}
                          >
                            {i + 1}
                          </span>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span
                                className="text-xs font-semibold px-2 py-0.5"
                                style={{
                                  background: `color-mix(in srgb, ${tipoColor(p.tipo)} 12%, transparent)`,
                                  color: tipoColor(p.tipo),
                                }}
                              >
                                {tipoLabel(p.tipo)}
                              </span>
                              {fecha && (
                                <span className="text-xs" style={{ color: "var(--text-light)" }}>
                                  {fecha}
                                </span>
                              )}
                            </div>
                            <p
                              className="text-sm font-semibold truncate group-hover:text-[var(--accent-red)] transition-colors"
                              style={{ color: "var(--dark-navy)" }}
                            >
                              {p.titulo}
                            </p>
                          </div>

                          {/* Flecha */}
                          <svg
                            className="flex-shrink-0 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: "var(--accent-red)" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ── Sidebar ───────────────────────────────────────── */}
              <aside className="lg:sticky lg:top-24" data-aos="fade-left" data-aos-delay="150">
                <div
                  className="p-6"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-light)",
                    borderTop: "3px solid var(--accent-red)",
                  }}
                >
                  <h3 className="heading-sm mb-5">Sobre esta serie</h3>

                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--text-slate)" }}>Total de cultos</span>
                      <span className="text-sm font-bold" style={{ color: "var(--dark-navy)" }}>{total}</span>
                    </div>
                    <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--text-slate)" }}>Ministerio</span>
                      <span className="text-sm font-bold" style={{ color: "var(--dark-navy)" }}>Dios Nuestro Padre</span>
                    </div>
                    {palabras[0]?.fecha_publicacion && (
                      <div className="flex items-center justify-between py-3">
                        <span className="text-sm" style={{ color: "var(--text-slate)" }}>Última actualización</span>
                        <span className="text-sm font-bold" style={{ color: "var(--dark-navy)" }}>
                          {new Date(palabras[0].fecha_publicacion + "T00:00:00").toLocaleDateString("es-AR", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/reuniones-generales"
                    className="btn btn-secondary w-full text-center"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Ver todos los cultos
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
