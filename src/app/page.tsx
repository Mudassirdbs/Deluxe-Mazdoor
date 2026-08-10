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
          alt="Illustration of workers waiting at a labour chowk on a dusty morning, with bricks, tools, bamboo scaffolding and a tea stall"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
      </picture>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/45 via-transparent to-background/60" />
      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <h1 className="pointer-events-none absolute inset-x-0 top-[12%] sm:top-[14%] z-10 flex flex-col items-center justify-center text-center drop-shadow-[0_6px_24px_rgba(40,20,10,0.65)] px-4">
        <span dir="rtl" className="font-urdu text-5xl leading-relaxed text-hero-ink sm:text-7xl lg:text-[8.5rem]">
          مزدور چوک
        </span>
        <span className="font-display text-2xl tracking-[0.2em] text-hero-ink/90 sm:text-4xl lg:text-5xl uppercase -mt-2 sm:-mt-4">
          Mazdoor Chowk
        </span>
      </h1>

      <AmbientLayer />
    </main>
  );
}
