import CareerPage from "@/components/CareerPage";

export default function CarreraMinisterialOnline() {
  return (
    <CareerPage
      title="Carrera Ministerial"
      titleAccent="Online"
      tag="Carrera Online – Internacional"
      bannerColor="#0d0d1a"
      accentColor="#B7D8EF"
      tagline="Toda la formación del Instituto MiSion desde cualquier lugar del mundo"
      description="La Carrera Ministerial Online ofrece un sistema de entrenamiento integral de tres años diseñado para el crecimiento espiritual y el desarrollo ministerial. Disponible para estudiantes de todo el mundo, con clases en vivo y contenido pre-grabado."
      extraInfo="Al finalizar los tres años, los graduados reciben un diplomado de MiSion CEM. Nota: la carrera no está acreditada por el Ministerio de Educación de la Argentina y no otorga créditos universitarios."
      duration="3 años (6 semestres)"
      modality="100% Online"
      schedule="Clases en vivo: Martes 19hs y Sábados 12hs (AR) | Pre-grabadas: Sábados desde 8hs"
      modules={[
        {
          name: "Módulo I",
          courses: [
            "Experiencias con el Espíritu Santo",
            "Panorama Bíblico del Antiguo Testamento",
            "Corazón Pastoral",
          ],
        },
        {
          name: "Módulo II",
          courses: [
            "Liderazgo Espiritual",
            "Sanidad Interior",
            "El Espíritu Santo y sus Dones",
          ],
        },
        {
          name: "Módulo III",
          courses: [
            "Panorama del Nuevo Testamento",
            "Gran Comisión",
            "Discipulado",
          ],
        },
        {
          name: "Módulo IV",
          courses: [
            "Apocalipsis: La Revelación de Jesús en los Últimos Tiempos",
            "Ministerio Profético",
            "Cultura de Reino",
          ],
        },
        {
          name: "Módulo V",
          courses: [
            "Restaurando los 5 Ministerios",
            "Corazón Pastoral (avanzado)",
            "Los Últimos Tiempos",
          ],
        },
        {
          name: "Módulo VI",
          courses: [
            "Sermón del Monte",
            "La Iglesia Gloriosa",
            "Integración ministerial",
          ],
        },
      ]}
      requirements={[
        "Aval pastoral de iglesia local",
        "Ser miembro activo de una congregación",
        "Mínimo 16 años de edad",
        "Conexión a internet estable",
        "Disponible para estudiantes de todo el mundo",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/online"
    />
  );
}
