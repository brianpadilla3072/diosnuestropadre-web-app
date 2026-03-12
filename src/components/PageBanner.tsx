interface PageBannerProps {
  title: string;
  subtitle?: string;
  tag?: string;
  bgColor?: string;
  accentColor?: string;
}

export default function PageBanner({
  title,
  subtitle,
  tag,
  bgColor = "#0d0d1a",
  accentColor = "#D14F42",
}: PageBannerProps) {
  return (
    <section
      className="page-banner"
      style={{ backgroundColor: bgColor, "--banner-accent": accentColor } as React.CSSProperties}
    >
      {/* Barra de acento superior */}
      <div
        className="absolute top-0 left-0 w-full h-[3px]"
        style={{ backgroundColor: accentColor }}
      />
      <div className="site-wrapper">
        {tag && (
          <span
            className="section-tag"
            style={{ color: accentColor }}
          >
            {tag}
          </span>
        )}
        <h1 className="heading-xl heading-white">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--accent-cream)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
