import Link from "next/link";
import type { PalabraRow } from "@/lib/db";

interface Props {
  palabra: PalabraRow;
  aosDelay?: number;
}

function tipoLabel(tipo: string) {
  return tipo === "diezmo" ? "Enseñanza" : "Palabra";
}

function tipoColor(tipo: string) {
  return tipo === "diezmo" ? "var(--accent-gold)" : "var(--accent-red)";
}

function excerpt(text: string, chars = 160) {
  const clean = text.replace(/^#+\s.+$/gm, "").replace(/\n+/g, " ").trim();
  return clean.length > chars ? clean.slice(0, chars) + "…" : clean;
}

export default function PalabraCard({ palabra, aosDelay = 0 }: Props) {
  const fecha = palabra.fecha_publicacion
    ? new Date(palabra.fecha_publicacion + "T00:00:00").toLocaleDateString("es-AR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article
      className="card card-accent-top flex flex-col h-full"
      style={{ borderTopColor: tipoColor(palabra.tipo) }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Badge tipo + serie */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span
            className="badge"
            style={{
              backgroundColor: `color-mix(in srgb, ${tipoColor(palabra.tipo)} 12%, transparent)`,
              color: tipoColor(palabra.tipo),
            }}
          >
            {tipoLabel(palabra.tipo)}
          </span>
          <span className="badge badge-sky">{palabra.serie}</span>
        </div>

        {/* Título */}
        <h3 className="heading-sm mb-3 line-clamp-2">{palabra.titulo}</h3>

        {/* Extracto */}
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-slate)" }}>
          {excerpt(palabra.contenido)}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
          {fecha && (
            <span className="text-xs" style={{ color: "var(--text-light)" }}>
              {fecha}
            </span>
          )}
          <Link
            href={`/reuniones-generales/${palabra.id}`}
            className="btn btn-sm btn-primary ml-auto"
          >
            Leer →
          </Link>
        </div>
      </div>
    </article>
  );
}
