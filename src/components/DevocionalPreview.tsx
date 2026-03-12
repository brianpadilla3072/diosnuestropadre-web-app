import Link from "next/link";

export default function DevocionalPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
      <div
        className="absolute -top-px left-0 w-full overflow-hidden"
        style={{ height: 60 }}
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ display: "block" }}
        >
          <polygon points="0,0 1440,0 1440,60" fill="white" />
        </svg>
      </div>

      <div className="relative site-wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="section-tag" style={{ display: "inline-block" }}>
            Palabras y Enseñanzas
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            Últimas Palabras de Dios Nuestro Padre
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-slate)" }}>
            Devocionales, enseñanzas y cultos transcritos para que puedas volver a la Palabra cuando lo necesites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          {/* Artículo 1 */}
          <article
            className="card card-accent-top flex flex-col h-full"
            style={{ borderTopColor: "var(--accent-red)" }}
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent-red) 12%, transparent)",
                    color: "var(--accent-red)",
                  }}
                >
                  Palabra
                </span>
                <span className="badge badge-sky">Sanidad que transforma</span>
              </div>
              <h3 className="heading-sm mb-3 line-clamp-2">Sanos para Servir</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
                Antes de ir a la palabra, quiero ponerte en contexto porque cuando leemos la palabra de Dios, la podemos aplicar a nuestro aquí y ahora, pero tenemos que entend…
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>8 de marzo de 2026</span>
                <Link href="/reuniones-generales/289" className="btn btn-sm btn-primary ml-auto">
                  Leer →
                </Link>
              </div>
            </div>
          </article>

          {/* Artículo 2 */}
          <article
            className="card card-accent-top flex flex-col h-full"
            style={{ borderTopColor: "var(--accent-red)" }}
            data-aos="fade-up"
            data-aos-delay={80}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent-red) 12%, transparent)",
                    color: "var(--accent-red)",
                  }}
                >
                  Palabra
                </span>
                <span className="badge badge-sky">Sanidad que transforma</span>
              </div>
              <h3 className="heading-sm mb-3 line-clamp-2">El Valor de una Herencia</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
                Quiero hablarte hoy de herencia. Primero, ¿qué es herencia? Herencia es aquello que una persona recibe por pertenecer a una familia. Es aquello que una persona …
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>1 de marzo de 2026</span>
                <Link href="/reuniones-generales/272" className="btn btn-sm btn-primary ml-auto">
                  Leer →
                </Link>
              </div>
            </div>
          </article>

          {/* Artículo 3 */}
          <article
            className="card card-accent-top flex flex-col h-full"
            style={{ borderTopColor: "var(--accent-red)" }}
            data-aos="fade-up"
            data-aos-delay={160}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent-red) 12%, transparent)",
                    color: "var(--accent-red)",
                  }}
                >
                  Palabra
                </span>
                <span className="badge badge-sky">Sanidad que transforma</span>
              </div>
              <h3 className="heading-sm mb-3 line-clamp-2">Depende de mi</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
                Quiero compartirte algo antes de ir a la palabra. El Espíritu Santo nos está llevando a sanar, a sanar todas las áreas de nuestra vida. Quiero hablarte de esta …
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>22 de febrero de 2026</span>
                <Link href="/reuniones-generales/323" className="btn btn-sm btn-primary ml-auto">
                  Leer →
                </Link>
              </div>
            </div>
          </article>

          {/* Artículo 4 */}
          <article
            className="card card-accent-top flex flex-col h-full"
            style={{ borderTopColor: "var(--accent-red)" }}
            data-aos="fade-up"
            data-aos-delay={240}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent-red) 12%, transparent)",
                    color: "var(--accent-red)",
                  }}
                >
                  Palabra
                </span>
                <span className="badge badge-sky">Sanidad que transforma</span>
              </div>
              <h3 className="heading-sm mb-3 line-clamp-2">Acaso soy yo guarda de mi hermano?</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
                Tenemos que mirar a Dios, confiar en Dios. Por eso nos congregamos, por eso tenemos que leer más la Biblia, por eso tenemos que orar, porque si no lo hacemos, n…
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>16 de febrero de 2026</span>
                <Link href="/reuniones-generales/262" className="btn btn-sm btn-primary ml-auto">
                  Leer →
                </Link>
              </div>
            </div>
          </article>

          {/* Artículo 5 */}
          <article
            className="card card-accent-top flex flex-col h-full"
            style={{ borderTopColor: "var(--accent-red)" }}
            data-aos="fade-up"
            data-aos-delay={320}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent-red) 12%, transparent)",
                    color: "var(--accent-red)",
                  }}
                >
                  Palabra
                </span>
                <span className="badge badge-sky">Sanidad que transforma</span>
              </div>
              <h3 className="heading-sm mb-3 line-clamp-2">Mayordomos o dueños</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
                Todo surgió en el Edén. Cuando Dios crea al hombre y forma a la mujer de la costilla del hombre, los creó con un propósito y los puso en un lugar que tenía prop…
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>9 de febrero de 2026</span>
                <Link href="/reuniones-generales/253" className="btn btn-sm btn-primary ml-auto">
                  Leer →
                </Link>
              </div>
            </div>
          </article>

          {/* Artículo 6 */}
          <article
            className="card card-accent-top flex flex-col h-full"
            style={{ borderTopColor: "var(--accent-gold)" }}
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent-gold) 12%, transparent)",
                    color: "var(--accent-gold)",
                  }}
                >
                  Enseñanza
                </span>
                <span className="badge badge-sky">Sanidad que transforma</span>
              </div>
              <h3 className="heading-sm mb-3 line-clamp-2">Mayordomos o dueños</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
                Quiero arrancar haciéndote una introducción para poder entender de qué es que nuestra área económica en el hogar esté sana, porque puede ser que el área financi…
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>9 de febrero de 2026</span>
                <Link href="/reuniones-generales/254" className="btn btn-sm btn-primary ml-auto">
                  Leer →
                </Link>
              </div>
            </div>
          </article>

        </div>

        <div className="text-center" data-aos="fade-up">
          <Link href="/reuniones-generales" className="btn btn-secondary">
            Ver todas las palabras
          </Link>
        </div>
      </div>
    </section>
  );
}
