"use client";
import Link from "next/link";
import { useEffect } from "react";
// import GithubCardSkew from "@/components/animata/card/github-card-skew";
import LogoCircle from "@/components/LogoCircle";
import '../styles/fonts.css';
import CardCarousel from "@/components/CardCarousel";
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
    <main className="min-h-screen w-full px-4 md:px-12 lg:px-32 py-12 bg-white">

      {/* Gradient Background Blobs */}
      <div className="absolute top-20 right-0 w-[1500px] h-[500px] bg-yellow-200 opacity-60 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-40 w-[1600px] h-[600px] bg-green-200 opacity-60 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 left-0 w-[1500px] h-[600px] bg-pink-300 opacity-60 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-40 w-[1500px] h-[500px] bg-blue-200 opacity-60 rounded-full blur-3xl z-0" />

      <div className="relative z-10 flex flex-row gap-8 w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-20">
      {/* Left Section: Name + Logo Circle */}
      <div className="flex flex-col items-start justify-start max-w-3xl flex-shrink-0">
        <div className="mb-8">
        <h1
            style={{
                fontFamily: 'Blur, sans-serif',
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                color: 'black',
            }}
        >
            Nikko Kowalow
        </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Software engineer. Builder. Visionary. Turning bold ideas into scalable products.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="/resume.pdf"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                target="_blank"
              >
                View Resume
              </a>
              <Link
                href="/contact"
                className="text-black border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <LogoCircle />
        </div>

        {/* Right Section: 3D Skewed Cards */}
        <CardCarousel />
        </div>
    </main>
  );
}
