"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  rounded?: boolean;
};

export default function Card({
  index,
  title,
  description,
  image,
  isExpanded,
  onExpand,
  onCollapse,
  initialLoad,
}: {
  index: number;
  title: string;
  description: string;
  image: ImageProps;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  initialLoad: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const baseTransform = isExpanded
    ? `translateX(0) translateY(-50%) rotateY(0deg) scale(1.15)`
    : `translateX(${index * 4}vw) translateY(-50%) rotateY(30deg)`;

  const cardThickness = 20; // depth of the card in px

  useEffect(() => {
    if (!isExpanded && ref.current) {
      ref.current.style.transform = `translateX(${index * 4}vw) translateY(-50%) rotateY(30deg)`;
      ref.current.style.zIndex = "0";
    }
  }, [isExpanded, index]);
  const fallInTransform = `translateY(-200%) rotateX(10deg) scale(0.8)`;
  const cardStyle = initialLoad ? baseTransform : fallInTransform;
  const fallInTransition = !initialLoad
    ? {
        transition: `transform 1s ease-out, opacity 0s ease-out`,
        transitionDelay: `${index * 0.2}s`,
      }
    : {};
  return (
    <div
      ref={ref}
      onClick={() => (isExpanded ? onCollapse() : onExpand())}
      className=" top-1/2 group absolute shrink-0 transform-gpu ease-in-out transition-transform duration-300"
      style={{
        width: "clamp(180px, 20vw, 600px)",
        height: "clamp(300px, 50vh, 600px)",
        transform: cardStyle,
        opacity: 1,
        zIndex: isExpanded ? 50 : undefined,
        cursor: "pointer",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        ...fallInTransition,
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          const card = e.currentTarget as HTMLDivElement;
          card.style.transform += " scale(1.12)";
        }
        document.body.style.cursor = "url('/cursor-hover.png'), auto";
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          const card = e.currentTarget as HTMLDivElement;
          card.style.transform = `translateX(${index * 4}vw) translateY(-50%) rotateY(30deg)`;
          card.style.zIndex = "0";
        }
        document.body.style.cursor = "url('/cursor.png'), auto";
      }}
    >
      <div
        className=" relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className=" shadow-2xl absolute w-full h-full bg-gradient-to-br from-white/10 to-white/10 border border-black/20 rounded-2xl p-4"
          style={{ transform: `translateZ(${cardThickness / 2}px)` }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`max-w-[250px] object-contain transition-transform hover:scale-110 ${image.rounded ? "rounded-xl" : ""} `}
            unoptimized
            priority
          />
          <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>

        {/* Back layering */}
        <div
          className=" absolute w-full h-full border border-black/20 rounded-2xl backdrop-blur-sm"
          style={{ transform: `rotateY(180deg) translateZ(10px)` }}
        />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`back-layer-${i}`}
            className=" absolute w-full h-full border border-white/70 rounded-2xl"
            style={{
              transform: `translateZ(${-10 + i * 1}px)`,
            }}
          />
        ))}
        <div
          className="absolute w-full blur-xl"
          style={{
            height: `${cardThickness}px`,
            bottom: `100px`,
            transform: `rotateX(-90deg) translateZ(200px)`,
            background: "rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
