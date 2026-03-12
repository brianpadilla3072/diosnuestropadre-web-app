import Image from "next/image";
import Link from "next/link";

export default function MisionMusica() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--text-dark)", color: "#ffffff" }}>
      <div className="site-wrapper">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag section-tag--sky">Ministerio de Música</span>
            <h2 className="heading-lg heading-white mb-6">MiSion Música</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#d1d5db" }}>
              El ministerio de música de Instituto MiSion. Adoración que nace del entrenamiento
              y la presencia de Dios. Música que transforma corazones y genera encuentros genuinos.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#d1d5db" }}>
              <em>«Cantamos de lo que Él hizo, hace y hará»</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/mision-musica" className="btn btn-white">
                Conocer más
              </Link>
              <a
                href="https://www.youtube.com/@MiSionCEM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-white"
              >
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="https://misioninstituto.com/wp-content/uploads/2023/09/LOGO-MUSICA-MISION.png"
              alt="MiSion Música"
              width={380}
              height={220}
              className="w-full max-w-[300px] md:max-w-[380px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
