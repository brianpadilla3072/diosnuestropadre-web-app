import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

interface Module {
  name: string;
  courses: string[];
}

interface CareerPageProps {
  title: string;
  titleAccent?: string;
  tag: string;
  bannerColor?: string;
  accentColor?: string;
  tagline: string;
  description: string;
  duration: string;
  modality: string;
  schedule?: string;
  startDate?: string;
  ageRange?: string;
  modules: Module[];
  ministerialSubjects?: string[];
  requirements: string[];
  registrationUrl: string;
  whatsappUrl?: string;
  extraInfo?: string;
}

export default function CareerPage({
  title,
  titleAccent,
  tag,
  bannerColor = "#0d0d1a",
  accentColor = "#D14F42",
  tagline,
  description,
  duration,
  modality,
  schedule,
  startDate = "Marzo 2026",
  ageRange,
  modules,
  ministerialSubjects,
  requirements,
  registrationUrl,
  whatsappUrl = "https://wa.me/5491176060023",
  extraInfo,
}: CareerPageProps) {
  const fullTitle = titleAccent ? `${title} ${titleAccent}` : title;

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title={fullTitle}
          subtitle={tagline}
          tag={tag}
          bgColor={bannerColor}
          accentColor={accentColor}
        />

        {/* Info bar */}
        <div className="text-white" style={{ background: "var(--brand-gradient)" }}>
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 py-5">
            <div className="flex flex-wrap gap-6 md:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFC53A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span><strong>Inicio:</strong> {startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFC53A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Duración:</strong> {duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFC53A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span><strong>Modalidad:</strong> {modality}</span>
              </div>
              {schedule && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FFC53A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span><strong>Horario:</strong> {schedule}</span>
                </div>
              )}
              {ageRange && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FFC53A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span><strong>Edad:</strong> {ageRange}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white py-16 md:py-20">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Left: Description + Curriculum */}
              <div className="lg:col-span-2">
                <h2
                  className="font-bold text-[#292929] mb-6"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "clamp(24px, 3vw, 36px)",
                  }}
                >
                  Descripción del programa
                </h2>
                <p className="text-[#545454] leading-relaxed mb-10 text-lg">
                  {description}
                </p>

                {extraInfo && (
                  <p className="text-[#545454] leading-relaxed mb-10 text-lg">
                    {extraInfo}
                  </p>
                )}

                {/* Curriculum */}
                <div>
                  <h2
                    className="font-bold text-[#292929] mb-8"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "clamp(22px, 3vw, 32px)",
                    }}
                  >
                    Plan de estudios
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {modules.map((mod, i) => (
                      <div
                        key={i}
                        className="border border-[#e0e0e0] p-6"
                        style={{ borderTopColor: accentColor, borderTopWidth: "3px" }}
                      >
                        <h3
                          className="font-bold text-[#292929] mb-4 text-base uppercase tracking-wide"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {mod.name}
                        </h3>
                        <ul className="space-y-2">
                          {mod.courses.map((course, j) => (
                            <li key={j} className="text-[#545454] text-sm flex items-start gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: accentColor }}
                              />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {ministerialSubjects && ministerialSubjects.length > 0 && (
                    <div className="mt-5 bg-[#FAFAFA] border border-[#e0e0e0] p-6">
                      <h3
                        className="font-bold text-[#292929] mb-4 text-base uppercase tracking-wide"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        Materias Ministeriales
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {ministerialSubjects.map((subject, i) => (
                          <div key={i} className="text-[#545454] text-sm flex items-start gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: "var(--primary)" }}
                            />
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="lg:col-span-1">
                {/* Requirements */}
                <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-7 mb-6">
                  <h3
                    className="font-bold text-[#292929] mb-5 uppercase tracking-wide text-sm"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Requisitos de admisión
                  </h3>
                  <ul className="space-y-3">
                    {requirements.map((req, i) => (
                      <li key={i} className="text-[#545454] text-sm flex items-start gap-3">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: accentColor }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div
                  className="p-7 text-white"
                  style={{ backgroundColor: bannerColor !== "#0d0d1a" ? bannerColor : "var(--primary)" }}
                >
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    ¿Listo para inscribirte?
                  </h3>
                  <p className="text-[#E8D7B9] text-sm mb-6 leading-relaxed">
                    Completá el formulario de inscripción y comenzá tu proceso de entrenamiento ministerial.
                  </p>
                  <a
                    href={registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 font-bold text-sm uppercase tracking-wider bg-white hover:bg-[#FFC53A] transition-colors mb-3"
                    style={{ color: "var(--primary)" }}
                  >
                    Inscribirme ahora
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center py-3 font-bold text-sm uppercase tracking-wider border-2 border-white/40 text-white hover:border-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>

                {/* Pillars */}
                <div className="mt-6 border border-[#e0e0e0] p-7">
                  <h3
                    className="font-bold text-[#292929] mb-4 uppercase tracking-wide text-sm"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Pilares institucionales
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Intimidad", "Biblia", "Iglesia", "Carácter", "Últimos Tiempos", "Cultura de Reino", "Gran Comisión"].map((pillar) => (
                      <span
                        key={pillar}
                        className="text-xs font-semibold px-3 py-1.5 uppercase tracking-wide"
                        style={{ backgroundColor: "rgba(45,43,122,0.1)", color: "var(--primary)" }}
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#FAFAFA] py-14">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 text-center">
            <h2
              className="font-bold text-[#292929] mb-4"
              style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              ¿Tenés preguntas?
            </h2>
            <p className="text-[#545454] mb-8 max-w-xl mx-auto">
              Contactanos y te contamos todo sobre la carrera, aranceles y proceso de inscripción.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="btn btn-secondary">
                Formulario de contacto
              </Link>
              {/* TODO: email DNP */}
              <a
                href="mailto:info@misioninstituto.com"
                className="btn btn-primary"
              >
                info@misioninstituto.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
