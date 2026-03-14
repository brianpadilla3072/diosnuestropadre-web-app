import Link from "next/link";

const programs = [
  {
    id: "internado",
    title: "Internado",
    subtitle: "Intensivo",
    description: "Una experiencia presencial e inmersiva para quienes vienen desde afuera de Buenos Aires. Entrenamiento intensivo y práctico de la cultura del Reino.",
    icon: "🏠",
    accentColor: "var(--primary)",
    href: "/carrera-internado",
    tag: "Presencial",
  },
  {
    id: "liderazgo",
    title: "Carrera de",
    subtitle: "Liderazgo",
    description: "Formación integral para líderes que quieren servir con excelencia y carácter en sus iglesias locales y comunidades.",
    icon: "👑",
    accentColor: "var(--accent-red)",
    href: "/carrera-de-liderazgo",
    tag: "Presencial",
  },
  {
    id: "adoracion",
    title: "Carrera de",
    subtitle: "Adoración",
    description: "Equipa músicos y adoradores para ministrar en la presencia de Dios y liderar a las congregaciones al encuentro con Él.",
    icon: "🎵",
    accentColor: "var(--primary)",
    href: "/carrera-de-adoracion",
    tag: "Presencial",
  },
  {
    id: "medios",
    title: "Carrera de",
    subtitle: "Medios Audiovisuales",
    description: "Formación técnica y ministerial para comunicadores visuales que quieren usar su talento al servicio del Reino.",
    icon: "🎬",
    accentColor: "var(--accent-red)",
    href: "/carrera-de-medios-audiovisuales",
    tag: "Presencial",
  },
  {
    id: "generacion-emergente",
    title: "Carrera",
    subtitle: "Generación Emergente",
    description: "Diseñada para jóvenes que quieren ser equipados para liderar la próxima generación con propósito y visión.",
    icon: "⚡",
    accentColor: "var(--primary)",
    href: "/carrera-generacion-emergente",
    tag: "Adolescentes",
  },
  {
    id: "nueva-generacion",
    title: "Carrera",
    subtitle: "Nueva Generación",
    description: "Formación especial orientada a niños para sembrar el Reino desde temprana edad.",
    icon: "🌱",
    accentColor: "var(--accent-red)",
    href: "/carrera-nueva-generacion",
    tag: "Niños",
  },
  {
    id: "online",
    title: "Carrera Ministerial",
    subtitle: "Online",
    description: "Toda la formación de Iglesia Dios Nuestro Padre desde cualquier lugar del mundo. Tres años de entrenamiento ministerial online.",
    icon: "💻",
    accentColor: "#4A90D9",
    href: "/carrera-ministerial-online",
    tag: "Online",
  },
];

export default function Programs() {
  return (
    <section id="carreras" className="section-padding bg-off-white">
      <div className="site-wrapper">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag" style={{ display: "inline-block" }}>
            Formación Ministerial
          </span>
          <h2 className="heading-lg">Carreras Ministeriales</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Encuentra la carrera que Dios tiene para ti y comienza tu proceso de entrenamiento ministerial.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={program.href}
              className="program-card card flex flex-col group"
            >
              {/* Top accent bar */}
              <div className="h-[3px]" style={{ backgroundColor: program.accentColor }} />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{program.icon}</span>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: program.accentColor + "18",
                      color: program.accentColor,
                    }}
                  >
                    {program.tag}
                  </span>
                </div>

                <h3
                  className="font-bold mb-2 group-hover:text-[color:var(--primary)] transition-colors"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "22px",
                    lineHeight: "1.2",
                    color: "var(--text-dark)",
                  }}
                >
                  {program.title}
                  <br />
                  <span style={{ color: program.accentColor }}>{program.subtitle}</span>
                </h3>

                <p className="text-sm leading-relaxed flex-1">{program.description}</p>

                <div
                  className="mt-5 flex items-center gap-1.5 text-sm font-semibold group-hover:text-[color:var(--accent-red)] transition-colors"
                  style={{ color: "var(--primary)" }}
                >
                  Ver carrera
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* DNP Online CTA */}
        <div className="mt-12 cta-section p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="font-bold text-2xl md:text-3xl mb-2 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              DNP Online
            </h3>
            <p className="text-sm" style={{ color: "var(--accent-sky)" }}>
              Cursos, carreras y membresía para entrenar desde donde estés en el mundo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            {/* TODO: URL de DNP */}
            <a
              href="https://www.misiononline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Ver cursos online
            </a>
            {/* TODO: URL de DNP */}
            <a
              href="https://www.misiononline.com/p/membresia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              Membresía $15/mes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
