"use client";

type Props = {
  onEnter: () => void;
};

export function EnterOverlay({ onEnter }: Props) {
  return (
    <button
      type="button"
      onClick={onEnter}
      translate="no"
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-background/80 backdrop-blur-md transition-opacity notranslate"
    >
      <div
        dir="rtl"
        translate="no"
        className="font-urdu notranslate flex flex-col items-center text-5xl leading-[1.25] text-foreground sm:text-7xl drop-shadow-lg"
      >
        <span translate="no" className="notranslate">مزدور</span>
        <span translate="no" className="notranslate -mt-2 sm:-mt-4">چوک</span>
      </div>
      <span translate="no" className="font-display notranslate text-xl tracking-[0.25em] font-semibold text-foreground/95 uppercase mt-1">
        Mazdoor Chowk
      </span>
      <span className="mt-3 text-xs tracking-[0.3em] text-foreground/75 uppercase font-mono">
        tap to enter
      </span>
    </button>
  );
}
