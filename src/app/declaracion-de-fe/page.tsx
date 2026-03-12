import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const articles = [
  {
    number: "01",
    title: "La Biblia",
    text: "Creemos que las 66 libros de la Biblia son la Palabra infalible de Dios, inspirada por el Espíritu Santo, y constituyen la única regla de fe y práctica para el creyente. (Mt. 5:18; 2 Ti. 3:16-17)",
  },
  {
    number: "02",
    title: "Jesucristo",
    text: "Creemos en Jesucristo como plena deidad y plena humanidad. En Su nacimiento virginal, en Su muerte expiatoria en la cruz, en Su resurrección corporal, en Su intercesión eterna ante el Padre y en Su regreso glorioso.",
  },
  {
    number: "03",
    title: "La Salvación",
    text: "Creemos que la salvación es solo por gracia mediante la fe en Cristo Jesús. No hay ritos ni obras que salven al hombre. Solo la fe en la persona y obra redentora de Cristo otorga perdón de pecados y vida eterna. (Ro. 3-4; Ef. 2:8-10)",
  },
  {
    number: "04",
    title: "El Espíritu Santo",
    text: "Creemos en el bautismo del Espíritu Santo, en Su morada en el creyente, en Su obra de santificación, y en que los dones y señales del Espíritu operan hoy en día para edificar la Iglesia. (Hch. 4:29-30; 1 Co. 12:12-13)",
  },
  {
    number: "05",
    title: "La Trinidad",
    text: "Creemos en un solo Dios eternamente existente en tres personas: Padre, Hijo y Espíritu Santo. Iguales en deidad, naturaleza y poder. Distintos en persona y función.",
  },
  {
    number: "06",
    title: "La Vida Eterna",
    text: "Creemos que los creyentes pasan a la presencia de Cristo al morir y que los incrédulos enfrentan una separación eterna de Dios. Hay resurrección tanto de justos como de injustos.",
  },
  {
    number: "07",
    title: "Las Ordenanzas",
    text: "Creemos en el bautismo en agua y en la Santa Cena como canales de la gracia santificadora de Dios. El bautismo es por inmersión como confesión pública de fe, y la Cena es conmemoración de la muerte del Señor.",
  },
  {
    number: "08",
    title: "La Segunda Venida",
    text: "Creemos en el regreso visible y glorioso de Cristo, en la transformación de la Iglesia, en la cosecha de almas de las naciones y en una Iglesia gloriosa sin mancha ni arruga preparándose para ese día.",
  },
  {
    number: "09",
    title: "La Iglesia",
    text: "Creemos que la Iglesia es el principal instrumento de redención en la tierra, gobernada por los cinco ministerios (apóstoles, profetas, evangelistas, pastores y maestros), donde todos los creyentes son sacerdotes y las mujeres son llamadas a proclamar el Evangelio.",
  },
  {
    number: "10",
    title: "La Gran Comisión",
    text: "Creemos en la responsabilidad de predicar el Evangelio a todas las naciones, enseñar, bautizar, liberar y hacer discípulos que transformen sus ciudades y naciones. (Mt. 28:18-20; Is. 58:6-12)",
  },
  {
    number: "11",
    title: "Satanás",
    text: "Creemos que Satanás, originalmente Lucifer, fue derrotado en la cruz del Calvario y que su destino final es el lago de fuego y azufre, junto con todo aquel que no haya aceptado a Cristo como Señor y Salvador.",
  },
];

export default function DeclaracionDeFe() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Declaración de Fe"
          subtitle="Lo que creemos y los fundamentos sobre los cuales edificamos el ministerio"
          tag="Nosotros"
        />

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10">
            <div className="max-w-3xl mb-14">
              <p className="text-[#545454] text-lg leading-relaxed mb-5">
                Creemos que el plan de Dios se llevará a cabo a través de una Iglesia preparada, ungida
                y que manifiesta la luz de Cristo en medio de las tinieblas, para establecer el gobierno
                de Jesús en la tierra.
              </p>
              <p className="text-[#545454] text-lg leading-relaxed">
                Nuestro lema: <em>«Entrenando hijos e hijas de Dios para manifestar el Reino eterno en las naciones»</em>.
              </p>
            </div>

            {/* Articles */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <div
                  key={article.number}
                  className="border border-[#e0e0e0] p-7 hover:border-[#36348E] transition-colors group"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="text-4xl font-extrabold leading-none flex-shrink-0"
                      style={{ color: "#36348E20", fontFamily: "'Work Sans', sans-serif" }}
                    >
                      {article.number}
                    </span>
                    <div>
                      <h3
                        className="font-bold text-[#292929] mb-3 group-hover:text-[#36348E] transition-colors"
                        style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "18px" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-[#545454] text-sm leading-relaxed">{article.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing verse */}
        <section className="py-16 bg-[#0d0d1a]">
          <div className="max-w-[1260px] mx-auto px-5 md:px-10 text-center max-w-3xl mx-auto">
            <blockquote
              className="text-white text-2xl font-bold italic leading-relaxed mb-4"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              «Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo
              aquel que en él cree, no se pierda, mas tenga vida eterna.»
            </blockquote>
            <cite className="text-[#FFC53A] font-semibold text-sm uppercase tracking-widest">
              Juan 3:16
            </cite>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
