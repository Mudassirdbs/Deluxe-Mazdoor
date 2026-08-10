"use client";

type Props = {
  onEnter: () => void;
};

export function EnterOverlay({ onEnter }: Props) {
  return (
    <button
      type="button"
      onClick={onEnter}
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-background/75 backdrop-blur-md transition-opacity"
    >
      <span dir="rtl" className="font-urdu text-5xl text-foreground sm:text-7xl">
        مزدور چوک
      </span>
      <span className="font-display text-xl tracking-[0.25em] text-foreground/90 uppercase">
        Mazdoor Chowk
      </span>
      <span className="mt-2 text-xs tracking-[0.3em] text-foreground/70 uppercase">
        tap to enter
      </span>
    </button>
  );
}
