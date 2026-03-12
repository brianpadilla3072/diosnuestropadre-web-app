import CareerPage from "@/components/CareerPage";

export default function CarreraNuevaGeneracion() {
  return (
    <CareerPage
      title="Carrera"
      titleAccent="Nueva Generación"
      tag="Carrera para Niños"
      bannerColor="#0d1a0d"
      accentColor="#D14F42"
      tagline="Entrenando niños llenos del Espíritu Santo para que sean adoradores e intercesores en esta generación"
      description="La Carrera Nueva Generación está diseñada para niños que quieren conocer a Dios desde temprana edad y ser formados como adoradores e intercesores. A través de enseñanza bíblica adaptada, música y creatividad, sembramos el Reino en las próximas generaciones."
      duration="2 años"
      modality="Presencial y Online"
      schedule="Lunes 18:00 – 20:15 hs"
      ageRange="6 a 12 años"
      modules={[
        {
          name: "Materias teóricas",
          courses: [
            "El Aposento Secreto",
            "Conociendo a Aquel que viene (Partes I y II)",
            "Las Pasiones del Corazón de Dios",
            "Nuestro Amigo el Espíritu Santo",
            "Sacude tu Sal",
          ],
        },
        {
          name: "Materias prácticas (presencial)",
          courses: [
            "Canto",
            "Piano",
            "Guitarra",
            "Batería",
            "Dibujo",
            "Danza",
          ],
        },
        {
          name: "Dinámica quincenal",
          courses: [
            "Devocionales de adoración e intimidad",
            "Clases de materias ministeriales",
            "Lecciones de instrumentos",
            "Talleres de Creatividad de Reino (opcional)",
          ],
        },
      ]}
      requirements={[
        "6 a 12 años de edad",
        "Estar inscripto en la escuela primaria",
        "Aprobación de los padres o tutores",
        "Aval del liderazgo de la iglesia local",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/nuevageneracion"
    />
  );
}
