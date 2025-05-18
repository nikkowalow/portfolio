"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function Card({
    index,
    title,
    description,
    image,
    isExpanded,
    onExpand,
    onCollapse,
  }: {
    index: number;
    title: string;
    description: string;
    image: ImageProps;
    isExpanded: boolean;
    onExpand: () => void;
    onCollapse: () => void;
  }) {
  const ref = useRef<HTMLDivElement>(null);

  const baseTransform = isExpanded
    ? "rotateY(0deg) scale(1.15) translateX(0) translateY(-50%)"
    : "rotateY(30deg) translateY(-50%)";

  const cardThickness = 20; // depth of the card in px

  useEffect(() => {
    if (!isExpanded && ref.current) {
      ref.current.style.transform = "rotateY(30deg) translateY(-50%)";
      ref.current.style.zIndex = "0";
    }
  }, [isExpanded]);

  return (
    <div
      ref={ref}
      onClick={() => (isExpanded ? onCollapse() : onExpand())}
      className="top-1/2 group absolute w-[600px] h-[600px] shrink-0 transform-gpu ease-in-out transition-transform duration-500"
      style={{
        left: `${index * 100}px`,        
        transform: baseTransform,
        zIndex: isExpanded ? "50" : undefined,
        cursor: "pointer",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          const card = e.currentTarget as HTMLDivElement;
          card.style.transform += " scale(1.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          const card = e.currentTarget as HTMLDivElement;
          card.style.transform = "rotateY(30deg) translateY(-50%)";
          card.style.zIndex = "0";
        }
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          className="shadow-xl absolute w-full h-full bg-gradient-to-br from-white/10 to-white/10 border border-black/20 rounded-2xl backdrop-blur-md p-4"
          style={{
            transform: `translateZ(${cardThickness / 2}px)`,
          }}
        >
          <Image
            src={image.src}
            alt={"Solana"}
            width={image.width}
            height={image.height}
            className="transition-transform hover:scale-125"
            unoptimized
            priority
          />

          <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>

        <div
            className="absolute w-full h-full border border-black/20 rounded-2xl backdrop-blur-xs"
            style={{
            transform: `rotateY(180deg) translateZ(10px)`,
            }}
        />
        {/* BACK */}
        {Array.from({ length: 22 }).map((_, i) => (
        <div
            key={`back-layer-${i}`}
            className="absolute w-full h-full border border-white/30 rounded-2xl"
            style={{
            transform: `rotateY(180deg) translateZ(${10 - i}px)`,
            }}
        />
        ))}

        <div
          className="absolute w-full blur-xl"
          style={{
            height: `${cardThickness}px`,
            bottom: `${100}px`,
            transform: `rotateX(-90deg) translateZ(${200}px)`,
            background: "rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
