"use client";
import { useRouter } from "next/navigation";

interface Serie {
  id: number;
  nombre: string;
}

interface Props {
  series: Serie[];
  currentSerie?: number;
  tipo?: string;
}

export default function SerieSelect({ series, currentSerie, tipo }: Props) {
  const router = useRouter();

  function buildUrl(s?: number) {
    const sp = new URLSearchParams();
    if (tipo) sp.set("tipo", tipo);
    if (s) sp.set("serie", String(s));
    const qs = sp.toString();
    return `/reuniones-generales${qs ? "?" + qs : ""}`;
  }

  return (
    <select
      className="input-field"
      style={{ width: "auto", padding: "8px 14px" }}
      value={currentSerie ?? ""}
      onChange={(e) => {
        const val = e.target.value ? Number(e.target.value) : undefined;
        router.push(buildUrl(val));
      }}
    >
      <option value="">Todas las series</option>
      {series.map((s) => (
        <option key={s.id} value={s.id}>
          {s.nombre}
        </option>
      ))}
    </select>
  );
}
