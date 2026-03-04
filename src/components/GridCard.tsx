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

  const getRadiusClass = (i: number) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    let radius = "";
    // if (row === 0 && col === 0) radius += " rounded-tl-lg";
    // if (row === 0 && col === cols - 1) radius += " rounded-tr-lg";
    if (row === rows - 1 && col === 0) radius += " rounded-bl-lg";
    if (row === rows - 1 && col === cols - 1) radius += " rounded-br-lg";
    return radius;
  };

  return (
    <div className={`flex flex-col h-full w-full ${className}`}>
      {title && (
        <div className="bg-gray-800 -mx-4 -mt-4 px-8 pt-5 overflow-hidden">
          <p
            ref={titleRef}
            className="text-black text-bold text-[40px] uppercase whitespace-nowrap"
          >
            {title}
          </p>
        </div>
      )}

      <div
        className="flex-1 grid min-h-0"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: `${gap * 1}px`,
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const item = items[i];
          const label = item?.title ?? item?.name ?? item?.school ?? null;

          return (
            <div
              key={i}
              className={`cursor-target bg-purple-500/10 flex flex-col items-center justify-center gap-1 p-2 overflow-hidden ${getRadiusClass(i)}`}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridCard;
