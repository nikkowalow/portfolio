"use client";

import { useEffect, useRef } from "react";

export default function Card({
  index,
  isExpanded,
  onExpand,
  onCollapse,
}: {
  index: number;
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
      className="top-1/2 group absolute w-[500px] h-[600px] shrink-0 transform-gpu ease-in-out transition-transform duration-500"
      style={{
        left: isExpanded ? "50%" : `${index * 100}px`,
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
          <h3 className="text-lg font-bold mb-2 text-black">Card Title</h3>
          <p className="text-sm text-gray-700">Short description here.</p>
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

        {/* RIGHT */}
        {/* <div
          className="absolute h-full"
          style={{
            width: `${cardThickness}px`,
            right: `-${cardThickness / 2}px`,
            transform: `rotateY(90deg) translateZ(${150}px)`,
            background: "rgba(0,0,0,0.0)",
          }}
        /> */}

        {/* LEFT */}
        {/* <div
          className="fixed h-full"
          style={{
            width: `${cardThickness}px`,
            left: `-${cardThickness / 2}px`,
            transform: `rotateY(-90deg) translateZ(${150}px)`,
            background: "rgba(0,0,0,0.0)",
          }}
        /> */}

        {/* TOP */}
        {/* <div
          className="absolute w-full"
          style={{
            height: `${cardThickness}px`,
            top: `-${cardThickness / 2}px`,
            transform: `rotateX(90deg) translateZ(${200}px)`,
            background: "rgba(255,255,255,0.0)",
          }}
        /> */}

        {/* BOTTOM */}
        <div
          className="absolute w-full blur-lg"
          style={{
            height: `${cardThickness}px`,
            bottom: `-${cardThickness / 2}px`,
            transform: `rotateX(-90deg) translateZ(${200}px)`,
            background: "rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
