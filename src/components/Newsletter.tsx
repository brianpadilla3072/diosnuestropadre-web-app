"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="relative z-10 site-wrapper text-center">
        <span className="section-tag" style={{ display: "inline-block" }}>
          Mantente conectado
        </span>
        <h2 className="heading-lg mb-4" style={{ color: "#1a1a1a" }}>
          Suscríbete a nuestro boletín
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#6b7280" }}>
          Recibe noticias, eventos y recursos de Iglesia Dios Nuestro Padre directamente en tu correo.
        </p>

        {submitted ? (
          <div className="bg-orange-50 border border-orange-200 p-6 max-w-md mx-auto">
            <span className="text-2xl mb-2 block" style={{ color: "var(--brand-amber)" }}>✓</span>
            <p className="font-semibold" style={{ color: "#1a1a1a" }}>¡Gracias por suscribirte!</p>
            <p className="text-sm mt-1" style={{ color: "#6b7280" }}>
              Recibirás nuestras novedades pronto.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-1 px-5 py-3.5 bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-amber)] transition-colors"
            />
            <button type="submit" className="btn btn-primary flex-shrink-0">
              Suscribirse
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
