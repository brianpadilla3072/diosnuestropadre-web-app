"use client";
import { useState } from "react";
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
  { label: "Eventos", href: "/congresos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header className="w-full sticky top-0 z-50">
      <TopBar />

      {/* Main Nav */}
      <nav className="bg-black">
        <div className="max-w-[1260px] mx-auto px-5 md:px-10 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://misioninstituto.com/wp-content/uploads/2020/12/cropped-MiSion-logo-blanco.png"
              alt="Instituto MiSion"
              width={150}
              height={32}
              className="h-8 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1 ml-auto">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item relative group">
                <Link
                  href={item.href}
                  className="px-4 py-5 text-white text-sm font-medium tracking-wide hover:text-[#FFC53A] transition-colors block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFC53A] after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {item.label}
                  {item.children && (
                    <svg className="inline ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="nav-dropdown absolute top-full left-0 bg-black min-w-[220px] shadow-xl z-50 border-t-2 border-[#D14F42]">
                    {item.children.map((child) => (
                      <div key={child.label} className="sub-nav-item relative group/sub">
                        <Link
                          href={child.href}
                          className="block px-5 py-3 text-white text-sm hover:bg-[#1a1a2e] hover:text-[#FFC53A] transition-colors flex items-center justify-between"
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
          <div className="md:hidden bg-[#111] border-t border-gray-700">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  // Ítem con desplegable: solo un <button>, sin <a> adentro
                  <button
                    className="w-full text-left px-5 py-3 text-white text-sm font-medium flex items-center justify-between"
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
                    className="w-full px-5 py-3 text-white text-sm font-medium flex items-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && openMobile === item.label && (
                  <div className="bg-[#0a0a0a] pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-gray-300 text-sm hover:text-[#FFC53A] transition-colors border-l border-gray-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-5 py-4 border-t border-gray-700 flex flex-col gap-3">
              <a href="/donaciones" className="text-white text-sm">❤️ Donar</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
