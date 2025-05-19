"use client";
// import Link from "next/link";
// import Image from "next/image";
import { useEffect } from "react";
// import GithubCardSkew from "@/components/animata/card/github-card-skew";
// import LogoCircle from "@/components/LogoCircle";
import "../styles/fonts.css";
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
        <div className="w-[100vh] h-full pointer-events-auto">
          <Badge />
        </div>
      </div>
      {/* <div className="flex flex-col items-start justify-start max-w-3xl flex-shrink-0">
          <div className="mb-8">
            <h1
              style={{
                fontFamily: "Blur, sans-serif",
                fontSize: "clamp(2rem, 6vw, 4.5rem)",
                color: "black",
              }}
            >
              Nikko Kowalow
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Software engineer. Builder. Visionary. Turning bold ideas into
              scalable products.
            </p>
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href="/Nikko_Kowalow_Resume.pdf"
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

              <div className="flex gap-10 items-center mt-2">
                <a
                  href="https://github.com/nikkowalow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/github.png"
                    alt="GitHub"
                    className="h-12 w-auto hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikko-kowalow-2627b01bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    className="h-12 w-auto hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://x.com/nikkowalow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/X.png"
                    alt="X"
                    className="h-12 w-auto hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}

      {/* <LogoCircle /> */}
      {/* Right Section: 3D Skewed Cards */}
      <div className="relative w-full h-screen flex items-center justify-center z-0">
        <CardCarousel />
      </div>
    </main>
  );
}
