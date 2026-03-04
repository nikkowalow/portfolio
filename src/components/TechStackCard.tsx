import React from "react";
import LogoLoop, { LogoItem } from "./LogoLoop";

interface TechStackCardProps {
  title?: string;
  titleSide?: "left" | "right";
  direction?: "left" | "right" | "up" | "down";
}

const logos: LogoItem[] = [
  { src: "/icons/java.png", alt: "Java" },
  { src: "/icons/ts.png", alt: "TypeScript" },
  { src: "/icons/python.png", alt: "Python" },
  { src: "/icons/cpp.png", alt: "C++" },
  { src: "/icons/rust.png", alt: "Rust" },
  { src: "/icons/react.png", alt: "React" },
  { src: "/icons/nextjs.png", alt: "Next.js" },
  { src: "/icons/psql.png", alt: "PostgreSQL" },
];

export default function TechStackCard({
  title = "Tech Stack",
  titleSide = "left",
  direction = "up",
}: TechStackCardProps) {
  const isLeft = titleSide === "left";

  return (
    <div className="flex h-full w-full">
      {/* CONTENT */}
      <div
        className={`flex-1 min-h-0 flex items-center justify-center overflow-hidden ${
          isLeft ? "order-2" : "order-1"
        }`}
      >
        <LogoLoop
          logos={logos}
          speed={30}
          gap={32}
          logoHeight={100}
          scaleOnHover
          pauseOnHover
          fadeOut
          direction={direction}
          fadeOutColor="#060010"
        />
      </div>
    </div>
  );
}
