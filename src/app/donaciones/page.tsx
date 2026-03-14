import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const projects = [
  {
    icon: "🙏",
    title: "Entrenamientos ministeriales",
    text: "Financiamos todas nuestras carreras y programas de formación ministerial presencial y online.",
  },
  {
    icon: "🕯️",
    title: "Betania – Cuarto de Oración",
    text: "Sostenemos el cuarto de oración Betania que opera 24/7 intercediendo por las naciones.",
  },
  {
    icon: "✈️",
    title: "Pasión por Israel",
    text: "Proyectos de intercesión y misiones hacia el pueblo de Israel y las naciones.",
  },
  {
    icon: "🎓",
    title: "Becas estudiantiles",
    text: "Becas para estudiantes internacionales y locales con dificultades económicas que sienten el llamado.",
  },
];

export default function Donaciones() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Donaciones"
          subtitle="Tu generosidad hace posible el entrenamiento de una generación"
          tag="Colaborá con DNP"
          bgColor="#0d0d1a"
          accentColor="#FFC53A"
        />

        {/* Verse */}
        <section className="py-12" style={{ background: "var(--brand-gradient)" }}>
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 text-center">
            <blockquote
              className="text-white text-xl md:text-2xl font-bold italic"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              «El alma generosa será prosperada; y el que saciare, él también será saciado.»
            </blockquote>
            <cite className="text-[#FFC53A] text-sm font-semibold uppercase tracking-widest mt-3 block">
              Proverbios 11:25
            </cite>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="text-center mb-12">
              <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
                ¿A qué va destinado?
              </span>
              <h2
                className="font-bold text-[#292929]"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                }}
              >
                Tu donación financia
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-[#e0e0e0] p-7 hover:border-[#FBA007] transition-colors group"
                >
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3
                    className="font-bold text-[#292929] mb-3 group-hover:text-[#FBA007] transition-colors"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "17px" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#545454] text-sm leading-relaxed">{project.text}</p>
                </div>
              ))}
            </div>

            {/* Donation methods */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Argentina */}
              <div className="border border-[#e0e0e0] p-8" style={{ borderTopColor: "#FBA007", borderTopWidth: "3px" }}>
                <h3
                  className="font-bold text-[#292929] mb-6"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "22px" }}
                >
                  🇦🇷 Argentina
                </h3>
                <div className="space-y-5">
                  {/* TODO: links de pago DNP */}
                  <a
                    href="https://link.mercadopago.com.ar/misioncem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#009EE3] text-white hover:bg-[#0088c7] transition-colors group"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5S4.5 16.14 4.5 12 7.86 4.5 12 4.5z" />
                    </svg>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wide">Mercado Pago</div>
                      <div className="text-xs opacity-80">Donación online instantánea</div>
                    </div>
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <div className="p-5 bg-[#FAFAFA] border border-[#e0e0e0]">
                    <h4 className="font-bold text-[#292929] mb-3 text-sm uppercase tracking-wide">
                      Transferencia bancaria
                    </h4>
                    <div className="space-y-2 text-sm text-[#545454]">
                      <div className="flex justify-between">
                        <span className="font-medium">Cuenta Corriente:</span>
                        <span className="font-mono">180-013095/6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">CBU:</span>
                        <span className="font-mono text-xs">0720180220000001309568</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Alias:</span>
                        {/* TODO: alias DNP */}
                        <span className="font-mono font-bold" style={{ color: "var(--primary)" }}>MISION.CEM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internacional */}
              <div className="border border-[#e0e0e0] p-8" style={{ borderTopColor: "#D14F42", borderTopWidth: "3px" }}>
                <h3
                  className="font-bold text-[#292929] mb-6"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "22px" }}
                >
                  🌍 Internacional
                </h3>
                <div className="space-y-5">
                  {/* TODO: links de pago DNP */}
                  <a
                    href="https://donate.stripe.com/mision"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#635BFF] text-white hover:bg-[#5248e0] transition-colors group"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                    </svg>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wide">Stripe (USD/EUR)</div>
                      <div className="text-xs opacity-80">Tarjeta de crédito internacional</div>
                    </div>
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <div className="p-5 bg-[#FAFAFA] border border-[#e0e0e0]">
                    <h4 className="font-bold text-[#292929] mb-2 text-sm uppercase tracking-wide">
                      Argentinos con dólares
                    </h4>
                    <p className="text-[#545454] text-sm mb-3">
                      Si sos argentino y querés donar en dólares, contactanos directamente.
                    </p>
                    {/* TODO: email DNP */}
                    <a
                      href="mailto:adm.mision@gmail.com"
                      className="text-[#FBA007] font-semibold text-sm hover:text-[#D14F42] transition-colors"
                    >
                      adm.mision@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Special donation */}
            <div className="mt-8 text-white p-8 md:p-10" style={{ background: "var(--brand-gradient)" }}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-4xl">🏛️</div>
                <div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Donación especial: Nuevo Campus
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    Estamos creyendo a Dios por un nuevo campus para Dios Nuestro Padre. Si querés ser parte de
                    este sueño, existe un fondo exclusivo para contribuir a esta visión.
                  </p>
                </div>
                {/* TODO: email DNP */}
                <a
                  href="mailto:info@misioninstituto.com"
                  className="flex-shrink-0 px-6 py-3 border-2 border-white text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#FBA007] transition-colors"
                >
                  Consultar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
