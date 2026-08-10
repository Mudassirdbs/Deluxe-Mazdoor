import heroWide from "@/assets/mazdoor-chowk-wide.jpg";
import heroPortrait from "@/assets/mazdoor-chowk-portrait.jpg";
import { AmbientLayer } from "@/components/mazdoor/AmbientLayer";

export default function HomePage() {
  const wideSrc = typeof heroWide === "string" ? heroWide : heroWide.src;
  const portraitSrc = typeof heroPortrait === "string" ? heroPortrait : heroPortrait.src;

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-background">
      <picture>
        <source media="(max-aspect-ratio: 3/4)" srcSet={portraitSrc} />
        <img
          src={wideSrc}
          alt="Illustration of workers waiting at an Indian labour chowk on a dusty morning, with bricks, tools, bamboo scaffolding and a tea stall"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
      </picture>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/45 via-transparent to-background/60" />
      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <h1 className="pointer-events-none absolute inset-x-0 top-[18%] z-10 text-center font-display text-6xl leading-[0.95] text-hero-ink drop-shadow-[0_6px_24px_rgba(40,20,10,0.55)] sm:text-8xl lg:text-9xl">
        मज़दूर
        <span className="block">चौक</span>
      </h1>

      <AmbientLayer />
    </main>
  );
}
