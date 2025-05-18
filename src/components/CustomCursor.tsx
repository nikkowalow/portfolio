// components/CustomCursor.tsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll(".cursor-hover-target").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll(".cursor-hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[9999] pointer-events-none transition-transform duration-150 ease-in-out`}
      style={{
        width: isHovering ? "64px" : "32px",
        height: isHovering ? "64px" : "32px",
        transform: "translate(-50%, -50%)",
        backgroundImage: `url('/cursor.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
