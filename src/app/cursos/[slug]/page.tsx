import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCourseBySlug, getAllCourseSlugs } from "@/data/courses";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} – Dios Nuestro Padre`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const totalVideos = course.lessons.filter((l) => l.type === "video").length;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero / Cover */}
        <div className="bg-[#1a1a2e] text-white">
          <div className="max-w-5xl mx-auto px-5 md:px-10 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Info */}
              <div>
                <Link
                  href="/cursos"
                  className="inline-flex items-center gap-1.5 text-[#B7D8EF] text-sm mb-6 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Todos los cursos
                </Link>

                <h1
                  className="font-extrabold text-white mb-3"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.1" }}
                >
                  {course.title}
                </h1>
                <p className="text-[#E8D7B9] text-xl mb-6 font-medium">{course.subtitle}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-5 text-sm text-gray-300 mb-8">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#D14F42]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    {totalVideos} clases en video
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#D14F42]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Acceso de por vida
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#D14F42]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    A tu ritmo
                  </span>
                </div>

                {/* CTA */}
                {course.accessType === "membership" ? (
                  <div className="space-y-3">
                    <div className="bg-[#D14F42]/20 border border-[#D14F42]/40 px-4 py-3 text-sm text-white">
                      <span className="font-bold text-[#FFC53A]">CURSO DISPONIBLE SOLO PARA MEMBRESÍA</span>
                    </div>
                    <Link
                      href="/auth/registro"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D14F42] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b83d31] transition-colors"
                    >
                      INSCRÍBITE AQUÍ
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                    <p className="text-gray-400 text-xs">Membresía desde $15/mes · Acceso a todos los cursos</p>
                  </div>
                ) : (
                  <Link
                    href="/auth/registro"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#D14F42] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b83d31] transition-colors"
                  >
                    INSCRÍBITE AQUÍ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                )}
              </div>

              {/* Cover image */}
              <div className="relative aspect-video bg-[#36348E] rounded-sm overflow-hidden shadow-2xl">
                {course.coverImage ? (
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span className="text-[#B7D8EF]/30 text-8xl font-black leading-none">
                      {course.title.charAt(0)}
                    </span>
                    <span className="text-[#B7D8EF]/50 text-sm uppercase tracking-widest">DNP Online</span>
                  </div>
                )}
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-5 md:px-10 py-14">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left column */}
            <div className="md:col-span-2 space-y-14">
              {/* Description */}
              <section>
                <h2
                  className="font-bold text-[#292929] mb-5 pb-3 border-b border-[#E8D7B9]"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "26px" }}
                >
                  Acerca del curso
                </h2>
                <p className="text-[#545454] text-lg leading-relaxed">{course.description}</p>
              </section>

              {/* Key points */}
              <section>
                <h2
                  className="font-bold text-[#292929] mb-5 pb-3 border-b border-[#E8D7B9]"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "26px" }}
                >
                  Lo que vas a aprender
                </h2>
                <ul className="space-y-3">
                  {course.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#545454]">
                      <span className="text-[#36348E] mt-0.5 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Lessons */}
              <section>
                <h2
                  className="font-bold text-[#292929] mb-5 pb-3 border-b border-[#E8D7B9]"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "26px" }}
                >
                  Plan de estudio
                  <span className="ml-3 text-base text-[#545454] font-normal">
                    {course.lessons.length} clases
                  </span>
                </h2>
                <div className="divide-y divide-gray-100">
                  {course.lessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className="flex items-center justify-between py-4 group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-[#36348E]/10 text-[#36348E] text-sm font-bold flex items-center justify-center flex-shrink-0">
                          {lesson.type === "pdf" ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
                          ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          )}
                        </span>
                        <div>
                          <p className="text-[#292929] font-medium text-sm group-hover:text-[#36348E] transition-colors">
                            Clase {lesson.number} – {lesson.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#545454] text-sm">{lesson.duration}</span>
                        <Link
                          href="/auth/login"
                          className="text-xs font-bold uppercase tracking-wider text-[#36348E] hover:text-[#D14F42] transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Comenzar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2
                  className="font-bold text-[#292929] mb-5 pb-3 border-b border-[#E8D7B9]"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "26px" }}
                >
                  Preguntas frecuentes
                </h2>
                <div className="space-y-5">
                  {course.faq.map((item, i) => (
                    <div key={i} className="border border-gray-100 p-5">
                      <h3
                        className="font-bold text-[#292929] mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "17px" }}
                      >
                        {item.question}
                      </h3>
                      <p className="text-[#545454] text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right sidebar */}
            <aside className="space-y-6">
              {/* Sticky CTA card */}
              <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-6 sticky top-24">
                {course.accessType === "membership" && (
                  <>
                    <div className="text-center mb-5">
                      <p className="text-[#545454] text-sm mb-1">Acceso con</p>
                      <p className="font-extrabold text-[#36348E] text-3xl" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                        Membresía
                      </p>
                      <p className="text-[#D14F42] font-bold text-lg">$15 / mes</p>
                      <p className="text-[#545454] text-xs mt-1">Acceso a todos los cursos</p>
                    </div>
                    <Link
                      href="/auth/registro"
                      className="block w-full text-center px-6 py-3.5 bg-[#D14F42] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b83d31] transition-colors mb-3"
                    >
                      INSCRÍBITE AQUÍ
                    </Link>
                    <Link
                      href="/auth/login"
                      className="block w-full text-center px-6 py-3 border-2 border-[#36348E] text-[#36348E] font-bold text-sm uppercase tracking-wider hover:bg-[#36348E] hover:text-white transition-colors"
                    >
                      Iniciar Sesión
                    </Link>
                  </>
                )}

                {/* What's included */}
                <div className="mt-6 pt-5 border-t border-[#e0e0e0]">
                  <p className="font-bold text-[#292929] text-sm uppercase tracking-wide mb-3">
                    Incluye
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#545454]">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#36348E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {totalVideos} videos
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#36348E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Acceso de por vida
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#36348E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Disponible en móvil
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#36348E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      A tu propio ritmo
                    </li>
                  </ul>
                </div>
              </div>

              {/* Share */}
              <div className="border border-gray-100 p-5">
                <p className="font-bold text-[#292929] text-sm uppercase tracking-wide mb-3">
                  Compartir
                </p>
                <div className="flex gap-2">
                  <a href="#" className="w-9 h-9 bg-[#3b5998] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-9 h-9 bg-[#1da1f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-9 h-9 bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Instructor section */}
        <div className="bg-[#FAFAFA] border-t border-[#e0e0e0]">
          <div className="max-w-5xl mx-auto px-5 md:px-10 py-14">
            <h2
              className="font-bold text-[#292929] mb-8"
              style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "26px" }}
            >
              Tu instructor
            </h2>
            <div className="flex gap-8 items-start">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#36348E] flex-shrink-0 overflow-hidden">
                {course.instructor.photo ? (
                  <Image
                    src={course.instructor.photo}
                    alt={course.instructor.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                    {course.instructor.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3
                  className="font-bold text-[#292929] text-xl mb-1"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {course.instructor.name}
                </h3>
                <p className="text-[#D14F42] font-semibold text-sm mb-3">{course.instructor.role}</p>
                <p className="text-[#545454] leading-relaxed">{course.instructor.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact footer */}
        <div className="bg-[#111] text-center py-8">
          <p className="text-gray-400 text-sm">
            {/* TODO: email DNP */}
            ¿Preguntas?{" "}
            <a href="mailto:info.misiononline@gmail.com" className="text-[#B7D8EF] hover:text-white transition-colors">
              info.misiononline@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
