"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TRACKS, YOUTUBE_PLAYLIST_ID, shuffled, type Track } from "@/lib/mazdoor-tracks";

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  nextVideo: () => void;
  previousVideo: () => void;
  loadVideoById: (id: string) => void;
  getVideoData: () => { video_id?: string; author?: string; title?: string };
  getCurrentTime: () => number;
  getDuration: () => number;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (el: HTMLElement, options: Record<string, unknown>) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });
  return apiPromise;
}

export function useYouTubeAudio() {
  const [queue, setQueue] = useState<Track[]>(TRACKS);
  const [index, setIndex] = useState(0);
  const [activeTrack, setActiveTrack] = useState<Track | undefined>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(100);
  const [isMuted, setIsMuted] = useState(false);

  const playerRef = useRef<YTPlayer | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const queueRef = useRef<Track[]>(TRACKS);
  const indexRef = useRef(0);

  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    setQueue(shuffled(TRACKS));
  }, []);

  const syncVideoData = useCallback((player: YTPlayer) => {
    try {
      const data = player.getVideoData();
      if (data && data.video_id) {
        setActiveTrack({
          id: data.video_id,
          title: data.title || "Mazdoor Chowk Melodies",
          artist: data.author || "Retro Hindi Classics",
        });
      }
    } catch {
      /* player data loading */
    }
  }, []);

  const goTo = useCallback((target: number) => {
    const list = queueRef.current;
    const wrapped = (target + list.length) % list.length;
    setIndex(wrapped);
    setCurrent(0);
    const track = list[wrapped];
    if (playerRef.current && track) {
      playerRef.current.loadVideoById(track.id);
      setActiveTrack(track);
      setIsPlaying(true);
    }
  }, []);

  const next = useCallback(() => {
    if (playerRef.current?.nextVideo) {
      playerRef.current.nextVideo();
    } else {
      goTo(indexRef.current + 1);
    }
  }, [goTo]);

  const previous = useCallback(() => {
    if (playerRef.current?.previousVideo) {
      playerRef.current.previousVideo();
    } else {
      goTo(indexRef.current - 1);
    }
  }, [goTo]);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const setVolume = useCallback((value: number) => {
    const player = playerRef.current;
    if (!player) return;
    player.setVolume(value);
    setVolumeState(value);
    if (value > 0 && isMuted) {
      player.unMute();
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }, []);

  const start = useCallback(async () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      setIsPlaying(true);
      return;
    }
    await loadYouTubeApi();
    const host = hostRef.current;
    if (!host || !window.YT?.Player) return;

    playerRef.current = new window.YT.Player(host, {
      playerVars: {
        listType: "playlist",
        list: YOUTUBE_PLAYLIST_ID,
        controls: 0,
        playsinline: 1,
        rel: 0,
        disablekb: 1,
      },
      events: {
        onReady: (event: { target: YTPlayer }) => {
          event.target.setVolume(volume);
          if (isMuted) event.target.mute();
          event.target.playVideo();
          setIsPlaying(true);
          syncVideoData(event.target);
        },
        onStateChange: (event: { target: YTPlayer; data: number }) => {
          if (event.data === 1) {
            setIsPlaying(true);
            syncVideoData(event.target);
          }
          if (event.data === 2) {
            setIsPlaying(false);
          }
          if (event.data === 0) {
            syncVideoData(event.target);
          }
        },
      },
    });
  }, [volume, isMuted, syncVideoData]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const player = playerRef.current;
      if (!player) return;
      try {
        setCurrent(player.getCurrentTime() ?? 0);
        setDuration(player.getDuration() ?? 0);
        syncVideoData(player);
      } catch {
        /* player not ready yet */
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [syncVideoData]);

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return {
    hostRef,
    track: activeTrack || queue[index],
    isPlaying,
    current,
    duration,
    volume,
    isMuted,
    start,
    toggle,
    next,
    previous,
    setVolume,
    toggleMute,
  };
}
