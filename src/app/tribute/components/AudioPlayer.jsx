"use client";
import { useState } from "react";
import ReactHowler from "react-howler";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="fixed top-4 right-4 z-50">
      <ReactHowler src="/audio/background.mp3" playing={playing} loop volume={0.5} />
      <button
        onClick={() => setPlaying(!playing)}
        className="bg-white/10 backdrop-blur p-2 rounded-full text-white hover:bg-white/20 transition"
      >
        {playing ? <Volume2 /> : <VolumeX />}
      </button>
    </div>
  );
}
