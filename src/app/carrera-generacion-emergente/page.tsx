import CareerPage from "@/components/CareerPage";

export default function CarreraGeneracionEmergente() {
  return (
    <CareerPage
      title="Carrera"
      titleAccent="Generación Emergente"
      tag="Carrera para Adolescentes"
      bannerColor="#0d1a1a"
      accentColor="#36348E"
      tagline="Despertar y activar adolescentes en el poder y carácter del Espíritu Santo"
      description="La Carrera Generación Emergente está diseñada para adolescentes que quieren descubrir su llamado y ser equipados para liderar en esta generación. El programa combina enseñanza bíblica, adoración y desarrollo de habilidades ministeriales y musicales."
      duration="2 años"
      modality="Presencial y Online"
      schedule="Miércoles 18:00 – 20:40 hs"
      ageRange="12 a 17 años"
      modules={[
        {
          name: "Materias ministeriales",
          courses: [
            "Evangelio del Reino",
            "Apocalipsis: La Revelación de Jesús en los Últimos Tiempos",
            "El Carácter de los Hijos de Dios",
            "Amistad con el Espíritu Santo",
            "Vidas Proféticas",
          ],
        },
        {
          name: "Formación musical (presencial)",
          courses: [
            "Canto / Voz",
            "Piano",
            "Guitarra",
            "Batería",
          ],
        },
        {
          name: "Formación online",
          courses: [
            "Medios Audiovisuales",
            "Fotografía",
            "Dibujo / Expresión creativa",
          ],
        },
        {
          name: "Dinámica semanal",
          courses: [
            "Devocionales de adoración e intimidad",
            "Clases de materias ministeriales",
            "Instrumentos musicales (cada 15 días)",
            "Creatividad de Reino (optativo)",
          ],
        },
      ]}
      requirements={[
        "12 a 17 años de edad",
        "Aval pastoral de iglesia local",
        "Ser parte activa de una congregación",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/generacionemergente" // TODO: URL inscripción DNP
      whatsappUrl="https://wa.me/5491125853791"
    />
  );
}
