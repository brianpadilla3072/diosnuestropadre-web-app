import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  nosotros: [
    { label: "Visión y Propósito", href: "/vision-y-proposito" },
    { label: "Declaración de Fe", href: "/declaracion-de-fe" },
    { label: "Nuestro Equipo", href: "/nuestro-equipo" },
    { label: "MiSion Música", href: "/mision-musica" },
    { label: "Donaciones", href: "/donaciones" },
  ],
  carreras: [
    { label: "Internado Intensivo", href: "/carrera-internado" },
    { label: "Carrera de Liderazgo", href: "/carrera-de-liderazgo" },
    { label: "Carrera de Adoración", href: "/carrera-de-adoracion" },
    { label: "Carrera de Medios Audiovisuales", href: "/carrera-de-medios-audiovisuales" },
    { label: "Carrera Ministerial Online", href: "/carrera-ministerial-online" },
  ],
  recursos: [
    { label: "Podcast", href: "https://open.spotify.com/show/6zaAY2WiX56JG6dXZjv8Kq", external: true },
    { label: "Mensajes Misión", href: "https://www.mensajesmision.com/", external: true },
    { label: "MiSion Música", href: "/mision-musica" },
    { label: "MiSion Online", href: "https://www.misiononline.com", external: true },
    { label: "Tienda Online", href: "https://www.misioneditorial.com", external: true },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mision.instituto",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MiSionCEM",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mision_instituto/",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5491176060023",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
    isWhatsapp: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker text-white">
      {/* Main footer */}
      <div className="site-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="https://misioninstituto.com/wp-content/uploads/2020/12/cropped-MiSion-logo-blanco.png"
                alt="Instituto MiSion"
                width={160}
                height={34}
                className="h-8 w-auto mb-5"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              Centro de Entrenamiento Ministerial. Entrenando hijos e hijas de Dios para manifestar
              el Reino eterno en las naciones.
            </p>

            <div className="space-y-2.5 text-sm" style={{ color: "#9ca3af" }}>
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-red)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Benavidez 280, Monte Grande, Buenos Aires, Argentina
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent-red)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +(5411) 4290-0000
              </p>
              <a
                href="https://wa.me/5491176060023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[color:var(--accent-gold)] transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </a>
              <a
                href="mailto:info@misioninstituto.com"
                className="flex items-center gap-2 hover:text-[color:var(--accent-gold)] transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent-red)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@misioninstituto.com
              </a>
            </div>
          </div>

          {/* Nosotros */}
          <div>
            <h4
              className="font-bold text-white text-xs uppercase tracking-wider mb-5 pb-2 border-b"
              style={{ fontFamily: "var(--font-heading)", borderColor: "var(--accent-red)" }}
            >
              Nosotros
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.nosotros.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[color:var(--accent-gold)] transition-colors" style={{ color: "#9ca3af" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Carreras */}
          <div>
            <h4
              className="font-bold text-white text-xs uppercase tracking-wider mb-5 pb-2 border-b"
              style={{ fontFamily: "var(--font-heading)", borderColor: "var(--accent-red)" }}
            >
              Carreras
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.carreras.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[color:var(--accent-gold)] transition-colors" style={{ color: "#9ca3af" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4
              className="font-bold text-white text-xs uppercase tracking-wider mb-5 pb-2 border-b"
              style={{ fontFamily: "var(--font-heading)", borderColor: "var(--accent-red)" }}
            >
              Recursos
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-[color:var(--accent-gold)] transition-colors flex items-center gap-1.5"
                      style={{ color: "#9ca3af" }}
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-[color:var(--accent-gold)] transition-colors" style={{ color: "#9ca3af" }}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`social-icon ${social.isWhatsapp ? "social-icon--whatsapp" : ""}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="site-wrapper py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-center md:text-left" style={{ color: "#6b7280" }}>
            © {currentYear} Instituto MiSion – Centro de Entrenamiento Ministerial. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/politicas-de-privacidad"
              className="text-xs hover:text-[color:var(--accent-gold)] transition-colors"
              style={{ color: "#6b7280" }}
            >
              Políticas de Privacidad
            </a>
            <a href="https://www.misioninstitute.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://misioninstituto.com/wp-content/uploads/2020/12/Mesa-de-trabajo-5banderas.png"
                alt="Internacional"
                width={32}
                height={32}
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/5491176060023"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
