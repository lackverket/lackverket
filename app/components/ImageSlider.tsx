"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "/assets/slide_door1.avif",
    "/assets/slide_door2.avif",
    "/assets/slide_door3.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:max-2xl:h-full overflow-hidden">

      {/* SLIDES WRAPPER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full shrink-0"  // <-- CRUCIAL FIX
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-[#222] px-4 py-2 rounded-lg shadow-2xl">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition 
              ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
