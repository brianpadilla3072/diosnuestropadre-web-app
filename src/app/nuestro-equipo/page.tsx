import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const team = [
  { name: "Maxi Zeravika", role: "Staff Principal y Profesor" },
  { name: "Priscila Martínez", role: "Staff Principal y Profesora" },
  { name: "Agustín Salces", role: "Director Equipo Ministerial" },
  { name: "Carolina Barrios", role: "Coordinadora de Administración" },
  { name: "Yanina Rossi", role: "Coordinadora de Finanzas" },
  { name: "Daiam Ortiz", role: "Director Carrera Gen. Emergente" },
  { name: "Daiana Salces", role: "Coordinadora General Betania" },
  { name: "Rafael Keller Coelho", role: "Director Carrera Liderazgo" },
  { name: "Solange Presas", role: "Staff Nueva Generación" },
  { name: "Rocío González", role: "Staff Principal y Profesora" },
];

export default function NuestroEquipo() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Nuestro Equipo"
          subtitle="Profesionales de distintas congregaciones unidos por el propósito de entrenar a la Iglesia"
          tag="Nosotros"
        />

        {/* Dirección General */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Dirección General
            </span>
            <h2
              className="font-bold text-[#292929] mb-12"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
              }}
            >
              Mariano y Analía Sennewald
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-8 mb-6">
                  <h3
                    className="font-bold text-[#292929] mb-4"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "22px" }}
                  >
                    Mariano Sennewald
                  </h3>
                  <p className="text-[#545454] leading-relaxed mb-4">
                    Fundador y Director General de Iglesia Dios Nuestro Padre. Pastor de la Iglesia El Encuentro
                    en Buenos Aires, Argentina.
                  </p>
                  <p className="text-[#545454] leading-relaxed mb-4">
                    Autor de libros sobre intimidad con Dios y liderazgo ministerial. Su vida y ministerio
                    están marcados por una profunda pasión por la presencia de Dios y la preparación de
                    la Iglesia para los últimos tiempos.
                  </p>
                  <p className="text-[#545454] leading-relaxed">
                    Vive con su esposa Analía y sus hijas Constanza y Catalina.
                  </p>
                </div>
              </div>

              <div>
                <div className="p-8 text-white" style={{ background: "var(--brand-gradient)" }}>
                  <svg className="w-8 h-8 text-[#FFC53A] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-[#E8D7B9] text-lg italic leading-relaxed mb-4">
                    «Cuando Dios quiere hacer algo grande en una vida, lo primero que hace es sacar a esa
                    persona de su contexto y rutina para entrenarla en el desierto antes de su llamado.»
                  </blockquote>
                  <cite className="text-[#FFC53A] text-sm font-semibold uppercase tracking-widest">
                    — Mariano Sennewald
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 bg-[#FAFAFA]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Staff
            </span>
            <h2
              className="font-bold text-[#292929] mb-10"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 40px)",
              }}
            >
              Equipo de Liderazgo
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-[#e0e0e0] p-6 hover:border-[color:var(--primary)] transition-colors group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3
                    className="font-bold text-[#292929] mb-1 group-hover:text-[color:var(--primary)] transition-colors"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "15px" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#545454] text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="text-white p-10 md:p-14 text-center" style={{ background: "var(--brand-gradient)" }}>
              <h2
                className="font-bold text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Un equipo unido por un propósito
              </h2>
              <p className="text-white/85 max-w-2xl mx-auto leading-relaxed">
                Nuestro equipo proviene de diferentes congregaciones y corrientes, pero estamos
                unidos bajo la visión de preparar una generación de líderes que manifiesten el Reino
                de Dios en las naciones.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
