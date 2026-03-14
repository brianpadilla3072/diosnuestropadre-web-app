import CareerPage from "@/components/CareerPage";

export default function CarreraMedias() {
  return (
    <CareerPage
      title="Carrera de"
      titleAccent="Medios Audiovisuales"
      tag="Carrera Presencial"
      bannerColor="#1a1a0d"
      accentColor="#D14F42"
      tagline="Comunicadores creativos y espirituales de ideas divinas a través de expresiones artísticas en video, diseño e imagen"
      description="La Carrera de Medios Audiovisuales capacita comunicadores que fusionan excelencia técnica con revelación espiritual. El propósito es impartir diseños, planos e ideas para expresar la naturaleza del Reino en los tiempos actuales."
      extraInfo="El programa capacita en producción de contenido para redes sociales, videos ministeriales, comunicación corporativa, diseño de eventos y packaging personalizado, todo enmarcado en una visión del Reino."
      duration="2 años (4 módulos)"
      modality="Presencial"
      schedule="Sábados 8:30 a 14:00 hs"
      modules={[
        {
          name: "Módulo I",
          courses: [
            "Creatividad Digital",
            "Producción de Video",
            "El Carácter de un Comunicador",
          ],
        },
        {
          name: "Módulo II",
          courses: [
            "Diseño de Eventos",
            "Realización de Streaming",
            "Fotografía",
          ],
        },
        {
          name: "Módulo III",
          courses: [
            "Liderazgo Práctico",
            "Creatividad Divina",
            "Animación",
          ],
        },
        {
          name: "Módulo IV",
          courses: [
            "Discipulado en Medios",
            "Mensajeros Creativos",
            "Producción Audiovisual",
          ],
        },
      ]}
      ministerialSubjects={[
        "Apocalipsis: La Revelación de Jesús en los Últimos Tiempos",
        "Ministerio Profético",
        "Liderazgo Espiritual",
        "Restaurando los 5 Ministerios en el Cuerpo de Cristo",
        "Experiencias con el Espíritu Santo",
      ]}
      requirements={[
        "Aval pastoral de iglesia local",
        "Ser miembro activo de una congregación",
        "Mayor de 18 años",
      ]}
      registrationUrl="https://misioninstituto.quinttos.com/index.php/inscripcion/online/medios" // TODO: URL inscripción DNP
    />
  );
}
