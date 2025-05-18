"use client";

import { useState } from "react";
import Card from "./Card"; // update path if needed

export default function CardCarousel() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="relative flex justify-start items-center -space-x-[700px] perspective-[1800px] h-[685px]">
      {[...Array(6)].map((_, i) => (
        <Card
          key={i}
          index={i}
        />
      ))}
    </div>
  );
}
