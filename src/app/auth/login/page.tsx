"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implementar autenticación real
    alert("Función de login próximamente");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Header */}
      <header className="bg-[#1a1a2e] py-4 px-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://misioninstituto.com/wp-content/uploads/2020/12/cropped-MiSion-logo-blanco.png"
            alt="Instituto MiSion"
            width={130}
            height={28}
            className="h-7 w-auto"
            unoptimized
          />
        </Link>
        <span className="text-white/60 text-sm">MiSion Online</span>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center py-16 px-5">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white shadow-lg p-8 md:p-10">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#36348E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h1
                className="font-bold text-[#292929] text-2xl"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Iniciar Sesión
              </h1>
              <p className="text-[#545454] text-sm mt-1">
                Accedé a tus cursos de MiSion Online
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#292929] mb-1.5">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#36348E] text-[#292929] placeholder-gray-400 transition-colors text-sm"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold text-[#292929]">
                    Contraseña
                  </label>
                  <a href="#" className="text-xs text-[#36348E] hover:text-[#D14F42] transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#36348E] text-[#292929] placeholder-gray-400 transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#36348E] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#2a2875] transition-colors"
              >
                Iniciar Sesión
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-xs">o</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Register link */}
            <p className="text-center text-[#545454] text-sm">
              ¿No tenés cuenta?{" "}
              <Link href="/auth/registro" className="text-[#36348E] font-bold hover:text-[#D14F42] transition-colors">
                Regístrate gratis
              </Link>
            </p>
          </div>

          {/* Membership promo */}
          <div className="mt-6 bg-[#36348E] text-white p-5 text-center">
            <p className="font-bold text-sm mb-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              ¿Querés acceso a todos los cursos?
            </p>
            <p className="text-[#B7D8EF] text-xs mb-3">
              Con la Membresía MiSion Online tenés acceso ilimitado desde $15/mes
            </p>
            <Link
              href="/auth/registro"
              className="inline-block px-5 py-2 bg-[#FFC53A] text-[#292929] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Ver membresía
            </Link>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            © {new Date().getFullYear()} MiSion Online ·{" "}
            <Link href="/" className="hover:text-[#36348E] transition-colors">Instituto MiSion</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
