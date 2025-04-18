"use client";

import React, { useEffect, useRef, useState } from "react";
import BG from "../../assets/bg.jpg";
import A from "../../assets/1.jpg";
import B from "../../assets/2.jpg";
import C from "../../assets/3.jpg";
import D from "../../assets/4.jpg";
import E from "../../assets/5.jpg";
import F from "../../assets/6.jpg";
import G from "../../assets/7.jpg";
import I from "../../assets/8.jpg";
import { motion } from "framer-motion";
export default function Products() {
  const images = [A, B, C, D, E, F, G, I, BG];

  const [visibleImages, setVisibleImages] = useState([]);
  const [lastSpawnTime, setLastSpawnTime] = useState(0);

  const handleMouseMoves = (e) => {
    const now = Date.now();

    // Throttle image spawn rate (limit to 1 image per 150ms)
    if (now - lastSpawnTime < 200) return;
    setLastSpawnTime(now);

    // Randomize width and height
    const randomWidth = Math.floor(Math.random() * 100) + 100; // 100px to 200px
    const randomHeight = Math.floor(Math.random() * 100) + 150; // 150px to 250px

    const offsetX = Math.random() * 80 - 100;
    const offsetY = Math.random() * 80 - 100;

    // Randomize rotation to create a crooked effect
    const randomRotation = Math.floor(Math.random() * 21) - 10; // Random rotation between -10deg and 10deg

    const newImage = {
      id: now,
      x: e.clientX + offsetX,
      y: e.clientY + offsetY,
      url: images[Math.floor(Math.random() * images.length)].src,
      width: randomWidth,
      height: randomHeight,
      rotation: randomRotation, // Apply random tilt
    };

    setTimeout(() => {
      setVisibleImages((prev) => [...prev, newImage]);

      // Remove the image after 3 seconds
      setTimeout(() => {
        setVisibleImages((prev) =>
          prev.filter((img) => img.id !== newImage.id)
        );
      }, 3000);
    }, 100);
  };

  return (
    <div
      className="relative w-full h-screen bg-gray-900 overflow-hidden"
      onMouseMove={handleMouseMoves}
    >
      {visibleImages.map((img) => (
        <div
          key={img.id}
          className="absolute transition-all duration-700 ease-out opacity-0 scale-75 animate-fadeIn"
          style={{
            left: img.x,
            top: img.y,
            width: `${img.width}px`,
            height: `${img.height}px`,
            transform: `rotate(${img.rotation}deg)`, // Apply random rotation for the crooked effect
          }}
        >
          <img
            src={img.url}
            alt="random"
            className="rounded-lg w-full h-full animate-jump rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      ))}
      <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
        <SpotlightButton />
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes jump {
          0%,
          100% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(-2px) scale(1); /* Reduced to 5px */
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-jump {
          animation: jump 0.5s ease-in-out 0.5s 3; /* 0.5s delay to start after fadeIn, repeat 3 times */
        }
      `}</style>
    </div>
  );
}

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Hover me
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};
