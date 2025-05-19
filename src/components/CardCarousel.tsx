"use client";

import { useState, useEffect } from "react";
import Card from "./Card"; // update path if needed

const cubeImage = {
    src: "icons/cube.png",
    alt: "Cube Exchange",
    width: 200,
    height: 200,
}

const nationImage = {
    src: "icons/nation-logo.svg",
    alt: "Nation",
    width: 140,
    height: 200,
}

const solanaImage = {
    src: "icons/solana.png",
    alt: "Solana",
    width: 280,
    height: 200,
}

const congressionalAppChallengeImage = {
    src: "icons/cac.png",
    alt: "Congressional App Challenge",
    width: 280,
    height: 200,
}

const ohioStateImage = {
    src: "icons/osu.png",
    alt: "Ohio State University",
    width: 100,
    height: 200,
}


const haloImage = {
    src: "icons/halo.png",
    alt: "Halo",
    width: 120,
    height: 200,
}

const cardData = [
  { title: "Card One", description: "This is the first card.", image: cubeImage },
  { title: "Card Two", description: "This is the second card.", image: nationImage },
  { title: "Card Three", description: "This is the third card.", image: solanaImage },
  { title: "Card Four", description: "This is the fourth card.", image: congressionalAppChallengeImage },
  { title: "Card Five", description: "This is the fifth card.", image: ohioStateImage },
  { title: "Card Six", description: "This is the sixth card.", image: haloImage },
];

export default function CardCarousel() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    const [initialLoad, setInitialLoad] = useState(false);
  
    useEffect(() => {
      // Trigger animation after a slight delay to simulate "fall"
      const timeout = setTimeout(() => {
        setInitialLoad(true);
      }, 100); // small delay to ensure clean mount
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div className="relative flex justify-start items-center -space-x-[300px] perspective-[900px] h-[685px]">
        {cardData.map((card, i) => (
          <Card
            key={i}
            index={i}
            title={card.title}
            image={card.image}
            description={card.description}
            isExpanded={expandedCard === i}
            onExpand={() => setExpandedCard(i)}
            onCollapse={() => setExpandedCard(null)}
            initialLoad={initialLoad}
          />
        ))}
      </div>
    );
  }