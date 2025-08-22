"use client";

import { useState, useEffect } from "react";
import Card from "./Card"; // update path if needed

const cubeImage = {
  src: "/icons/cube.jpg",
  alt: "Cube Exchange",
  width: 70,
  height: 200,
  rounded: true,
};

const nationImage = {
  src: "/icons/nation-logo.svg",
  alt: "Nation",
  width: 140,
  height: 200,
};

const solanaImage = {
  src: "/icons/solana.png",
  alt: "Solana",
  width: 280,
  height: 200,
};

const congressionalAppChallengeImage = {
  src: "/icons/cac.png",
  alt: "Congressional App Challenge",
  width: 280,
  height: 200,
};

const ohioStateImage = {
  src: "/icons/osu.png",
  alt: "Ohio State University",
  width: 100,
  height: 200,
};

const cardData = [
  {
    title: "Ohio State University",
    date: "Aug 2021 - May 2025",
    location: "Columbus, OH",
    description: [
      "Graduated with a B.S. in Computer Science and Engineering, specialization in Networking",
    ],
    image: ohioStateImage,
  },
  {
    title: "Congressional App Challenge",
    date: "June 2020",
    location: "Hackathon",
    company: "U.S. House of Representatives",
    description: [
      "• Placed 1st in the state of Illinois, awawrded by Rep. Brad Schneider.",
      "• Created a skin cancer pre-diagnosis suite using Python, React, and SQL, training a machine learning model to classify benign vs. malignant lesions with 83% accuracy.",
    ],
    image: congressionalAppChallengeImage,
  },
  {
    title: "Solana Season Hackathon",
    date: "June 2021",
    location: "Hackathon",
    company: "Solana Foundation",
    description: [
      "• Received 3rd place in the NFT track. Awarded $5,000 by the Solana Foundation.",
      "• Built a decentralized ticketing and event hosting platform on Solana using Rust, React, and smart contracts.",
      "• Designed to cut inflated secondary market prices, eliminate fraudulent tickets, and reduce transaction fees by leveraging blockchain verification.",
    ],
    image: solanaImage,
  },
  {
    title: "NATION",
    date: "Jun 2023 - Aug 2023",
    location: "Chicago, IL",
    company: "NATION",
    description: [
      "• Developed the mobile front-end using React Native and Python for the backend, and built portions of the web app using React and TypeScript.",
      "• Implemented Least Significant Bit (LSB) steganography for secure, hidden data transmission within media files, reducing the risk of media leaks.",
      "• Built a feature-rich admin dashboard that supports KYC review, bank/investment verification, push notification management, and user access control.",
      "• Maintained strong Git practices, including pull requests, branching strategy, and resolving merge conflicts.",
    ],
    image: nationImage,
  },
  {
    title: "Cube exchange",
    date: "May 2024 - Aug 2024",
    location: "Chicago, IL",
    company: "Cube Exchange",
    description: [
      "• Enhanced the backend of a high-performance trading platform (Rust, PostgreSQL) by implementing an atomic all-or-none order matching and execution feature, reducing failed multi-asset executions by ~30% and preventing partial fills.",
      "• Implemented an automated portfolio rebalancing system that regularly adjusts user portfolios to align with target allocations, improving performance consistency and risk control.",
      "• Engineered a historical price aggregation service to consolidate market data across time intervals and asset pairs, enabling accurate tracking, visualization, and analytics.",
      "• Designed secure RESTful API endpoints for internal and external clients to access price data, trade metrics, and rebalancing information.",
      "• Created a robust admin dashboard used by internal teams to monitor health, manage aggregate asset market status, and perform admin operations.",
    ],
    image: cubeImage,
  },
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
          date={card.date}
          location={card.location}
          company={card.company}
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
