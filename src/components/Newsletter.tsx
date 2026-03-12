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
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="relative z-10 site-wrapper text-center">
        <span className="section-tag section-tag--sky" style={{ display: "inline-block" }}>
          Mantente conectado
        </span>
        <h2 className="heading-lg heading-white mb-4">
          Suscríbete a nuestro boletín
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--accent-sky)" }}>
          Recibe noticias, eventos y recursos del Instituto MiSion directamente en tu correo.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 p-6 max-w-md mx-auto">
            <span className="text-[color:var(--accent-gold)] text-2xl mb-2 block">✓</span>
            <p className="text-white font-semibold">¡Gracias por suscribirte!</p>
            <p className="text-sm mt-1" style={{ color: "var(--accent-sky)" }}>
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
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
            />
            <button type="submit" className="btn btn-gold flex-shrink-0">
              Suscribirse
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
