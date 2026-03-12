import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import PalabraCard from "@/components/PalabraCard";
import SerieSelect from "@/components/SerieSelect";
import Link from "next/link";
import { listPalabras, countPalabras, listSeries } from "@/lib/db";

const PER_PAGE = 12;

interface Props {
  searchParams: Promise<{ page?: string; tipo?: string; serie?: string }>;
}

export const metadata = {
  title: "Devocionales y Palabras – Dios Nuestro Padre",
  description:
    "Palabras, cultos y enseñanzas del ministerio Dios Nuestro Padre. Contenido transcrito para volver a la Palabra cuando lo necesites.",
};

export default async function ReunionesGeneralesPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page ?? 1));
  const tipo = params.tipo ?? "";
  const serieId = params.serie ? Number(params.serie) : undefined;

  const [palabras, total, series] = [
    listPalabras({ page, limit: PER_PAGE, tipo: tipo || undefined, serie_id: serieId }),
    countPalabras({ tipo: tipo || undefined, serie_id: serieId }),
    listSeries(),
  ];

  const totalPages = Math.ceil(total / PER_PAGE);

  function buildUrl(p: number, t?: string, s?: number) {
    const sp = new URLSearchParams();
    if (p > 1) sp.set("page", String(p));
    if (t) sp.set("tipo", t);
    if (s) sp.set("serie", String(s));
    const qs = sp.toString();
    return `/reuniones-generales${qs ? "?" + qs : ""}`;
  }

  return (
    <>
      <Header />
      <main>
        <PageBanner
          tag="Palabras y Enseñanzas"
          title="Devocionales"
          subtitle="Cultos y enseñanzas transcritos del ministerio Dios Nuestro Padre"
        />

        <section className="section-padding">
          <div className="site-wrapper">
            {/* Filtros */}
            <div
              className="flex flex-wrap gap-3 mb-10 pb-6 border-b"
              style={{ borderColor: "var(--border-light)" }}
              data-aos="fade-up"
            >
              <span className="text-sm font-semibold self-center" style={{ color: "var(--text-slate)" }}>
                Filtrar:
              </span>

              {/* Tipo */}
              {[
                { label: "Todos", value: "" },
                { label: "Palabras / Cultos", value: "culto" },
                { label: "Enseñanzas (Diezmo)", value: "diezmo" },
              ].map((f) => (
                <Link
                  key={f.value}
                  href={buildUrl(1, f.value || undefined, serieId)}
                  className={`btn btn-sm ${tipo === f.value ? "btn-primary" : "btn-secondary"}`}
                >
                  {f.label}
                </Link>
              ))}

              {/* Serie */}
              <SerieSelect series={series} currentSerie={serieId} tipo={tipo || undefined} />
              {/* Links de serie */}
              {serieId && (
                <Link href={buildUrl(1, tipo || undefined)} className="btn btn-sm btn-outline-white" style={{ background: "var(--accent-red)", border: "none" }}>
                  ✕ Quitar serie
                </Link>
              )}
            </div>

            {/* Resultados */}
            <p className="text-sm mb-6" style={{ color: "var(--text-light)" }} data-aos="fade-up">
              {total} resultado{total !== 1 ? "s" : ""}
            </p>

            {palabras.length === 0 ? (
              <div className="text-center py-20" data-aos="fade-up">
                <p style={{ color: "var(--text-light)" }}>No hay resultados para esta búsqueda.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {palabras.map((p, i) => (
                  <PalabraCard key={p.id} palabra={p} aosDelay={i * 60} />
                ))}
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <nav
                className="flex justify-center gap-2"
                aria-label="Paginación"
                data-aos="fade-up"
              >
                {page > 1 && (
                  <Link href={buildUrl(page - 1, tipo || undefined, serieId)} className="btn btn-sm btn-secondary">
                    ← Anterior
                  </Link>
                )}
                <span className="btn btn-sm" style={{ background: "var(--primary)", color: "#fff", cursor: "default" }}>
                  {page} / {totalPages}
                </span>
                {page < totalPages && (
                  <Link href={buildUrl(page + 1, tipo || undefined, serieId)} className="btn btn-sm btn-secondary">
                    Siguiente →
                  </Link>
                )}
              </nav>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
