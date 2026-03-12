import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPalabra } from "@/lib/db";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PalabraDetallePage({ params }: Props) {
  const { id } = await params;
  const palabra = getPalabra(Number(id));

  if (!palabra) notFound();

  const fecha = palabra.fecha_publicacion
    ? new Date(palabra.fecha_publicacion + "T00:00:00").toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const tipoLabel = palabra.tipo === "diezmo" ? "Enseñanza" : "Palabra";
  const tipoColor = palabra.tipo === "diezmo" ? "var(--accent-gold)" : "var(--accent-red)";

  // Renderizar Markdown simple (solo ## y párrafos)
  const htmlContent = palabra.contenido
    .split("\n")
    .reduce<string[]>((acc, line) => {
      const h2 = line.match(/^##\s+(.+)/);
      const h3 = line.match(/^###\s+(.+)/);
      if (h2) {
        acc.push(`<h2>${h2[1]}</h2>`);
      } else if (h3) {
        acc.push(`<h3>${h3[1]}</h3>`);
      } else if (line.trim()) {
        acc.push(`<p>${line.trim()}</p>`);
      }
      return acc;
    }, [])
    .join("\n");

  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section
          className="page-banner"
          style={{ backgroundColor: "var(--dark-navy)" }}
        >
          <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: tipoColor }} />
          <div className="site-wrapper">
            {/* Breadcrumb */}
            <nav className="breadcrumb mb-6">
              <Link href="/">Inicio</Link>
              <span className="breadcrumb-sep">›</span>
              <Link href="/reuniones-generales">Devocionales</Link>
              <span className="breadcrumb-sep">›</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>{palabra.titulo}</span>
            </nav>

            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="badge badge-white">{tipoLabel}</span>
              <span className="badge badge-sky">{palabra.serie}</span>
            </div>

            <h1 className="heading-xl heading-white mb-4">{palabra.titulo}</h1>

            {fecha && (
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {fecha}
              </p>
            )}
          </div>
        </section>

        {/* Contenido */}
        <section className="section-padding">
          <div className="site-wrapper">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

              {/* Texto */}
              <article
                className="prose-dnp"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Sidebar */}
              <aside data-aos="fade-left" data-aos-delay="200">
                {/* Ver en YouTube */}
                <div
                  className="p-6 mb-6"
                  style={{
                    background: "var(--bg-light)",
                    borderLeft: "4px solid var(--accent-red)",
                  }}
                >
                  <h4 className="heading-sm mb-3">Ver el culto</h4>
                  <p className="text-sm mb-4" style={{ color: "var(--text-slate)" }}>
                    Mirá el video completo en YouTube.
                  </p>
                  <a
                    href={palabra.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-red w-full text-center"
                    style={{ display: "flex" }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z" />
                    </svg>
                    Ver en YouTube
                  </a>
                </div>

                {/* Volver */}
                <Link href="/reuniones-generales" className="btn btn-secondary w-full text-center" style={{ display: "flex", justifyContent: "center" }}>
                  ← Volver al listado
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
