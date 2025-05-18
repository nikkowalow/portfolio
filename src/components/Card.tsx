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

  // Custom transform for expanded state
  const baseTransform = isExpanded
    ? "rotateY(0deg) scale(1.15) translateX(0) translateY(-50%)"
    : "rotateY(30deg) translateY(-50%)";

  useEffect(() => {
    if (!isExpanded && ref.current) {
      // reset transform when collapsing
      ref.current.style.transform = "rotateY(30deg) translateY(-50%)";
      ref.current.style.zIndex = "0";
    }
  }, [isExpanded]);

  return (
    <div
      ref={ref}
      onClick={() => (isExpanded ? onCollapse() : onExpand())}
      className="top-1/2 group absolute w-200 h-160 shrink-0 bg-white/10 backdrop-blur-md border border-dashed border-black/30 rounded-2xl shadow-lg transform-gpu ease-in-out transition-transform duration-500"
      style={{
        left: isExpanded ? "50%" : `${index * 100}px`,
        transform: baseTransform,
        zIndex: isExpanded ? "50" : undefined,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          const card = e.currentTarget as HTMLDivElement;
          card.style.transform += " scale(1.08)";
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
      <div className="p-4 text-black">
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-sm text-gray-700">Short description here.</p>
      </div>
    </div>
  );
}
