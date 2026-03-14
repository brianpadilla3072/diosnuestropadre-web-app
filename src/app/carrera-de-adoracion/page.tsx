import CareerPage from "@/components/CareerPage";

export default function CarreraAdoracion() {
  return (
    <CareerPage
      title="Carrera de"
      titleAccent="Adoración"
      tag="Carrera Presencial"
      bannerColor="#1a0d0d"
      accentColor="#D14F42"
      tagline="Entrenando ministros que, a través de la música y la adoración, lleven a la Iglesia a experimentar la Presencia de Dios"
      description="La Carrera de Adoración equipa músicos y adoradores para ministrar en la presencia de Dios y liderar a las congregaciones al encuentro con Él. Cada módulo combina formación bíblica y ministerial con el desarrollo de habilidades musicales prácticas."
      duration="3 años (6 módulos + módulo opcional)"
      modality="Presencial"
      schedule="Martes 19:00–22:00 / Jueves 18:45–22:00 / Sábados 9:00–14:00 (+ instrumentos: sábados alternos 14:45–16:00)"
      modules={[
        {
          name: "Módulo I",
          courses: [
            "Experiencias con el Espíritu Santo",
            "Principios de Adoración y Alabanza",
            "Sanidad Interior",
          ],
        },
        {
          name: "Módulo II",
          courses: [
            "Liderazgo Espiritual",
            "Intercesión Práctica",
            "Adoración Profética",
          ],
        },
        {
          name: "Módulo III",
          courses: [
            "Apocalipsis: La Revelación de Jesús",
            "Ministerio Profético",
            "Discipulado en Adoración",
          ],
        },
        {
          name: "Módulo IV",
          courses: [
            "Gran Comisión",
            "Corazón Pastoral",
            "El Cuarto de Oración",
          ],
        },
        {
          name: "Módulo V",
          courses: [
            "Restaurando los 5 Ministerios",
            "La Novia de Cristo",
            "Adoración e Intimidad",
          ],
        },
        {
          name: "Módulo VI",
          courses: [
            "Sermón del Monte",
            "La Iglesia Gloriosa",
            "Maranata",
          ],
        },
      ]}
      ministerialSubjects={[
        "Canto / Voz",
        "Piano",
        "Guitarra",
        "Bajo",
        "Batería",
      ]}
      requirements={[
        "Aval pastoral de iglesia local",
        "Ser miembro activo de una congregación",
        "Mayor de 18 años",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/adoracion" // TODO: URL inscripción DNP
    />
  );
}
