"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src="/reel.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      aria-label="LightVib red light therapy device — intimate wellness device with red light LED array"
    />
  );
}
