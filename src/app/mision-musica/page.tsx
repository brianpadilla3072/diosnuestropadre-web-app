import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const pillars = [
  { label: "Intimidad con Jesús", icon: "🙏" },
  { label: "La Iglesia", icon: "⛪" },
  { label: "Discipulado", icon: "🤝" },
  { label: "La Palabra de Dios", icon: "📖" },
  { label: "Carácter", icon: "⚜️" },
  { label: "Últimos Tiempos", icon: "⌛" },
  { label: "Cultura de Reino", icon: "👑" },
];

const platforms = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@MiSionCEM",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "#FF0000",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    color: "#1DB954",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.578-1.124-.818-1.774-.818-1.205 0-2.278.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.836 7.066-4.836 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.249.631-.01.839l-2.432 2.092zm3.559 1.888c-5.597 4.198-13.704 6.43-20.7 3.27-5.113-2.355-8.003-6.944-8.003-11.786 0-6.526 5.286-11.818 11.813-11.818 6.252 0 11.318 4.987 11.318 11.121 0 3.919-2.244 7.32-5.948 9.338-.33.181-.7-.09-.564-.452.437-1.167 1.309-3.796 1.309-3.796.126-.376-.046-.787-.422-.91-.574-.186-1.162.208-1.22.81-.21 2.175-1.726 4.101-3.771 4.727-2.044.626-4.26-.148-5.594-1.895-1.311-1.712-1.56-3.977-.637-5.96.921-1.979 2.88-3.312 5.079-3.501 1.895-.162 3.815.479 5.141 1.794" />
      </svg>
    ),
    color: "#00A8E1",
  },
];

export default function MisionMusica() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="MiSion Música"
          subtitle="Cantamos de lo que Él hizo, hace y hará"
          tag="Ministerio"
          bgColor="#0d0d1a"
          accentColor="#FFC53A"
        />

        {/* Description */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Quiénes somos
                </span>
                <h2
                  className="font-bold text-[#292929] mb-6"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "clamp(26px, 3.5vw, 40px)",
                    lineHeight: "1.2",
                  }}
                >
                  Un equipo ministerial de familias
                </h2>
                <p className="text-[#545454] leading-relaxed mb-5 text-lg">
                  MiSion Música es un equipo ministerial compuesto por familias que anhelan manifestar
                  el Reino eterno de Dios en la tierra a través de la música profética.
                </p>
                <p className="text-[#545454] leading-relaxed mb-5">
                  Nuestra visión central es llevar a las personas hacia la adoración íntima de Jesús
                  y preparar a la Iglesia para Su segunda venida. Cada canción que escribimos y cantamos
                  nace de tiempos de intimidad y búsqueda del corazón de Dios.
                </p>
                <p className="text-[#545454] leading-relaxed">
                  Creemos que la música profética es una de las herramientas más poderosas para transformar
                  corazones y establecer la atmósfera del Reino en las congregaciones de todo el mundo.
                </p>
              </div>

              <div className="bg-[#0d0d1a] p-8 text-white">
                <h3
                  className="font-bold text-xl mb-6 text-[#FFC53A] uppercase tracking-wide text-sm"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  Escuchanos en
                </h3>
                <div className="space-y-4">
                  {platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <span style={{ color: platform.color }}>{platform.icon}</span>
                      <span className="text-white font-semibold group-hover:text-[#FFC53A] transition-colors">
                        {platform.name}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-500 ml-auto group-hover:text-[#FFC53A] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 bg-[#FAFAFA]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="text-center mb-12">
              <span className="text-[#D14F42] font-semibold text-sm uppercase tracking-widest mb-4 block">
                Fundamentos bíblicos
              </span>
              <h2
                className="font-bold text-[#292929]"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                }}
              >
                Los siete pilares de nuestra música
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className="border border-[#e0e0e0] p-5 text-center hover:border-[#36348E] hover:bg-white transition-all group"
                >
                  <div className="text-3xl mb-3">{pillar.icon}</div>
                  <p
                    className="text-[#545454] text-xs font-semibold uppercase tracking-wide group-hover:text-[#36348E] transition-colors"
                    style={{ lineHeight: "1.4" }}
                  >
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="py-16 bg-[#0d0d1a]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 text-center">
            <h2
              className="font-bold text-white mb-4"
              style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Seguinos en redes
            </h2>
            <p className="text-[#E8D7B9] mb-8">
              Encontrá más contenido, letras y devocionales de adoración en nuestras redes sociales.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.youtube.com/@MiSionCEM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
              <a
                href="https://www.instagram.com/mision_instituto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
