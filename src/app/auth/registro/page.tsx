"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    id: "membresia",
    name: "Membresía",
    price: "$15",
    period: "/mes",
    description: "Acceso ilimitado a todos los cursos",
    features: [
      "Todos los cursos incluidos",
      "Nuevos cursos cada mes",
      "Acceso desde cualquier dispositivo",
      "Cancela cuando quieras",
    ],
    highlighted: true,
    badge: "Más popular",
  },
  {
    id: "gratis",
    name: "Gratis",
    price: "$0",
    period: "",
    description: "Cursos gratuitos disponibles",
    features: [
      "Acceso a cursos gratuitos",
      "Comunidad DNP",
      "Recursos básicos",
    ],
    highlighted: false,
  },
];

export default function RegistroPage() {
  const [step, setStep] = useState<"plan" | "form">("plan");
  const [selectedPlan, setSelectedPlan] = useState("membresia");
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Registro próximamente disponible");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Header */}
      <header className="bg-[#1a1a2e] py-4 px-5 flex items-center justify-between">
        <Link href="/">
          {/* TODO: reemplazar src con logo de DNP */}
          <Image
            src="https://misioninstituto.com/wp-content/uploads/2020/12/cropped-MiSion-logo-blanco.png"
            alt="Dios Nuestro Padre"
            width={130}
            height={28}
            className="h-7 w-auto"
            unoptimized
          />
        </Link>
        <Link href="/auth/login" className="text-white/70 text-sm hover:text-white transition-colors">
          ¿Ya tenés cuenta? Iniciá sesión
        </Link>
      </header>

      <main className="flex-1 py-12 px-5">
        {/* Steps indicator */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3">
            <div className={`flex items-center gap-2 text-sm font-semibold ${step === "plan" ? "text-[#36348E]" : "text-[#D14F42]"}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === "plan" ? "bg-[#36348E] text-white" : "bg-[#D14F42] text-white"}`}>
                {step === "form" ? "✓" : "1"}
              </span>
              Elige tu plan
            </div>
            <div className="flex-1 h-px bg-gray-300 max-w-20" />
            <div className={`flex items-center gap-2 text-sm font-semibold ${step === "form" ? "text-[#36348E]" : "text-gray-400"}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === "form" ? "bg-[#36348E] text-white" : "bg-gray-200 text-gray-400"}`}>
                2
              </span>
              Crea tu cuenta
            </div>
          </div>
        </div>

        {step === "plan" ? (
          /* Step 1: Plan selection */
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1
                className="font-bold text-[#292929] text-3xl mb-2"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Bienvenido a Dios Nuestro Padre
              </h1>
              <p className="text-[#545454]">
                Transfórmate en un mensajero del Reino de los Cielos
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`text-left p-6 border-2 transition-all ${
                    selectedPlan === plan.id
                      ? "border-[#36348E] bg-white shadow-md"
                      : "border-gray-200 bg-white hover:border-[#36348E]/40"
                  } relative`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-5 bg-[#D14F42] text-white text-xs font-bold uppercase px-3 py-1 tracking-wide">
                      {plan.badge}
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-[#292929] text-lg" style={{ fontFamily: "'Work Sans', sans-serif" }}>{plan.name}</p>
                      <p className="text-[#545454] text-sm">{plan.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${selectedPlan === plan.id ? "border-[#36348E] bg-[#36348E]" : "border-gray-300"}`}>
                      {selectedPlan === plan.id && (
                        <svg className="w-full h-full text-white p-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-[#36348E]" style={{ fontFamily: "'Work Sans', sans-serif" }}>{plan.price}</span>
                    <span className="text-[#545454] text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#545454]">
                        <svg className="w-4 h-4 text-[#36348E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep("form")}
              className="w-full py-4 bg-[#D14F42] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b83d31] transition-colors"
            >
              Continuar con {plans.find(p => p.id === selectedPlan)?.name}
              <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {selectedPlan === "membresia" && (
              <p className="text-center text-[#545454] text-xs mt-3">
                * Los precios están en dólares. Consultar pagos en pesos argentinos.
              </p>
            )}
          </div>
        ) : (
          /* Step 2: Create account */
          <div className="max-w-md mx-auto">
            <div className="bg-white shadow-lg p-8">
              <h2
                className="font-bold text-[#292929] text-2xl mb-1"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Creá tu cuenta
              </h2>
              <p className="text-[#545454] text-sm mb-6">
                Plan seleccionado:{" "}
                <span className="font-bold text-[#36348E]">
                  {plans.find(p => p.id === selectedPlan)?.name}
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#292929] mb-1.5">Nombre completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#36348E] text-sm text-[#292929] placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#292929] mb-1.5">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#36348E] text-sm text-[#292929] placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#292929] mb-1.5">Contraseña</label>
                  <input
                    type="password"
                    required
                    placeholder="Mínimo 8 caracteres"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#36348E] text-sm text-[#292929] placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#292929] mb-1.5">Confirmar contraseña</label>
                  <input
                    type="password"
                    required
                    placeholder="Repetí tu contraseña"
                    value={formData.confirm}
                    onChange={(e) => setFormData({ ...formData, confirm: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[#36348E] text-sm text-[#292929] placeholder-gray-400"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input type="checkbox" required className="mt-1 accent-[#36348E]" id="terms" />
                  <label htmlFor="terms" className="text-xs text-[#545454] cursor-pointer">
                    Acepto los{" "}
                    <a href="#" className="text-[#36348E] hover:text-[#D14F42]">Términos de Uso</a>{" "}
                    y la{" "}
                    <a href="#" className="text-[#36348E] hover:text-[#D14F42]">Política de Privacidad</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#36348E] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#2a2875] transition-colors mt-2"
                >
                  Crear cuenta
                </button>
              </form>

              <p className="text-center text-[#545454] text-sm mt-5">
                ¿Ya tenés cuenta?{" "}
                <Link href="/auth/login" className="text-[#36348E] font-bold hover:text-[#D14F42]">
                  Iniciá sesión
                </Link>
              </p>
            </div>

            <button
              onClick={() => setStep("plan")}
              className="mt-4 flex items-center gap-1.5 text-[#545454] text-sm hover:text-[#36348E] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Cambiar plan
            </button>
          </div>
        )}
      </main>

      <footer className="text-center py-6">
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} DNP ·{" "}
          <Link href="/" className="hover:text-[#36348E] transition-colors">Iglesia Dios Nuestro Padre</Link>
        </p>
      </footer>
    </div>
  );
}
