"use client";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { MusicPlayer } from "./MusicPlayer";
import { EnterOverlay } from "./EnterOverlay";
import { useYouTubeAudio } from "@/hooks/useYouTubeAudio";

export function AmbientLayer() {
  const [entered, setEntered] = useState(false);
  const audio = useYouTubeAudio();

  return (
    <>
      {entered ? (
        <>
          <TopBar />
          <MusicPlayer
            track={audio.track}
            isPlaying={audio.isPlaying}
            current={audio.current}
            duration={audio.duration}
            onToggle={audio.toggle}
            onNext={audio.next}
            onPrevious={audio.previous}
            
          />
        </>
      ) : (
        <EnterOverlay
          onEnter={() => {
            setEntered(true);
            void audio.start();
          }}
        />
      )}

      {/* Hidden YouTube player — audio only. */}
      <div className="pointer-events-none absolute -left-[9999px] size-px overflow-hidden opacity-0">
        <div ref={audio.hostRef} />
      </div>
    </>
  );
}
