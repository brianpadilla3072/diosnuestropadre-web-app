import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";



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
                ¿Quiénes somos?
              </h2>
              <p className="text-[#545454] text-lg leading-relaxed mb-6">
                Dios Nuestro Padre es una iglesia donde hombres y mujeres son preparados
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
            <div className="max-w-3xl">
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
                  El propósito de Dios Nuestro Padre es preparar una Iglesia que difunda el reino divino, enfocándose
                  en restaurar los dos mandamientos principales entre los creyentes: amar a Dios con todo
                  el ser y amar al prójimo como a uno mismo.
                </p>
                <p className="text-[#545454] leading-relaxed mb-5">
                  Entendemos que el plan de Dios para la tierra se llevará a cabo a través de una Iglesia
                  preparada, sana y activa en los dones y poder del Espíritu Santo.
                </p>
                <p className="text-[#545454] leading-relaxed">
                  La estrategia de Dios Nuestro Padre es la capacitación técnica, teológica y práctica en contextos
                  de adoración e intimidad espiritual. Cada carrera y programa está diseñado para que
                  el alumno no solo aprenda, sino que sea transformado desde adentro.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
