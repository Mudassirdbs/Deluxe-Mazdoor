"use client";

type Props = {
  onEnter: () => void;
};

export function EnterOverlay({ onEnter }: Props) {
  return (
    <button
      type="button"
      onClick={onEnter}
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-background/75 backdrop-blur-md transition-opacity"
    >
      <span className="font-display text-5xl text-foreground sm:text-7xl">मज़दूर चौक</span>
      <span className="text-sm tracking-[0.3em] text-foreground/70 uppercase">
        tap to enter
      </span>
    </button>
  );
}
