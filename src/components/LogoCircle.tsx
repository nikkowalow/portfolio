"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const logos = [
  { src: "/icons/nextjs.png", alt: "Next.js" },
  { src: "/icons/ts.png", alt: "TypeScript" },
  { src: "/icons/rust.png", alt: "Rust" },
  { src: "/icons/python.png", alt: "Python" },
  { src: "/icons/cpp.png", alt: "C++" },
  { src: "/icons/java.png", alt: "Java" },
  { src: "/icons/psql.png", alt: "PostgreSQL" },
  { src: "/icons/react.png", alt: "React" },
  { src: "/icons/solana3d.png", alt: "Solana" },
  { src: "/icons/linux.png", alt: "Linux" },
  { src: "/icons/tensorflow.png", alt: "TensorFlow" },
  { src: "/icons/sql.png", alt: "SQL" },
];

const LOGO_SIZE = 60;
const BOX_SIZE = 360;
const PADDING = 12;

type PositionedLogo = {
  x: number;
  y: number;
  logo: typeof logos[number];
};

function generateCluster(): PositionedLogo[] {
  const placed: PositionedLogo[] = [];

  for (const logo of logos) {
    let x: number, y: number, tries = 0;
    const maxTries = 500;

    do {
      x = Math.random() * (BOX_SIZE - LOGO_SIZE - PADDING * 2);
      y = Math.random() * (BOX_SIZE - LOGO_SIZE - PADDING * 2);
      const overlaps = placed.some(
        (p) => Math.hypot(p.x - x, p.y - y) < LOGO_SIZE + PADDING
      );
      if (!overlaps) break;
      tries++;
    } while (tries < maxTries);

    placed.push({ x, y, logo });
  }

  return placed;
}

export default function LogoCluster() {
  const [cluster, setCluster] = useState<PositionedLogo[]>([]);

  useEffect(() => {
    setCluster(generateCluster());
  }, []);

  return (
    <div className="relative w-[360px] h-[360px] mx-auto">
      {cluster.map(({ logo, x, y }, i) => (
        <div
          key={i}
          className="absolute group"
          style={{ top: y, left: x }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="transition-transform hover:scale-125"
            unoptimized
            priority
          />
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs px-2 py-1 bg-black text-white rounded opacity-0 group-hover:opacity-80 transition-opacity rounded-lg">
            {logo.alt}
          </div>
        </div>
      ))}
    </div>
  );
}
