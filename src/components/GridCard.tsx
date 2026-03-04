import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface GridItem {
  title?: string;
  name?: string;
  school?: string;
  role?: string;
  date?: string;
  award?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    rounded?: boolean;
  };
}

interface GridCardProps {
  rows?: number;
  cols?: number;
  title?: string;
  gap?: number;
  items?: GridItem[];
  className?: string;
}

const GridCard: React.FC<GridCardProps> = ({
  rows: rowsProp,
  cols: colsProp,
  title,
  gap = 2,
  items = [],
  className = "",
}) => {
  const n = items.length || 1;
  const cols = colsProp ?? Math.ceil(Math.sqrt(n));
  const rows = rowsProp ?? Math.ceil(n / cols);
  const total = rows * cols;
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !title) return;

    const el = titleRef.current;

    const calculate = () => {
      el.style.letterSpacing = "0px";
      const parentWidth = el.parentElement?.clientWidth ?? 0;
      const textWidth = el.scrollWidth;
      const charCount = title.length;

      if (charCount > 1 && parentWidth > textWidth) {
        el.style.letterSpacing = `${(parentWidth - textWidth) / (charCount - 1)}px`;
      } else {
        el.style.letterSpacing = "0px";
      }
    };

    calculate();

    const observer = new ResizeObserver(calculate);
    if (el.parentElement) observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [title]);

  const getRadiusClass = (i: number) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    let radius = "";
    if (row === 0 && col === 0) radius += " rounded-tl-lg";
    if (row === 0 && col === cols - 1) radius += " rounded-tr-lg";
    if (row === rows - 1 && col === 0) radius += " rounded-bl-lg";
    if (row === rows - 1 && col === cols - 1) radius += " rounded-br-lg";
    return radius;
  };

  return (
    <div className={`flex flex-col h-full w-full ${className}`}>
      {title && (
        <p
          ref={titleRef}
          className="text-white/80 text-3xl uppercase mb-3 whitespace-nowrap"
        >
          {title}
        </p>
      )}

      <div
        className="flex-1 grid min-h-0"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: `${gap * 4}px`,
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const item = items[i];
          const label = item?.title ?? item?.name ?? item?.school ?? null;

          return (
            <div
              key={i}
              className={`bg-purple-500/10 flex flex-col items-center justify-center gap-1 p-2 overflow-hidden ${getRadiusClass(i)}`}
            >
              {item?.image && (
                <div className="relative flex-1 w-full min-h-0">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className={`object-contain ${item.image.rounded ? "rounded-full" : ""}`}
                  />
                </div>
              )}
              {label && (
                <span className="text-white/70 text-xs text-center leading-tight shrink-0">
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridCard;
