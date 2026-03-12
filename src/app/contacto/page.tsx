"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const topics = [
  { value: "", label: "Seleccioná un tema..." },
  { value: "carreras-presenciales", label: "Carreras presenciales" },
  { value: "internado-intensivo", label: "Internado Intensivo" },
  { value: "carrera-online", label: "Carrera Ministerial Online" },
  { value: "cursos-online", label: "Cursos Online" },
  { value: "congresos", label: "Congresos / Conferencias" },
  { value: "otros", label: "Otros" },
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nacionalidad: "",
    tema: "",
    mensaje: "",
    privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setForm({ ...form, [target.name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar con backend / servicio de email
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Contacto"
          subtitle="Consultá toda la información sobre las carreras, cursos, congresos y más"
          tag="Escribinos"
        />

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Form */}
              <div className="lg:col-span-2">
                <h2
                  className="font-bold text-[#292929] mb-8"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "clamp(24px, 3vw, 36px)",
                  }}
                >
                  Formulario de contacto
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 p-8 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3
                      className="font-bold text-[#292929] mb-2"
                      style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "20px" }}
                    >
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-[#545454]">
                      Nos pondremos en contacto con vos a la brevedad. ¡Gracias!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#292929] mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          required
                          value={form.nombre}
                          onChange={handleChange}
                          className="w-full border border-[#e0e0e0] px-4 py-3 text-[#292929] focus:outline-none focus:border-[#36348E] transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#292929] mb-2">
                          Apellido *
                        </label>
                        <input
                          type="text"
                          name="apellido"
                          required
                          value={form.apellido}
                          onChange={handleChange}
                          className="w-full border border-[#e0e0e0] px-4 py-3 text-[#292929] focus:outline-none focus:border-[#36348E] transition-colors"
                          placeholder="Tu apellido"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#292929] mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0e0] px-4 py-3 text-[#292929] focus:outline-none focus:border-[#36348E] transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#292929] mb-2">
                        Nacionalidad
                      </label>
                      <input
                        type="text"
                        name="nacionalidad"
                        value={form.nacionalidad}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0e0] px-4 py-3 text-[#292929] focus:outline-none focus:border-[#36348E] transition-colors"
                        placeholder="País de residencia"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#292929] mb-2">
                        Necesito información sobre
                      </label>
                      <select
                        name="tema"
                        value={form.tema}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0e0] px-4 py-3 text-[#292929] focus:outline-none focus:border-[#36348E] transition-colors bg-white"
                      >
                        {topics.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#292929] mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="mensaje"
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={handleChange}
                        className="w-full border border-[#e0e0e0] px-4 py-3 text-[#292929] focus:outline-none focus:border-[#36348E] transition-colors resize-none"
                        placeholder="Escribí tu consulta aquí..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="privacidad"
                        id="privacidad"
                        required
                        checked={form.privacidad}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 accent-[#36348E]"
                      />
                      <label htmlFor="privacidad" className="text-sm text-[#545454]">
                        Acepto la política de privacidad y el uso de mis datos para recibir información
                        del Instituto MiSion.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#36348E] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#D14F42] transition-colors"
                    >
                      Enviar consulta
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-[#0d0d1a] text-white p-7">
                  <h3
                    className="font-bold text-lg mb-6 uppercase tracking-wide text-sm text-[#FFC53A]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Datos de contacto
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#D14F42] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">Benavidez 280, Monte Grande, Buenos Aires, Argentina</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#D14F42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300">+(5411) 4290 - 0000</span>
                    </div>
                    <a
                      href="https://wa.me/5491176060023"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-[#FFC53A] transition-colors"
                    >
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-gray-300">+54 9 11 7606-0023</span>
                    </a>
                    <a
                      href="mailto:info@misioninstituto.com"
                      className="flex items-center gap-3 hover:text-[#FFC53A] transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#D14F42] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300">info@misioninstituto.com</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/5491176060023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
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
