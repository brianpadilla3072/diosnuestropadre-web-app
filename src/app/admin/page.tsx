"use client";
import { useState } from "react";

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("/");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ sent?: number; failed?: number; error?: string } | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({ title: "test", body: "test" }),
    });
    if (res.status === 401) {
      setAuthError("Contraseña incorrecta");
    } else {
      setAuthed(true);
      setAuthError("");
    }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setResult(null);
    try {
      const res = await fetch("/api/push/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secret}`,
        },
        body: JSON.stringify({ title, body, url }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: String(err) });
    } finally {
      setSending(false);
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--dark-navy)" }}>
        <form onSubmit={handleLogin} className="w-full max-w-sm p-8" style={{ background: "#111", border: "1px solid #333" }}>
          <h1 className="heading-md heading-white mb-6 text-center">Admin Panel</h1>
          <div className="form-group mb-4">
            <label className="input-label" style={{ color: "#aaa" }}>Contraseña</label>
            <input
              type="password"
              className="input-field"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="ADMIN_SECRET"
              style={{ background: "#1a1a1a", color: "#fff", borderColor: "#333" }}
            />
          </div>
          {authError && <p className="text-sm mb-4" style={{ color: "var(--accent-red)" }}>{authError}</p>}
          <button type="submit" className="btn btn-primary w-full" style={{ display: "flex", justifyContent: "center" }}>
            Ingresar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark-navy)", color: "#fff" }}>
      <div className="site-wrapper py-12">
        <h1 className="heading-lg heading-white mb-2">Panel de Administración</h1>
        <p className="mb-10" style={{ color: "#888" }}>Enviá notificaciones push a todos los suscriptores.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario de push */}
          <form onSubmit={handleSend} style={{ background: "#111", border: "1px solid #333", padding: "32px" }}>
            <h2 className="heading-sm heading-white mb-6">Enviar notificación</h2>

            <div className="form-group mb-4">
              <label className="input-label" style={{ color: "#aaa" }}>Título</label>
              <input
                type="text"
                className="input-field"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ej: ¡Nuevo culto disponible!"
                required
                style={{ background: "#1a1a1a", color: "#fff", borderColor: "#333" }}
              />
            </div>

            <div className="form-group mb-4">
              <label className="input-label" style={{ color: "#aaa" }}>Mensaje</label>
              <textarea
                className="input-field"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="ej: El culto de hoy ya está disponible para ver."
                required
                style={{ background: "#1a1a1a", color: "#fff", borderColor: "#333", resize: "vertical" }}
              />
            </div>

            <div className="form-group mb-6">
              <label className="input-label" style={{ color: "#aaa" }}>URL al hacer click (opcional)</label>
              <input
                type="text"
                className="input-field"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="/ o /reuniones-generales o https://..."
                style={{ background: "#1a1a1a", color: "#fff", borderColor: "#333" }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn btn-red w-full"
              style={{ display: "flex", justifyContent: "center", opacity: sending ? 0.7 : 1 }}
            >
              {sending ? "Enviando..." : "Enviar a todos los suscriptores"}
            </button>

            {result && (
              <div
                className="mt-4 p-4 text-sm"
                style={{
                  background: result.error ? "rgba(209,79,66,0.15)" : "rgba(34,197,94,0.15)",
                  border: `1px solid ${result.error ? "var(--accent-red)" : "#22c55e"}`,
                  color: result.error ? "var(--accent-red)" : "#22c55e",
                }}
              >
                {result.error
                  ? `Error: ${result.error}`
                  : `✓ Enviado a ${result.sent} suscriptores${result.failed ? ` · ${result.failed} fallaron` : ""}`}
              </div>
            )}
          </form>

          {/* Info */}
          <div>
            <div style={{ background: "#111", border: "1px solid #333", padding: "32px", marginBottom: "16px" }}>
              <h2 className="heading-sm heading-white mb-4">Push automático</h2>
              <p className="text-sm" style={{ color: "#888" }}>
                Cuando el canal de YouTube detecta que está en vivo, se envía automáticamente una notificación push a todos los suscriptores.
              </p>
            </div>

            <div style={{ background: "#111", border: "1px solid #333", padding: "32px" }}>
              <h2 className="heading-sm heading-white mb-4">Atajos rápidos</h2>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Nuevo culto disponible", t: "¡Nuevo culto!", b: "Ya está disponible el culto de hoy para ver.", u: "/reuniones-generales" },
                  { label: "Recordatorio de domingo", t: "¡Culto en vivo hoy!", b: "Acompañanos en el culto dominical a las 10 AM.", u: "/" },
                ].map((q) => (
                  <button
                    key={q.label}
                    type="button"
                    className="btn btn-secondary btn-sm text-left"
                    style={{ justifyContent: "flex-start" }}
                    onClick={() => { setTitle(q.t); setBody(q.b); setUrl(q.u); }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
