"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Cultos", href: "/reuniones-generales" },
  {
    label: "Nosotros",
    href: "#",
    children: [
      { label: "Casa de Amistad", href: "/nosotros/casa-de-amistad" },
      { label: "Casa Kids", href: "/nosotros/casa-kids" },
      { label: "Jóvenes", href: "/nosotros/jovenes" },
      { label: "Pre-adolescentes", href: "/nosotros/pre-adolescentes" },
    ],
  },
  { label: "Visión", href: "/vision-y-proposito" },
  { label: "Eventos", href: "/congresos" },
  { label: "Contacto", href: "/contacto" },
];

// Degradado: dorado a la izquierda, naranja (#FBA007) dominando hacia la derecha
const navGradient = "linear-gradient(to right, #FDC206 0%, #FBA007 40%)";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/user/me")
      .then((r) => r.json())
      .then((d) => { if (d.user?.role) setUserRole(d.user.role); })
      .catch(() => {});
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      <TopBar />

      {/* Main Nav */}
      <nav style={{ background: navGradient }}>
        <div className="max-w-[1260px] mx-auto px-5 md:px-10 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* TODO: reemplazar src con logo de DNP */}
            <Image
              src="https://misioninstituto.com/wp-content/uploads/2020/12/cropped-MiSion-logo-blanco.png"
              alt="Dios Nuestro Padre"
              width={150}
              height={32}
              className="h-8 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1 ml-auto">
            {userRole && (
              <li>
                <Link
                  href={userRole === "admin" ? "/admin" : "/dashboard"}
                  className="px-4 py-2 text-sm font-bold text-white border border-white/30 rounded hover:bg-white/10 transition-colors"
                >
                  {userRole === "admin" ? "Panel Admin" : "Mi cuenta"}
                </Link>
              </li>
            )}
            {navItems.map((item) => (
              <li key={item.label} className="nav-item relative group">
                <Link
                  href={item.href}
                  className="px-4 py-5 text-white text-sm font-semibold tracking-wide hover:text-white transition-colors block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {item.label}
                  {item.children && (
                    <svg className="inline ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="nav-dropdown absolute top-full left-0 min-w-[220px] shadow-xl z-50 border-t-2 border-white" style={{ background: navGradient }}>
                    {item.children.map((child) => (
                      <div key={child.label} className="sub-nav-item relative group/sub">
                        <Link
                          href={child.href}
                          className="block px-5 py-3 text-white text-sm font-semibold hover:bg-[rgba(0,0,0,0.15)] transition-colors flex items-center justify-between"
                        >
                          {child.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[rgba(255,255,255,0.3)]" style={{ background: navGradient }}>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  // Ítem con desplegable: solo un <button>, sin <a> adentro
                  <button
                    className="w-full text-left px-5 py-3 text-white text-sm font-semibold flex items-center justify-between"
                    onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 transition-transform ${openMobile === item.label ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  // Ítem sin desplegable: <Link> directo, sin <button> envolviendo
                  <Link
                    href={item.href}
                    className="w-full px-5 py-3 text-white text-sm font-semibold flex items-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && openMobile === item.label && (
                  <div className="bg-[rgba(0,0,0,0.2)] pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-white text-sm font-medium hover:text-[#FDC206] transition-colors border-l border-[rgba(255,255,255,0.3)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-5 py-4 border-t border-[rgba(255,255,255,0.3)] flex flex-col gap-3">
              <a href="/donaciones" className="text-white text-sm font-semibold">❤️ Donar</a>
              {userRole && (
                <Link
                  href={userRole === "admin" ? "/admin" : "/dashboard"}
                  className="text-white text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  {userRole === "admin" ? "🔧 Panel Admin" : "👤 Mi cuenta"}
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
