import CareerPage from "@/components/CareerPage";

export default function CarreraInternado() {
  return (
    <CareerPage
      title="Internado"
      titleAccent="Intensivo"
      tag="Carrera Presencial"
      bannerColor="#0d0d1a"
      accentColor="#36348E"
      tagline="Una experiencia inmersiva para quienes sienten el llamado a entregarse por completo al entrenamiento ministerial"
      description="El Internado Intensivo de MiSion está diseñado para aquellos que aspiran a convertirse en líderes y mensajeros del corazón de Dios para esta generación. Es una experiencia presencial e inmersiva donde los estudiantes viven en comunidad mientras son entrenados de manera integral."
      extraInfo="Cuando Dios quiere hacer algo grande en una vida, lo primero que hace es sacar a esa persona de su contexto y su rutina. Como Abraham, Moisés y David —que vivieron en el desierto antes de su ministerio— el internado ofrece ese espacio de transformación profunda."
      duration="3 años (módulos de 10 meses)"
      modality="Presencial – Régimen de internado"
      schedule="Lunes a Viernes, jornada completa"
      ageRange="18 a 45 años"
      modules={[
        {
          name: "Año 1 – Fundamentos",
          courses: [
            "Corazón Pastoral",
            "Discipulado Intensivo",
            "Panorama de los Últimos Tiempos",
            "Experiencias con el Espíritu Santo",
            "Panorama del Antiguo Testamento I y II",
            "Sanidad Interior",
          ],
        },
        {
          name: "Año 2 – Profundización",
          courses: [
            "Discipulado Efectivo",
            "Pasión por la Presencia de Dios",
            "Evangelismo Sobrenatural",
            "Panorama del Nuevo Testamento",
            "Sermón del Monte",
            "Cursos especializados y electivas",
          ],
        },
        {
          name: "Año 3 – Integración",
          courses: [
            "Liderazgo y Proyectos",
            "Discipulado Bíblico AT",
            "Discipulado Bíblico NT",
            "Cultura de Reino",
            "Desarrollo del Carácter",
            "Isaías I y II",
            "El Despertar de la Novia",
          ],
        },
        {
          name: "Formación práctica",
          courses: [
            "Adoración e intimidad",
            "Intercesión y ayuno",
            "Evangelismo callejero",
            "Servicio comunitario",
            "Discipulado personal",
            "Vida en comunidad",
          ],
        },
      ]}
      requirements={[
        "Aval pastoral de iglesia local",
        "Ser miembro activo de una congregación",
        "18 a 45 años de edad",
        "Disposición para vivir en régimen de internado",
        "Estudiantes solteros: residencia en dorms del Instituto",
        "Matrimonios y mayores de 36: vivienda propia",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/INTERNADO"
      whatsappUrl="https://wa.link/w95qnc"
    />
  );
}
