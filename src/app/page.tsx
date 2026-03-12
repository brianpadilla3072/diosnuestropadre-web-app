import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import MisionOnline from "@/components/MisionOnline";
import MisionMusica from "@/components/MisionMusica";
import SeriesCarousel from "@/components/SeriesCarousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { listSeriesWithCount } from "@/lib/db";

export default function Home() {
  const series = listSeriesWithCount();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <SeriesCarousel series={series} />
        <MisionOnline />
        <MisionMusica />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
