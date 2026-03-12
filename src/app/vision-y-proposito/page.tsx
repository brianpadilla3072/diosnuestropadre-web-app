import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const pillars = [
  { label: "Intimidad", icon: "🙏" },
  { label: "Biblia", icon: "📖" },
  { label: "Iglesia", icon: "⛪" },
  { label: "Carácter", icon: "⚜️" },
  { label: "Últimos Tiempos", icon: "⌛" },
  { label: "Cultura de Reino", icon: "👑" },
  { label: "Gran Comisión", icon: "🌍" },
];

const programs = [
  { label: "Internado Intensivo", href: "/carrera-internado" },
  { label: "Carrera Ministerial Online", href: "/carrera-ministerial-online" },
  { label: "Carrera de Adoración", href: "/carrera-de-adoracion" },
  { label: "Carrera de Liderazgo", href: "/carrera-de-liderazgo" },
  { label: "Carrera de Medios Audiovisuales", href: "/carrera-de-medios-audiovisuales" },
  { label: "Carrera Generación Emergente", href: "/carrera-generacion-emergente" },
  { label: "Carrera Nueva Generación", href: "/carrera-nueva-generacion" },
];

export default function VisionYProposito() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Visión y Propósito"
          subtitle="Entrenando hijos e hijas de Dios para manifestar el Reino eterno en las naciones"
          tag="Nosotros"
        />

        {/* Visión */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="max-w-3xl">
              <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
                Nuestra Visión
              </span>
              <h2
                className="font-bold text-[#292929] mb-6"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.2",
                }}
              >
                ¿Qué es MiSion?
              </h2>
              <p className="text-[#545454] text-lg leading-relaxed mb-6">
                MiSion es un centro de entrenamiento ministerial donde hombres y mujeres son preparados
                para manifestar el Reino de Dios en la tierra.
              </p>
              <blockquote className="border-l-4 border-[#D14F42] pl-6 py-2 my-8">
                <p className="text-[#292929] text-xl font-semibold italic leading-relaxed">
                  «Entrenando hijos e hijas de Dios para manifestar el Reino eterno en las naciones»
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Propósito */}
        <section className="py-16 bg-[#FAFAFA]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Nuestro Propósito
                </span>
                <h2
                  className="font-bold text-[#292929] mb-6"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "clamp(26px, 3.5vw, 40px)",
                    lineHeight: "1.2",
                  }}
                >
                  Preparar una Iglesia para el Reino
                </h2>
                <p className="text-[#545454] leading-relaxed mb-5">
                  El propósito de MiSion es preparar una Iglesia que difunda el reino divino, enfocándose
                  en restaurar los dos mandamientos principales entre los creyentes: amar a Dios con todo
                  el ser y amar al prójimo como a uno mismo.
                </p>
                <p className="text-[#545454] leading-relaxed mb-5">
                  Entendemos que el plan de Dios para la tierra se llevará a cabo a través de una Iglesia
                  preparada, sana y activa en los dones y poder del Espíritu Santo.
                </p>
                <p className="text-[#545454] leading-relaxed">
                  La estrategia de MiSion es la capacitación técnica, teológica y práctica en contextos
                  de adoración e intimidad espiritual. Cada carrera y programa está diseñado para que
                  el alumno no solo aprenda, sino que sea transformado desde adentro.
                </p>
              </div>
              <div>
                <h3
                  className="font-bold text-[#292929] mb-6 uppercase tracking-wide text-sm"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  Programas y Carreras
                </h3>
                <ul className="space-y-3">
                  {programs.map((p) => (
                    <li key={p.label}>
                      <Link
                        href={p.href}
                        className="flex items-center gap-3 text-[#545454] hover:text-[#36348E] transition-colors group"
                      >
                        <svg
                          className="w-4 h-4 text-[#D14F42] group-hover:translate-x-1 transition-transform flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 md:py-20 bg-[#0d0d1a]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="text-center mb-12">
              <span className="text-[#FFC53A] font-semibold text-sm uppercase tracking-widest mb-4 block">
                Fundamentos
              </span>
              <h2
                className="font-bold text-white"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                }}
              >
                Pilares Institucionales
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="bg-white/5 border border-white/10 p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl mb-3">{pillar.icon}</div>
                  <p className="text-white text-sm font-semibold uppercase tracking-wide">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 text-center">
            <h2
              className="font-bold text-[#292929] mb-4"
              style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              ¿Querés ser parte de MiSion?
            </h2>
            <p className="text-[#545454] mb-8 max-w-xl mx-auto">
              Explorá nuestras carreras y comenzá tu proceso de entrenamiento ministerial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#carreras"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#36348E] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#D14F42] transition-all"
              >
                Ver Carreras
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#36348E] text-[#36348E] font-semibold text-sm uppercase tracking-wider hover:bg-[#36348E] hover:text-white transition-all"
              >
                Contacto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
