"use client";
import { useCallback, useRef } from "react";
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
  

export default function GithubCardSkew({ className, cardInfo }: { className?: string, cardInfo?: CardInfo }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) return;

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
  }, []);

  useMousePosition(containerRef as React.RefObject<HTMLElement>, update);

  return (
    <div
        ref={containerRef}
        className={cn(
            "relative flex max-w-80 transform-gpu flex-col gap-4 rounded-3xl border-[1] border-dashed border-black-500/90 bg-white/10 backdrop-blur-md p-10 text-black shadow-2xl shadow-black/30 transition-transform ease-linear will-change-transform overflow-hidden",
            className
          )}
        style={{
            transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
            transitionDuration: "30ms",
        }}
        onMouseEnter={() => {
            resetRef.current = setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.style.transitionDuration = "30ms";
            }
            }, 30);
            document.body.style.cursor = "url('/cursor-hover.png') 16 16, auto"
        }}
        onMouseLeave={() => {
            if (resetRef.current !== null) {
            clearTimeout(resetRef.current);
            }
            if (containerRef.current) {
            containerRef.current.style.transitionDuration = "200ms";
            containerRef.current.style.setProperty("--x", "0deg");
            containerRef.current.style.setProperty("--y", "0deg");
            document.body.style.cursor = "url('/cursor.png') 16 16, auto"
            }
        }}
    >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 opacity-100" />

        <p className="text-xl font-medium text-black z-10 relative">
            {cardInfo?.title || "Software Engineer Intern"}
        </p>
        <span className="mt-4 text-sm text-black z-10 relative">
            {cardInfo?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </span>
    </div>

    );
}
