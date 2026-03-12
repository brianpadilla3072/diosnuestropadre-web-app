# Template Web – Instituto Ministerial

Template Next.js para sitios web de institutos ministeriales. Diseño copiado de **Instituto MiSion** (misioninstituto.com). Listo para reutilizar: cambiá los datos, habilitá o deshabilitá secciones según lo que necesite cada institución.

---

## Stack

| Tecnología | Versión |
|---|---|
| Next.js (App Router) | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Fuentes | Work Sans + Inter (Google Fonts) |

---

## Inicio rápido

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de producción
npm run lint
```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx                      # Layout raíz – fuentes, metadata
│   ├── globals.css                     # Design system completo (variables, clases)
│   ├── page.tsx                        # Homepage
│   │
│   ├── vision-y-proposito/page.tsx
│   ├── declaracion-de-fe/page.tsx
│   ├── nuestro-equipo/page.tsx
│   ├── mision-musica/page.tsx
│   ├── donaciones/page.tsx
│   │
│   ├── congresos/page.tsx
│   ├── contacto/page.tsx
│   │
│   ├── carrera-internado/page.tsx
│   ├── carrera-de-liderazgo/page.tsx
│   ├── carrera-de-adoracion/page.tsx
│   ├── carrera-de-medios-audiovisuales/page.tsx
│   ├── carrera-generacion-emergente/page.tsx
│   ├── carrera-nueva-generacion/page.tsx
│   ├── carrera-ministerial-online/page.tsx
│   │
│   ├── auth/login/page.tsx             # Esqueleto
│   ├── auth/registro/page.tsx          # Esqueleto
│   └── cursos/[slug]/page.tsx          # Detalle dinámico de curso
│
├── components/
│   ├── Header.tsx          # Nav con dropdowns de 2 niveles + mobile
│   ├── Footer.tsx          # Footer 4 columnas + WhatsApp flotante
│   ├── Hero.tsx            # Hero con video de fondo
│   ├── About.tsx           # Sección "Quiénes somos"
│   ├── Programs.tsx        # Grid de carreras
│   ├── MisionOnline.tsx    # Sección plataforma online
│   ├── MisionMusica.tsx    # Sección ministerio de música
│   ├── Newsletter.tsx      # Suscripción email
│   ├── PageBanner.tsx      # Banner reutilizable para páginas internas
│   └── CareerPage.tsx      # Layout completo para páginas de carrera
│
└── data/
    └── courses.ts          # Datos de cursos online
```

---

## Design System (`globals.css`)

Todo el diseño está centralizado en `src/app/globals.css`. Para adaptar el template a otra institución, solo hay que cambiar las variables en `:root`.

### Variables principales

```css
:root {
  --primary:        #36348E;   /* Azul/índigo – color institucional */
  --accent-red:     #D14F42;   /* Rojo terracota – acentos */
  --accent-gold:    #FFC53A;   /* Dorado – hovers */
  --accent-cream:   #E8D7B9;   /* Crema – subtítulos en fondos oscuros */
  --accent-sky:     #B7D8EF;   /* Celeste – texto sobre azul */

  --text-dark:      #292929;   /* Texto principal */
  --text-slate:     #545454;   /* Texto secundario */
  --bg-light:       #FAFAFA;   /* Fondo claro */
  --dark-navy:      #0d0d1a;   /* Fondo oscuro para banners */

  --font-heading:   'Work Sans', Arial, sans-serif;
  --font-body:      'Inter', Arial, sans-serif;

  --max-width:      1260px;
  --border-radius:  0px;       /* Diseño completamente angular */
}
```

### Escala tipográfica

| Clase | Desktop | Mobile | Peso |
|---|---|---|---|
| `.heading-xl` | 55px | 34px | 800 |
| `.heading-lg` | 50px | 30px | 700 |
| `.heading-md` | 36px | 26px | 700 |
| `.heading-sm` | 28px | 22px | 700 |
| body | 18px | 16px | 400 |

Modificadores de color: `.heading-white` · `.heading-primary` · `.heading-red`

### Layout

```html
<!-- Contenedor estándar (max-width + padding) -->
<div class="site-wrapper">...</div>

<!-- Padding vertical estándar para secciones -->
<section class="section-padding">...</section>

<!-- Uso típico -->
<section class="section-padding bg-off-white">
  <div class="site-wrapper">...</div>
</section>
```

### Botones

```html
<a class="btn btn-primary">Acción principal</a>       <!-- Azul sólido -->
<a class="btn btn-secondary">Acción secundaria</a>    <!-- Borde azul -->
<a class="btn btn-outline-white">Sobre oscuro</a>     <!-- Borde blanco -->
<a class="btn btn-ghost-white">Sutil oscuro</a>       <!-- Ghost blanco -->
<a class="btn btn-white">Sobre azul</a>               <!-- Blanco sólido -->
<a class="btn btn-gold">Suscribirse</a>               <!-- Dorado -->
<a class="btn btn-red">Donar</a>                      <!-- Rojo -->

<!-- Tamaños -->
<a class="btn btn-primary btn-sm">Pequeño</a>
<a class="btn btn-primary btn-lg">Grande</a>
```

### Cards

```html
<div class="card">...</div>                                  <!-- Base -->
<div class="card card-accent-top">...</div>                  <!-- Barra roja arriba -->
<div class="card card-accent-top card-accent-top--blue">...</div>  <!-- Barra azul -->
<a class="program-card card">...</a>                         <!-- Con elevación en hover -->
```

### Badges

```html
<span class="badge badge-red">Presencial</span>
<span class="badge badge-blue">Online</span>
<span class="badge badge-gold">Destacado</span>
<span class="badge badge-sky">Internacional</span>
```

### Tags de sección

```html
<span class="section-tag">Formación Ministerial</span>
<span class="section-tag section-tag--gold">Próximos eventos</span>
<span class="section-tag section-tag--sky">Plataforma Digital</span>
<span class="section-tag section-tag--white">Ministerio</span>
```

### Fondos de sección

```html
<section class="bg-dark">       <!-- #0d0d1a navy oscuro -->
<section class="bg-darker">     <!-- #111111 casi negro -->
<section class="bg-primary">    <!-- #36348E azul -->
<section class="bg-red">        <!-- #D14F42 rojo -->
<section class="bg-cream">      <!-- #E8D7B9 crema -->
<section class="bg-off-white">  <!-- #FAFAFA gris muy claro -->
```

### Módulos de plan de estudios

```html
<div class="module-card">
  <h3 class="module-title">Módulo I</h3>
  <div class="module-item">Nombre de la materia</div>
</div>

<div class="module-card module-card--blue">...</div>  <!-- Barra azul -->
```

### Componentes adicionales

```html
<!-- Cita bíblica al pie de sección -->
<div class="bible-verse">
  <blockquote>«Versículo bíblico»</blockquote>
  <cite>Referencia 1:1</cite>
</div>

<!-- Blockquote con borde lateral rojo -->
<blockquote class="blockquote-border">Texto</blockquote>

<!-- Tarjeta de equipo -->
<div class="team-card">
  <div class="team-avatar">M</div>
  <h3>Nombre Apellido</h3>
  <p>Cargo</p>
</div>

<!-- Iconos de redes sociales -->
<a class="social-icon">...</a>
<a class="social-icon social-icon--whatsapp">...</a>

<!-- Sección CTA (fondo azul) -->
<section class="cta-section section-padding">
  <div class="site-wrapper">...</div>
</section>
```

### Animaciones

```html
<div class="animate-fadeIn">...</div>     <!-- fade desde abajo -->
<div class="animate-fadeInL">...</div>    <!-- fade desde izquierda -->
<div class="animate-fadeInR">...</div>    <!-- fade desde derecha -->
<div class="animate-pulse-slow">...</div>
```

---

## Componentes

### `<Header />`

Navegación principal. Incluye topbar con redes y links secundarios (solo desktop), logo, menú con dropdowns de 2 niveles y menú mobile con acordeón.

**Para adaptar:** editar el array `navItems` en `Header.tsx`.

---

### `<PageBanner />`

Banner para páginas internas. Props:

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `title` | `string` | — | Título principal (H1) |
| `subtitle` | `string?` | — | Subtítulo debajo del título |
| `tag` | `string?` | — | Etiqueta pequeña arriba |
| `bgColor` | `string` | `#0d0d1a` | Color de fondo |
| `accentColor` | `string` | `#D14F42` | Color de barra y tag |

```tsx
<PageBanner
  title="Declaración de Fe"
  subtitle="Lo que creemos como institución"
  tag="Nosotros"
  bgColor="#0d0d1a"
  accentColor="#D14F42"
/>
```

---

### `<CareerPage />`

Layout completo para páginas de carrera. Incluye: banner, barra de info, descripción, plan de estudios en grid, sidebar con requisitos y CTA, sección de contacto al pie.

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Primera línea del título |
| `titleAccent` | `string?` | Segunda línea en color |
| `tag` | `string` | Etiqueta del banner |
| `bannerColor` | `string` | Fondo del banner |
| `accentColor` | `string` | Color de acentos |
| `tagline` | `string` | Subtítulo del banner |
| `description` | `string` | Descripción principal |
| `extraInfo` | `string?` | Párrafo adicional |
| `duration` | `string` | Duración de la carrera |
| `modality` | `string` | Presencial / Online |
| `schedule` | `string?` | Horario |
| `startDate` | `string` | Fecha de inicio |
| `ageRange` | `string?` | Rango de edad |
| `modules` | `Module[]` | Array de módulos con materias |
| `ministerialSubjects` | `string[]?` | Materias transversales |
| `requirements` | `string[]` | Requisitos de admisión |
| `registrationUrl` | `string` | URL de inscripción |
| `whatsappUrl` | `string` | Link de WhatsApp |

```tsx
import CareerPage from "@/components/CareerPage";

export default function MiCarrera() {
  return (
    <CareerPage
      title="Carrera de"
      titleAccent="Liderazgo"
      tag="Carrera Presencial"
      bannerColor="#1a0d2e"
      accentColor="#36348E"
      tagline="Entrenando líderes para el Reino"
      description="Descripción larga del programa..."
      duration="3 años"
      modality="Presencial"
      schedule="Martes y Jueves 19:00–22:00"
      modules={[
        { name: "Módulo I", courses: ["Materia 1", "Materia 2"] },
      ]}
      requirements={["Aval pastoral", "Mayor de 18 años"]}
      registrationUrl="https://..."
    />
  );
}
```

---

### `<Footer />`

Footer en 4 columnas: marca + contacto, Nosotros, Carreras, Recursos. Incluye íconos de redes y botón flotante de WhatsApp.

**Para adaptar:** editar el objeto `footerLinks` en `Footer.tsx`.

---

## Páginas incluidas

| Ruta | Componente clave |
|---|---|
| `/` | Hero + About + Programs + MisionOnline + MisionMusica + Newsletter |
| `/vision-y-proposito` | Visión, propósito, 7 pilares |
| `/declaracion-de-fe` | 11 artículos de fe |
| `/nuestro-equipo` | Dirección general y equipo |
| `/mision-musica` | Ministerio de música + streaming |
| `/donaciones` | Mercado Pago, transferencia, Stripe |
| `/congresos` | Listado de eventos |
| `/contacto` | Formulario + datos de contacto |
| `/carrera-internado` | `<CareerPage>` – 3 años |
| `/carrera-de-liderazgo` | `<CareerPage>` – 3 años |
| `/carrera-de-adoracion` | `<CareerPage>` – 3 años + instrumentos |
| `/carrera-de-medios-audiovisuales` | `<CareerPage>` – 2 años |
| `/carrera-generacion-emergente` | `<CareerPage>` – adolescentes 12–17 |
| `/carrera-nueva-generacion` | `<CareerPage>` – niños 6–12 |
| `/carrera-ministerial-online` | `<CareerPage>` – 100% online |
| `/auth/login` | Esqueleto |
| `/auth/registro` | Esqueleto |
| `/cursos/[slug]` | Detalle dinámico |

---

## Cómo adaptar para una nueva institución

### 1. Cambiar identidad visual

`globals.css` → variables en `:root`:

```css
--primary:     #NUEVO_COLOR;
--accent-red:  #NUEVO_ACENTO;
--accent-gold: #NUEVO_HOVER;
```

### 2. Cambiar logo, nombre y contacto

- `Header.tsx` → `src` del logo, links de redes, URL de campus y tienda
- `Footer.tsx` → logo, datos de contacto, links del footer
- `layout.tsx` → `metadata.title` y `metadata.description`

### 3. Cambiar la navegación

`Header.tsx` → array `navItems`:

```ts
const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    href: "#",
    children: [
      { label: "Visión", href: "/vision" },
    ],
  },
];
```

### 4. Habilitar / deshabilitar secciones de la homepage

`src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        {/* <MisionOnline /> */}   {/* comentar para deshabilitar */}
        <MisionMusica />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
```

### 5. Agregar una nueva carrera

1. Crear `src/app/nueva-carrera/page.tsx` usando `<CareerPage>`
2. Agregar el link en `navItems` de `Header.tsx`
3. Agregar el link en `footerLinks.carreras` de `Footer.tsx`
4. Agregar la card en el array `programs` de `Programs.tsx`

### 6. Cambiar imágenes

Las imágenes apuntan a `misioninstituto.com`. Para una nueva institución:

1. Subir las imágenes al nuevo host
2. Actualizar las `src` en cada componente
3. Agregar el nuevo dominio en `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "nueva-institucion.com",
      pathname: "/wp-content/uploads/**",
    },
  ],
},
```

---

## Convenciones

- Componentes **Server Components** por defecto. Solo `"use client"` cuando se usan hooks — actualmente: `Header`, `Hero`, `Newsletter`, `contacto/page.tsx`.
- Los estilos combinan **clases del design system** (`btn`, `card`, `section-tag`, etc.) con **Tailwind** para ajustes específicos.
- Diseño **completamente angular** — no usar `rounded-*` en elementos visibles.
- Tipografía fluida con **`clamp()`** entre mobile y desktop.
- Todas las imágenes externas usan `unoptimized` en `<Image>` de Next.js.
