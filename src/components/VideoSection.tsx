"use client"

import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

export default function VideoSection() {
  const [playMode, setPlayMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlayBack = () => {
    const video = videoRef.current;
    if (video) {
      if (playMode) {
        video.pause();
      } else {
        video.play();
      }
      setPlayMode(!playMode);
    }
  };

  return (
    <section className="w-full max-w-[87%] mx-auto my-[9%] relative h-[70vh] rounded-[16px] overflow-hidden flex items-center justify-center">

      <div className="w-full h-full absolute top-0 left-0">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls
          playsInline
          muted
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dwedz2laa/video/upload/v1749832329/vecteezy_3d-worldwide-shipping-with-delivery-van-plane-sky-train_10185689_1_belchd.mov"
            type="video/mp4"
          />
        </video>
      </div>


      <div
        className={`overlay absolute top-0 left-0 w-full bg-[#0A090DCC] flex items-center justify-center flex-col overflow-hidden gap-5 transition-all duration-300 ease-in-out ${playMode ? "h-0" : "h-full"
          }`}
      >
        <Button
          onClick={togglePlayBack}
          className="size-[86px] rounded-full bg-[#2F80ED] cursor-pointer"
        >
          <Play size={50} />
        </Button>
        <h1 className="text-[#16A7FC] font-bold text-2xl md:text-[31px] leading-[100%] font-oxanium">
          FASTEST DELIVERY
        </h1>
        <p className="text-lg md:text-2xl font-normal text-white font-raleway max-w-[570px] text-center">
          You can get your valuable item in the fastest period of time with
          safety. Because your emergency is our first priority.
        </p>
      </div>
    </section>
  );
}
