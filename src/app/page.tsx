"use client";
// import Link from "next/link";
// import Image from "next/image";
import { useEffect } from "react";
// import GithubCardSkew from "@/components/animata/card/github-card-skew";
// import LogoCircle from "@/components/LogoCircle";
import "../styles/fonts.css";
import "@/app/globals.css";
import CardCarousel from "@/components/CardCarousel";
import Badge from "@/components/Badge";
export default function Home() {
  type TiltCardElement = HTMLElement & {
    _boundMove?: (e: MouseEvent) => void;
    _boundReset?: () => void;
  };

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".tilt-card");

    const handleMove = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const deltaX = (x - midX) / midX;
      const deltaY = (y - midY) / midY;
      card.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
    };

    const reset = (card: HTMLElement) => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    cards.forEach((card) => {
      const tiltCard = card as TiltCardElement;
      const boundMove = (e: MouseEvent) => handleMove(e, tiltCard);
      const boundReset = () => reset(tiltCard);
      tiltCard.addEventListener("mousemove", boundMove);
      tiltCard.addEventListener("mouseleave", boundReset);
      tiltCard._boundMove = boundMove;
      tiltCard._boundReset = boundReset;
    });

    return () => {
      cards.forEach((card) => {
        const tiltCard = card as TiltCardElement;
        tiltCard.removeEventListener("mousemove", tiltCard._boundMove!);
        tiltCard.removeEventListener("mouseleave", tiltCard._boundReset!);
      });
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-white overflow-hidden relative">
      {/* Gradient Background Blobs */}

      <div className="absolute top-20 right-0 w-[1500px] h-[500px] bg-yellow-200 opacity-60 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-40 w-[1600px] h-[600px] bg-green-200 opacity-60 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 left-0 w-[1500px] h-[600px] bg-pink-300 opacity-60 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-40 w-[1500px] h-[500px] bg-blue-200 opacity-60 rounded-full blur-3xl z-0" />

      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-10">
        <div className="w-1/2 h-full pointer-events-none">
          <Badge />
        </div>
      </div>
      <div className="relative w-full h-screen flex items-center justify-center ">
        <CardCarousel />
      </div>

      {/* Floating Bottom Nav with Icons */}
      <div className="fixed bottom-9 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-around gap-8 px-6 py-3 bg-white/40 backdrop-blur-2xl rounded-full shadow-lg scale-115">
          <a
            href="https://github.com/nikkowalow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/icons/github.png" alt="GitHub" className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikko-kowalow-2627b01bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/nikkowalow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/icons/X.png" alt="X" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
