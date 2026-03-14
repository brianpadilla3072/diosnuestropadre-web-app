import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: "membresia",
    title: "MEMBRESÍA",
    description: "Acceso ilimitado a todos los cursos de DNP Online.",
    price: "$15/mensual",
    instructor: "Iglesia Dios Nuestro Padre",
    // TODO: reemplazar image con imagen de DNP
    image: "https://misioninstituto.com/wp-content/uploads/2023/12/ab8d6589-c7d9-49ab-81e9-f882ac137557-1024x576.jpg",
    href: "/auth/registro",
    featured: true,
  },
  {
    id: "carrera",
    title: "CARRERA MINISTERIAL ONLINE",
    description: "Entrenamiento de tres años online con contenido ministerial completo.",
    price: null,
    instructor: "Iglesia Dios Nuestro Padre",
    image: null,
    href: "/carrera-ministerial-online",
  },
  {
    id: "liderazgo",
    title: "LIDERAZGO ESPIRITUAL",
    description: "Levantando líderes conforme al corazón de Dios.",
    price: null,
    instructor: "Mariano Sennewald",
    image: null,
    href: "/cursos/liderazgo-espiritual",
  },
  {
    id: "apocalipsis",
    title: "APOCALIPSIS",
    description: "Estudio profundo del libro de Apocalipsis.",
    price: null,
    instructor: "Mariano Sennewald",
    image: null,
    href: "/cursos/apocalipsis",
  },
  {
    id: "sanidad",
    title: "SANIDAD INTERIOR",
    description: "Proceso de sanidad y restauración del alma.",
    price: null,
    instructor: "Analía Sennewald",
    image: null,
    href: "/cursos/sanidad-interior",
  },
  {
    id: "desafio",
    title: "DESAFÍO SELAH",
    description: "Un desafío espiritual de 21 días.",
    price: null,
    instructor: "Iglesia Dios Nuestro Padre",
    image: null,
    href: "/cursos/desafio-selah",
  },
];

export default function MisionOnline() {
  return (
    <section className="section-padding bg-white">
      <div className="site-wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-tag">Plataforma Digital</span>
            <h2 className="heading-lg">DNP Online</h2>
            <p className="mt-3 text-lg max-w-xl">
              Transfórmate en un mensajero del Reino de los Cielos en tu comunidad y ciudad.
            </p>
          </div>
          <Link href="/cursos" className="btn btn-secondary flex-shrink-0">
            Ver todos los cursos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="card program-card group flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden" style={{ background: "var(--brand-gradient)" }}>
                {course.image ? (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-black uppercase tracking-tighter" style={{ color: "var(--accent-sky)", opacity: 0.3 }}>
                      {course.title.slice(0, 1)}
                    </span>
                  </div>
                )}
                {course.featured && (
                  <div className="absolute top-3 right-3 badge badge-gold">
                    Destacado
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 bg-off-white">
                <h3
                  className="font-bold mb-1 group-hover:text-[color:var(--primary)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "15px", color: "var(--text-dark)" }}
                >
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1">{course.description}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: "var(--border-light)" }}>
                  <span className="text-xs" style={{ color: "var(--text-slate)" }}>
                    <strong>Instructor:</strong> {course.instructor}
                  </span>
                  {course.price && (
                    <span className="font-bold text-sm" style={{ color: "var(--accent-red)" }}>
                      {course.price}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
