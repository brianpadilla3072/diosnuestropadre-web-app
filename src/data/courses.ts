export interface Lesson {
  number: number;
  title: string;
  duration: string;
  type: "video" | "pdf";
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  accessType: "membership" | "free" | "paid";
  price?: string;
  coverImage: string | null;
  instructor: {
    name: string;
    role: string;
    bio: string;
    photo: string | null;
  };
  keyPoints: string[];
  lessons: Lesson[];
  faq: { question: string; answer: string }[];
  externalLink?: string;
}

export const courses: Course[] = [
  {
    slug: "liderazgo-espiritual",
    title: "LIDERAZGO ESPIRITUAL",
    subtitle: "Levantando líderes conforme al corazón de Dios.",
    description:
      "Este curso equipa a los estudiantes con el discernimiento y la sabiduría necesarios para liderar en tiempos desafiantes, basándose en el modelo de liderazgo de Jesús. Aprenderás a desarrollar un carácter sólido, a liderar con autoridad espiritual y a guiar comunidades centradas en Cristo.",
    accessType: "membership",
    coverImage: null,
    instructor: {
      name: "Mariano Sennewald",
      role: "Fundador de Iglesia Dios Nuestro Padre",
      bio: "Mariano Sennewald es el fundador de Iglesia Dios Nuestro Padre y pastor en la Iglesia El Encuentro en Buenos Aires, Argentina. Es autor de varios libros sobre liderazgo espiritual e intimidad con Dios, y viaja predicando a diferentes naciones. Está casado con Analía y tienen dos hijas.",
      photo: null,
    },
    keyPoints: [
      "Conocer el modelo de liderazgo de Jesús y aplicarlo en tu contexto",
      "Desarrollar liderazgo profético con sensibilidad al Espíritu Santo",
      "Romper paradigmas mundanos sobre el liderazgo",
      "Autoliderazgo: llevar una vida íntegra e irreprensible",
      "Liderar comunidades sanas centradas en Cristo",
    ],
    lessons: [
      { number: 1, title: "Material Introductorio", duration: "PDF", type: "pdf" },
      { number: 2, title: "Introducción al Liderazgo Espiritual", duration: "42 min", type: "video" },
      { number: 3, title: "El Modelo de Jesús", duration: "51 min", type: "video" },
      { number: 4, title: "Carácter y Liderazgo", duration: "58 min", type: "video" },
      { number: 5, title: "Autoridad Espiritual", duration: "47 min", type: "video" },
      { number: 6, title: "Liderazgo Profético", duration: "62 min", type: "video" },
      { number: 7, title: "Visión y Propósito", duration: "55 min", type: "video" },
      { number: 8, title: "Integridad del Líder", duration: "49 min", type: "video" },
      { number: 9, title: "Equipando a Otros", duration: "44 min", type: "video" },
      { number: 10, title: "Liderazgo en Crisis", duration: "67 min", type: "video" },
      { number: 11, title: "Paradigmas del Reino", duration: "71 min", type: "video" },
      { number: 12, title: "El Líder y la Oración", duration: "53 min", type: "video" },
      { number: 13, title: "Comunidades Centradas en Cristo", duration: "60 min", type: "video" },
      { number: 14, title: "Liderazgo en los Últimos Tiempos", duration: "78 min", type: "video" },
      { number: 15, title: "Legado y Sucesión", duration: "81 min", type: "video" },
      { number: 16, title: "Conclusión y Desafío Final", duration: "37 min", type: "video" },
    ],
    faq: [
      {
        question: "¿Puedo acceder al curso individualmente?",
        answer: "Este curso está disponible exclusivamente para suscriptores de la Membresía DNP Online. Con la membresía tenés acceso a todos los cursos disponibles en la plataforma.",
      },
      {
        question: "¿Por cuánto tiempo tengo acceso?",
        answer: "El acceso es continuo mientras tu membresía esté activa. Podés ver las clases a tu propio ritmo, pausar y retomar cuando quieras.",
      },
      {
        question: "¿Hay fechas de inicio y cierre?",
        answer: "No, el curso es completamente a tu ritmo. No hay fechas límite ni clases en vivo. Podés comenzar en cualquier momento.",
      },
    ],
    externalLink: "https://www.misiononline.com/p/liderazgo-espiritual1", // TODO: URL de DNP
  },
  {
    slug: "apocalipsis",
    title: "APOCALIPSIS",
    subtitle: "Estudio profundo del libro del fin de los tiempos.",
    description:
      "Un recorrido exhaustivo por el libro de Apocalipsis, entendiendo su mensaje profético para la iglesia de hoy. Descubre el significado de las visiones, los sellos, las trompetas y la victoria final del Cordero.",
    accessType: "membership",
    coverImage: null,
    instructor: {
      name: "Mariano Sennewald",
      role: "Fundador de Iglesia Dios Nuestro Padre",
      bio: "Mariano Sennewald es el fundador de Iglesia Dios Nuestro Padre y pastor en la Iglesia El Encuentro en Buenos Aires, Argentina. Es autor de varios libros sobre liderazgo espiritual e intimidad con Dios.",
      photo: null,
    },
    keyPoints: [
      "Comprender el contexto histórico del libro de Apocalipsis",
      "Interpretar las visiones y símbolos proféticos",
      "Entender el mensaje a las 7 iglesias",
      "Conocer la escatología bíblica desde una perspectiva del Reino",
      "Vivir con esperanza y propósito en los últimos tiempos",
    ],
    lessons: [
      { number: 1, title: "Introducción al Apocalipsis", duration: "55 min", type: "video" },
      { number: 2, title: "Las 7 Iglesias", duration: "63 min", type: "video" },
      { number: 3, title: "El Trono de Dios", duration: "49 min", type: "video" },
      { number: 4, title: "Los 7 Sellos", duration: "70 min", type: "video" },
      { number: 5, title: "Las 7 Trompetas", duration: "66 min", type: "video" },
      { number: 6, title: "La Mujer y el Dragón", duration: "58 min", type: "video" },
      { number: 7, title: "Las 7 Copas", duration: "61 min", type: "video" },
      { number: 8, title: "La Gran Ramera y Babilonia", duration: "75 min", type: "video" },
      { number: 9, title: "El Regreso de Cristo", duration: "80 min", type: "video" },
      { number: 10, title: "El Milenio y el Juicio Final", duration: "72 min", type: "video" },
      { number: 11, title: "La Nueva Jerusalén", duration: "67 min", type: "video" },
      { number: 12, title: "Vivir en los Últimos Tiempos", duration: "45 min", type: "video" },
    ],
    faq: [
      {
        question: "¿Necesito conocimiento previo para tomar este curso?",
        answer: "No es necesario. El curso está diseñado para guiarte desde los conceptos básicos hasta los temas más profundos del libro.",
      },
      {
        question: "¿Puedo acceder sin membresía?",
        answer: "Este curso es exclusivo para suscriptores de la Membresía DNP Online ($15/mes con acceso ilimitado a todos los cursos).",
      },
      {
        question: "¿Incluye material descargable?",
        answer: "Sí, incluye materiales PDF complementarios para acompañar cada clase.",
      },
    ],
    externalLink: "https://www.misiononline.com", // TODO: URL de DNP
  },
  {
    slug: "sanidad-interior",
    title: "SANIDAD INTERIOR",
    subtitle: "Proceso de sanidad y restauración del alma.",
    description:
      "Un camino de encuentro con Dios para sanar heridas del pasado, romper ataduras emocionales y experimentar la restauración completa que solo Él puede dar. Un curso transformador para tu vida interior.",
    accessType: "membership",
    coverImage: null,
    instructor: {
      name: "Analía Sennewald",
      role: "Pastora e Iglesia Dios Nuestro Padre",
      bio: "Analía Sennewald es pastora y docente de Iglesia Dios Nuestro Padre. Con años de experiencia en consejería y acompañamiento espiritual, guía a personas hacia la libertad y sanidad interior a través de la Palabra de Dios.",
      photo: null,
    },
    keyPoints: [
      "Identificar y sanar heridas del pasado",
      "Romper patrones de conducta negativos",
      "Experimentar el perdón y la reconciliación",
      "Restaurar la identidad en Cristo",
      "Vivir en libertad emocional y espiritual",
    ],
    lessons: [
      { number: 1, title: "Introducción a la Sanidad Interior", duration: "PDF", type: "pdf" },
      { number: 2, title: "¿Qué es la Sanidad Interior?", duration: "48 min", type: "video" },
      { number: 3, title: "Heridas del Corazón", duration: "55 min", type: "video" },
      { number: 4, title: "El Poder del Perdón", duration: "62 min", type: "video" },
      { number: 5, title: "Identidad en Cristo", duration: "50 min", type: "video" },
      { number: 6, title: "Sanando la Familia de Origen", duration: "70 min", type: "video" },
      { number: 7, title: "Romper Maldiciones Generacionales", duration: "65 min", type: "video" },
      { number: 8, title: "Emociones Sanas", duration: "45 min", type: "video" },
      { number: 9, title: "Restauración y Libertad", duration: "58 min", type: "video" },
      { number: 10, title: "Caminar en Salud Emocional", duration: "42 min", type: "video" },
    ],
    faq: [
      {
        question: "¿Este curso reemplaza la consejería profesional?",
        answer: "No. Este curso es un acompañamiento espiritual. Para situaciones que requieren atención profesional, siempre recomendamos buscar un especialista.",
      },
      {
        question: "¿Puedo hacerlo a mi ritmo?",
        answer: "Sí, completamente. No hay fechas límite y podés tomarte el tiempo que necesites en cada clase.",
      },
      {
        question: "¿Está disponible con membresía?",
        answer: "Sí, es parte de la Membresía DNP Online junto a todos los demás cursos disponibles.",
      },
    ],
    externalLink: "https://www.misiononline.com", // TODO: URL de DNP
  },
  {
    slug: "desafio-selah",
    title: "DESAFIO SELAH",
    subtitle: "21 días de encuentro profundo con Dios.",
    description:
      "Un desafío espiritual de 21 días diseñado para llevarte a un lugar de intimidad, adoración y transformación. Cada día incluye una devoción, una práctica espiritual y una declaración de fe.",
    accessType: "membership",
    coverImage: null,
    instructor: {
      name: "Iglesia Dios Nuestro Padre",
      role: "Equipo Docente",
      bio: "El equipo docente de Iglesia Dios Nuestro Padre está compuesto por pastores, líderes y maestros con años de experiencia en formación ministerial y vida espiritual.",
      photo: null,
    },
    keyPoints: [
      "21 días de devocionales guiados",
      "Prácticas de oración e intimidad con Dios",
      "Adoración diaria con material exclusivo",
      "Comunidad de personas haciendo el desafío juntas",
      "Transformación personal profunda",
    ],
    lessons: [
      { number: 1, title: "Día 1 – El Llamado a la Intimidad", duration: "25 min", type: "video" },
      { number: 2, title: "Día 2 – Silencio y Escucha", duration: "22 min", type: "video" },
      { number: 3, title: "Día 3 – La Adoración como Estilo de Vida", duration: "28 min", type: "video" },
      { number: 4, title: "Día 4 – La Oración que Mueve Cielos", duration: "30 min", type: "video" },
      { number: 5, title: "Día 5 – Ayuno y Espíritu", duration: "27 min", type: "video" },
      { number: 6, title: "Día 6 – Identidad en el Padre", duration: "24 min", type: "video" },
      { number: 7, title: "Día 7 – Descanso Sabático", duration: "20 min", type: "video" },
      { number: 8, title: "Días 8-14 – Profundizando", duration: "Serie", type: "video" },
      { number: 9, title: "Días 15-21 – Transformación", duration: "Serie", type: "video" },
    ],
    faq: [
      {
        question: "¿Puedo empezar en cualquier momento?",
        answer: "Sí, el desafío comienza cuando vos lo decides. No hay fechas fijas.",
      },
      {
        question: "¿Cuánto tiempo requiere por día?",
        answer: "Aproximadamente 20-30 minutos diarios, ideal para hacer por las mañanas.",
      },
      {
        question: "¿Qué necesito para empezar?",
        answer: "Solo una membresía activa de DNP Online y disposición de corazón para el encuentro con Dios.",
      },
    ],
    externalLink: "https://www.misiononline.com", // TODO: URL de DNP
  },
  {
    slug: "carrera-ministerial-online",
    title: "CARRERA MINISTERIAL ONLINE",
    subtitle: "Tres años de formación ministerial completa, desde donde estés.",
    description:
      "La Carrera Ministerial Online de Iglesia Dios Nuestro Padre es el programa de formación más completo disponible en la plataforma. Durante tres años, recibirás el mismo contenido que se enseña en las aulas presenciales de Monte Grande, Buenos Aires, ahora disponible para todo el mundo.",
    accessType: "paid",
    price: "Consultar",
    coverImage: "https://misioninstituto.com/wp-content/uploads/2023/09/MiSion-cem-_donar-linea-1024x9.jpg", // TODO: imagen DNP
    instructor: {
      name: "Iglesia Dios Nuestro Padre",
      role: "Equipo Docente",
      bio: "El equipo docente de Iglesia Dios Nuestro Padre está compuesto por pastores, líderes y maestros con años de experiencia en formación ministerial. Fundado por Mariano Sennewald, el instituto ha formado a miles de líderes en Argentina y las naciones.",
      photo: "https://misioninstituto.com/wp-content/uploads/2020/11/logo-b-s.png", // TODO: logo DNP
    },
    keyPoints: [
      "Tres años de formación ministerial completa",
      "Mismo contenido que los programas presenciales",
      "Acceso a todos los docentes del instituto",
      "Comunidad online con otros estudiantes de todo el mundo",
      "Certificado ministerial al completar",
    ],
    lessons: [
      { number: 1, title: "Módulo 1 – Fundamentos del Reino", duration: "Año 1", type: "video" },
      { number: 2, title: "Módulo 2 – Vida en el Espíritu Santo", duration: "Año 1", type: "video" },
      { number: 3, title: "Módulo 3 – La Iglesia y su Misión", duration: "Año 1", type: "video" },
      { number: 4, title: "Módulo 4 – Liderazgo y Carácter", duration: "Año 2", type: "video" },
      { number: 5, title: "Módulo 5 – Dones y Ministerios", duration: "Año 2", type: "video" },
      { number: 6, title: "Módulo 6 – Evangelismo y Misiones", duration: "Año 2", type: "video" },
      { number: 7, title: "Módulo 7 – Teología Práctica", duration: "Año 3", type: "video" },
      { number: 8, title: "Módulo 8 – Planta tu Iglesia", duration: "Año 3", type: "video" },
      { number: 9, title: "Módulo 9 – Proyecto Final", duration: "Año 3", type: "video" },
    ],
    faq: [
      {
        question: "¿Cuáles son los requisitos de ingreso?",
        answer: "Ser mayor de 18 años, pertenecer a una iglesia local y contar con el aval de tu pastor o líder espiritual.",
      },
      {
        question: "¿Cómo funciona el cursado online?",
        answer: "Las clases son grabadas y disponibles en la plataforma. Hay entregas periódicas y evaluaciones para cada módulo.",
      },
      {
        question: "¿Recibo algún certificado?",
        answer: "Sí, al completar los tres años recibirás el Certificado Ministerial de Iglesia Dios Nuestro Padre.",
      },
    ],
    externalLink: "https://www.misiononline.com", // TODO: URL de DNP
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((c) => c.slug);
}
