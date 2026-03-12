import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const events = [
  {
    id: "intimidad",
    name: "Intimidad Con El Amado",
    tag: "Congreso Anual",
    tagColor: "#36348E",
    description:
      "Un encuentro anual del cuerpo de Cristo donde año a año hemos visto a miles de personas de diferentes lugares experimentar encuentros profundos con Dios. Un espacio de adoración, intercesión y revelación de la Palabra.",
    href: "https://intimidadconelamado.com",
    external: true,
    icon: "🙏",
  },
  {
    id: "jeps",
    name: "Jesús El Placer Superior",
    tag: "Conferencia",
    tagColor: "#D14F42",
    description:
      "Una conferencia enfocada en buscar el corazón de Jesús. Tiempos de intimidad, adoración y enseñanza bíblica profunda para aquellos que anhelan conocer más de la persona de Jesús.",
    href: "https://gi-jeps.com/jeps",
    external: true,
    icon: "✨",
  },
  {
    id: "generacion",
    name: "Generación Inconmovible",
    tag: "Entrenamiento Intensivo",
    tagColor: "#36348E",
    description:
      "Un entrenamiento intensivo de cuatro días centrado en los tiempos del fin. Incluye clases de revelación bíblica, adoración, intercesión y ministerio. Diseñado para equipar a una generación que no será sacudida.",
    href: "https://gi-jeps.com",
    external: true,
    icon: "⚡",
  },
];

export default function Congresos() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Eventos y Congresos"
          subtitle="Ambientes de intimidad, adoración, enseñanza y revelación"
          tag="Próximos eventos"
        />

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-14">
              <p className="text-[#545454] text-lg leading-relaxed">
                Cada uno de los programas que desarrollamos en MiSion, tanto las diferentes jornadas
                como los congresos y actividades, tienen por objetivo ser parte del entrenamiento en
                ambientes de intimidad, adoración, enseñanza y revelación.
              </p>
            </div>

            {/* Events */}
            <div className="space-y-8">
              {events.map((event, i) => (
                <div
                  key={event.id}
                  className="border border-[#e0e0e0] overflow-hidden"
                  style={{ borderTopColor: event.tagColor, borderTopWidth: "3px" }}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="text-5xl flex-shrink-0">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className="text-xs font-bold uppercase tracking-wider px-3 py-1"
                            style={{
                              backgroundColor: event.tagColor + "20",
                              color: event.tagColor,
                            }}
                          >
                            {event.tag}
                          </span>
                        </div>
                        <h2
                          className="font-bold text-[#292929] mb-4"
                          style={{
                            fontFamily: "'Work Sans', sans-serif",
                            fontSize: "clamp(22px, 3vw, 32px)",
                          }}
                        >
                          {event.name}
                        </h2>
                        <p className="text-[#545454] leading-relaxed mb-6 text-lg">
                          {event.description}
                        </p>
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wider text-white transition-all"
                          style={{ backgroundColor: event.tagColor }}
                        >
                          Ver más información
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-[#36348E]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 text-center">
            <h2
              className="font-bold text-white mb-4"
              style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              ¿Querés saber cuándo es el próximo evento?
            </h2>
            <p className="text-[#B7D8EF] mb-8 max-w-xl mx-auto">
              Contactanos para recibir información sobre los próximos congresos, conferencias y jornadas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#36348E] font-bold text-sm uppercase tracking-wider hover:bg-[#FFC53A] hover:text-[#292929] transition-all"
            >
              Contactar
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
