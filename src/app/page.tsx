"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import GithubCardSkew from "@/components/animata/card/github-card-skew";

export default function Home() {
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
      const boundMove = (e: MouseEvent) => handleMove(e, card);
      const boundReset = () => reset(card);

      card.addEventListener("mousemove", boundMove);
      card.addEventListener("mouseleave", boundReset);

      (card as any)._boundMove = boundMove;
      (card as any)._boundReset = boundReset;
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", (card as any)._boundMove);
        card.removeEventListener("mouseleave", (card as any)._boundReset);
      });
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black px-6 py-24 overflow-hidden">
      {/* Color Blobs */}
      <div className="absolute top-20 right-0 w-[1500px] h-[500px] bg-yellow-200 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-40 w-[1600px] h-[600px] bg-green-200 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 left-0 w-[1500px] h-[600px] bg-pink-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-40 w-[1500px] h-[500px] bg-blue-200 opacity-30 rounded-full blur-3xl z-0" />

      <div className="relative z-[10] grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
      {/* Left: Work Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="flex flex-col gap-6">
            <GithubCardSkew cardInfo={{
              title: "skinID: Congressional App Challenge",
              date: "2023",
              description: "A 3D card effect using React and CSS transforms.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "Solana Season Hackathon 2021",
              date: "2023",
              description: "A 3D card effect using React and CSS transforms.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "skinID",
              date: "2023",
              description: "A 3D card effect using React and CSS transforms.",
            }} />
          </div>
        </section>
        {/* Center: Name, Bio, Resume, Pic */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl mb-4 font-blur tracking-tight text-black">
            Nikko Kowalow
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Software engineer. Builder. Visionary. Turning bold ideas into scalable products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="/resume.pdf"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
              target="_blank"
            >
              View Resume
            </a>
            <Link
              href="/contact"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-8">Projects & Awards</h2>
          <div className="flex flex-col gap-6">
            <GithubCardSkew cardInfo={{
              title: "skinID: Congressional App Challenge",
              date: "2023",
              description: "A 3D card effect using React and CSS transforms.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "Solana Season Hackathon 2021",
              date: "2023",
              description: "A 3D card effect using React and CSS transforms.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "skinID",
              date: "2023",
              description: "A 3D card effect using React and CSS transforms.",
            }} />
          </div>
        </section>
      </div>
    </main>
  );
}