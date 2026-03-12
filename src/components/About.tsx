import Link from "next/link";

export default function About() {
  const grupos = [
    {
      rango: "3 a 9 años",
      titulo: "Niños",
      descripcion:
        "Todos los sábados de 15 a 17 hs, reciben merienda y enseñanza de valores a través de la Biblia.",
      icon: "✦",
    },
    {
      rango: "10 a 14 años",
      titulo: "Pre-adolescentes",
      descripcion:
        "Los sábados a la mañana comparten compañerismo, juegos y enseñanza bíblica.",
      icon: "✦",
    },
    {
      rango: "Adolescentes y Jóvenes",
      titulo: "Jóvenes",
      descripcion:
        "Los viernes a la noche, para quienes buscan crecer y proyectarse en nuevos desafíos.",
      icon: "✦",
    },
    {
      rango: "Hombres y Mujeres",
      titulo: "Adultos",
      descripcion:
        "Nos reunimos para buscar más de Dios y seguir creciendo como personas, cónyuges y padres.",
      icon: "✦",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="site-wrapper">

        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          {/* Línea decorativa de marca */}
          <div
            className="h-1 w-16 mx-auto mb-6 rounded-full"
            style={{ background: "var(--brand-gradient)" }}
          />
          <h2 className="heading-lg mb-5">
            <span className="text-brand-gradient">Dios Nuestro Padre</span>
          </h2>
          <p className="mb-4">
            Somos una comunidad de fe que llevamos más de 10 años trabajando en
            el barrio Moresino y alrededores. Nuestro deseo y misión es que cada
            hogar que nos rodea pueda experimentar el amor y las bendiciones de
            Dios, como las hemos experimentado nosotros.
          </p>
          <p>
            Las puertas de la Iglesia están abiertas a ustedes y a nuestra
            comunidad. Te esperamos con los brazos abiertos, con un mate o café
            y dispuestos a escucharte y ayudarte.
          </p>
        </div>

        {/* Tarjetas de grupos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {grupos.map((g) => (
            <div
              key={g.titulo}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderTop: "3px solid transparent", borderImage: "var(--brand-gradient) 1" }}
            >
              {/* Ícono con degradado */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-sm font-bold"
                style={{ background: "var(--brand-gradient)" }}
              >
                {g.icon}
              </div>
              <span
                className="inline-block text-xs font-semibold mb-1 px-2 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(251,160,7,0.12) 0%, rgba(253,194,6,0.12) 100%)",
                  color: "#a06800",
                }}
              >
                {g.rango}
              </span>
              <h3 className="text-lg font-bold mt-1 mb-2">{g.titulo}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{g.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Dirección y firma */}
        <div className="text-center mb-10">
          {/* Separador con degradado */}
          <div
            className="h-px w-24 mx-auto mb-6"
            style={{ background: "var(--brand-gradient)" }}
          />
          <p className="font-semibold text-gray-800 text-lg">
            Monteagudo 2734, esquina Esmeralda
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Encuéntranos en Facebook e Instagram como{" "}
            <strong>Iglesia Dios Nuestro Padre</strong>
          </p>
          <p className="mt-3 text-gray-500 italic text-sm">Pr. Reisser Cristian</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/vision-y-proposito"
            className="btn btn-brand"
            style={{
              background: "var(--brand-gradient)",
              color: "#1a1a1a",
              border: "none",
            }}
          >
            Conocer más
          </Link>
        </div>

        {/* Bible verse */}
        <div className="bible-verse">
          <blockquote>
            «Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
            unigénito, para que todo aquel que en él cree, no se pierda, mas
            tenga vida eterna.»
          </blockquote>
          <cite>Juan 3:16</cite>
        </div>

      </div>
    </section>
  );
}
