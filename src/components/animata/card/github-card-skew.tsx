"use client";
import { useCallback, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const rotationFactor = distance / maxDistance;

  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}

type CardInfo = {
  title: string;
  date: string;
  description: string;
};

export default function GithubCardSkew({
  cardInfo,
}: {
  cardInfo?: CardInfo;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [expanded, setExpanded] = useState(false);

  const update = useCallback(
    ({ x, y }: { x: number; y: number }) => {
      if (!containerRef.current || expanded) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const { rotationX, rotationY } = calculateCardRotation({
        centerX: width / 2,
        centerY: height / 2,
        currentX: x,
        currentY: y,
        maxRotationX: 22,
        maxRotationY: 28,
      });

      containerRef.current.style.setProperty("--x", `${rotationX}deg`);
      containerRef.current.style.setProperty("--y", `${rotationY}deg`);
    },
    [expanded]
  );

  useMousePosition(containerRef as React.RefObject<HTMLElement>, update);

  const handleClick = () => setExpanded(!expanded);

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={cn(
        "relative flex flex-col gap-4 rounded-3xl border border-dashed border-black/60 bg-white/10 backdrop-blur-md p-10 text-black shadow-2xl transition-all duration-300 ease-in-out overflow-hidden",
        expanded &&
          "fixed top-0 left-0 right-0 bottom-0 z-[100] w-[90vw] h-[80vh] max-w-4xl m-auto overflow-y-auto justify-center items-center"
      )}
      style={{
        transform: expanded
          ? undefined
          : "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: expanded ? "500ms" : "30ms",
      }}
      onMouseEnter={() => {
        if (expanded) return;
        resetRef.current = setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transitionDuration = "30ms";
          }
        }, 30);
        document.body.style.cursor = "url('/cursor-hover.png') 16 16, auto";
      }}
      onMouseLeave={() => {
        if (expanded) return;
        if (resetRef.current !== null) {
          clearTimeout(resetRef.current);
        }
        if (containerRef.current) {
          containerRef.current.style.transitionDuration = "200ms";
          containerRef.current.style.setProperty("--x", "0deg");
          containerRef.current.style.setProperty("--y", "0deg");
        }
        document.body.style.cursor = "url('/cursor.png') 16 16, auto";
      }}
    >
      {/* Glossy overlays */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-white/10 opacity-70 mix-blend-soft-light z-0" />
      <div className="pointer-events-none absolute -top-1/2 left-0 w-full h-full rotate-12 bg-white/20 blur-2xl opacity-10 z-0" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 opacity-100 z-0" />

      {/* Card content */}
      <p className="text-2xl font-bold z-10 relative">{cardInfo?.title}</p>
      <p className="text-sm text-gray-600 z-10 relative">{cardInfo?.date}</p>
      <span className="text-sm text-black z-10 relative">
        {cardInfo?.description}
      </span>

      {expanded && (
        <div className="mt-6 text-sm text-gray-800 z-10 relative">
          <p>
            This project was a collaboration with engineers and designers to
            develop a high-impact internal tool. It includes features such as a
            secure API, dynamic dashboards, and real-time analytics. Built using
            React, Rust, and PostgreSQL.
          </p>
        </div>
      )}

      {expanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
          className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-black z-10"
        >
          ×
        </button>
      )}
    </div>
  );
}
