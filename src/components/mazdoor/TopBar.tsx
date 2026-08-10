"use client";

import { useEffect, useState } from "react";
import { useOnlineCount } from "@/hooks/useOnlineCount";
import { SPOTIFY_PLAYLIST_URL, YT_MUSIC_PLAYLIST_URL } from "@/lib/mazdoor-tracks";

function useClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date()
          .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
          .toLowerCase(),
      );
    tick();
    const timer = window.setInterval(tick, 10_000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export function TopBar() {
  const time = useClock();
  const online = useOnlineCount();

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-4 text-xs tracking-wide text-foreground/85 sm:p-6 sm:text-sm">
      <span className="min-w-14 font-mono">{time ?? "\u00a0"}</span>

      <span className="pointer-events-auto flex items-center gap-2 rounded-full bg-card/45 px-3 py-1 backdrop-blur-sm">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal/70" />
          <span className="relative inline-flex size-2 rounded-full bg-signal" />
        </span>
        <span className="font-mono">{online}</span>
        <span className="text-foreground/65">online</span>
      </span>

      <nav className="pointer-events-auto flex items-center gap-4">
        <a
          className="transition-opacity hover:opacity-70"
          href={SPOTIFY_PLAYLIST_URL}
          target="_blank"
          rel="noreferrer"
        >
          Spotify <span aria-hidden>↗</span>
        </a>
        <a
          className="transition-opacity hover:opacity-70"
          href={YT_MUSIC_PLAYLIST_URL}
          target="_blank"
          rel="noreferrer"
        >
          YT Music <span aria-hidden>↗</span>
        </a>
      </nav>
    </header>
  );
}
