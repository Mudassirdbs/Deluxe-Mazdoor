"use client";

import Image from "next/image";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { coverUrl, formatTime, type Track } from "@/lib/mazdoor-tracks";

type Props = {
  track: Track | undefined;
  isPlaying: boolean;
  current: number;
  duration: number;
  onToggle: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function MusicPlayer({
  track,
  isPlaying,
  current,
  duration,
  onToggle,
  onNext,
  onPrevious,
}: Props) {
  if (!track) return null;
  const progress = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-4 sm:bottom-10">
      <div className="flex w-full max-w-lg items-center gap-3 rounded-full bg-[#522217]/40 p-2.5 pr-5 backdrop-blur-xl border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_12px_32px_rgba(0,0,0,0.4)] sm:gap-4 sm:p-3 sm:pr-6">
        {/* Circular Album Art */}
        <div className="relative size-12 shrink-0 sm:size-14 overflow-hidden rounded-full border border-white/30 shadow-md">
          <Image
            src={coverUrl(track)}
            alt={`${track.title} cover`}
            fill
            sizes="(max-width: 640px) 48px, 56px"
            className="object-cover"
          />
        </div>

        {/* Info and Progress Area */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col mb-1">
            <p className="truncate text-sm font-semibold text-white tracking-tight sm:text-base">
              {track.title}
            </p>
            <p className="truncate text-[11px] font-normal text-white/80 tracking-wide sm:text-xs">
              {track.artist || track.album || "90s Bollywood"}
            </p>
          </div>

          <div className="relative w-full">
            {/* Background Progress Track */}
            <div className="h-1 w-full rounded-full bg-white/20 overflow-hidden">
              {/* Active Progress Bar */}
              <div
                className="h-full rounded-full bg-white/95 transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Time Stamp */}
            <div className="mt-1 flex items-center font-sans text-[10px] font-normal text-white/75 tracking-wider sm:text-[11px]">
              <span>{formatTime(current)} / {formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 ml-1 shrink-0">
          <button
            type="button"
            aria-label="Previous track"
            onClick={onPrevious}
            className="p-1 text-white/85 transition-all hover:text-white hover:scale-110 active:scale-95"
          >
            <SkipBack className="size-3.5 fill-current sm:size-4" />
          </button>

          <button
            type="button"
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={onToggle}
            className="flex size-9 items-center justify-center rounded-full bg-white/95 text-[#4a1c12] transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-md sm:size-10"
          >
            {isPlaying ? (
              <Pause className="size-4 fill-current sm:size-5" />
            ) : (
              <Play className="size-4 translate-x-0.5 fill-current sm:size-5" />
            )}
          </button>

          <button
            type="button"
            aria-label="Next track"
            onClick={onNext}
            className="p-1 text-white/85 transition-all hover:text-white hover:scale-110 active:scale-95"
          >
            <SkipForward className="size-3.5 fill-current sm:size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}


