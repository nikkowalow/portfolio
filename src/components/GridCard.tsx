import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface GridItem {
  title?: React.ReactNode;
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
    hoverSrc?: string;
    fill?: boolean;
    rounded?: boolean;
  };
  backgroundColor?: string;
}

interface GridCardProps {
  rows?: number;
  cols?: number;
  title?: React.ReactNode;
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
        <div className="bg-black -mx-4 -mt-4 px-8 pt-5 overflow-hidden border-b border-gray-800">
          <p
            ref={titleRef}
            className="text-white text-bold text-[40px] uppercase whitespace-nowrap"
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
              className={`cursor-target grayscale hover:grayscale-0 transition-[filter] duration-800 ease-out flex flex-col items-center justify-center gap-1 overflow-hidden ${getRadiusClass(i)}`}
              style={{
                backgroundColor:
                  item?.backgroundColor ?? "rgba(168, 85, 247, 0.1)",
              }}
            >
              {item?.image && (
                <div className="relative flex-1 w-full h-full group">
                  {/* Default image */}
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className={`
        ${item.image.fill ? "object-cover" : "object-contain"}
        ${item.image.rounded ? "rounded-full" : ""}
        transition-opacity duration-300
        ${item.image.hoverSrc ? "group-hover:opacity-0" : ""}
      `}
                  />

                  {/* Hover image */}
                  {item.image.hoverSrc && (
                    <Image
                      src={item.image.hoverSrc}
                      alt={item.image.alt}
                      fill
                      className={`
          absolute inset-0
          ${item.image.fill ? "object-cover" : "object-contain"}
          ${item.image.rounded ? "rounded-full" : ""}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 bg-black
        `}
                    />
                  )}
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
