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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-background/70" />
      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <h1 className="pointer-events-none absolute inset-x-0 top-[8%] sm:top-[10%] z-10 flex flex-col items-center justify-center text-center px-4 select-none">
        <div
          dir="rtl"
          className="font-urdu flex flex-col items-center text-6xl leading-[1.25] text-hero-ink sm:text-8xl lg:text-[9.5rem] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_2px_6px_rgba(0,0,0,1),_0_0_2px_rgba(0,0,0,1)]"
        >
          <span>مزدور</span>
          <span className="-mt-3 sm:-mt-6">چوک</span>
        </div>
        <span className="font-display text-xl tracking-[0.3em] font-bold text-hero-ink sm:text-3xl lg:text-4xl uppercase mt-2 sm:mt-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,1)]">
          Mazdoor Chowk
        </span>
      </h1>

      <AmbientLayer />
    </main>
  );
}
