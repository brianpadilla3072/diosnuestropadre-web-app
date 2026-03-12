import CareerPage from "@/components/CareerPage";

export default function CarreraLiderazgo() {
  return (
    <CareerPage
      title="Carrera de"
      titleAccent="Liderazgo"
      tag="Carrera Presencial"
      bannerColor="#1a0d2e"
      accentColor="#36348E"
      tagline="Entrenando líderes llenos del Espíritu Santo y pasión por Jesús"
      description="La Carrera de Liderazgo está diseñada para formar líderes que descubran su llamado específico a través de los dones espirituales, las capacidades adquiridas y los talentos naturales, desarrollando el ministerio con excelencia en las distintas áreas de la iglesia local. La base de toda formación es el amor a Dios por sobre todas las cosas."
      duration="3 años (6 módulos)"
      modality="Presencial"
      schedule="Martes 19:00–22:00 / Jueves 18:45–22:00 / Sábados 9:00–14:00"
      modules={[
        {
          name: "Módulo I",
          courses: [
            "Experiencias con el Espíritu Santo",
            "Cultura de Reino",
            "Sanidad Interior",
          ],
        },
        {
          name: "Módulo II",
          courses: [
            "Liderazgo Espiritual",
            "Iglesia de los Últimos Tiempos",
            "Misión Global",
          ],
        },
        {
          name: "Módulo III",
          courses: [
            "Apocalipsis",
            "Mensaje Maranata",
            "Liderazgo Práctico",
          ],
        },
        {
          name: "Módulo IV",
          courses: [
            "Ministerio Profético",
            "Gran Comisión",
            "Daniel",
          ],
        },
        {
          name: "Módulo V",
          courses: [
            "Restaurando los 5 Ministerios",
            "Corazón Pastoral",
            "Capítulos de los Últimos Tiempos",
          ],
        },
        {
          name: "Módulo VI",
          courses: [
            "Apocalipsis (avanzado)",
            "Sermón del Monte",
            "La Iglesia Gloriosa",
          ],
        },
      ]}
      requirements={[
        "Aval pastoral de iglesia local",
        "Ser miembro activo de una congregación",
        "Mayor de 18 años",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/liderazgo"
    />
  );
}
