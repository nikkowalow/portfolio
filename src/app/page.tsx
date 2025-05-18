"use client";
import Link from "next/link";
import { useEffect } from "react";
import GithubCardSkew from "@/components/animata/card/github-card-skew";
import LogoCircle from "@/components/LogoCircle";

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
    <main className="relative min-h-screen bg-white text-black px-6 py-24 overflow-hidden">
      {/* Color Blobs */}
      <div className="absolute top-20 right-0 w-[1500px] h-[500px] bg-yellow-200 opacity-50 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-40 w-[1600px] h-[600px] bg-green-200 opacity-50 rounded-full blur-3xl z-0" />
      <div className="absolute top-0 left-0 w-[1500px] h-[600px] bg-pink-300 opacity-50 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-40 w-[1500px] h-[500px] bg-blue-200 opacity-50 rounded-full blur-3xl z-0" />

      <div className="relative z-[10] grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
      {/* Left: Work Experience */}
        {/* <section>
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="flex flex-col gap-6">
            <GithubCardSkew cardInfo={{
              title: "Backend Software Engineer Intern",
              date: "Cube Exchange | Summer 2024",
              description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "Full-Stack Software Engineer Intern",
              date: "NATION | Summer 2023",
              description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "Founder",
              date: "Halo | 2024 - Present",
              description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }} />
          </div>
        </section> */}
        <div className="relative flex justify-center -space-x-[720px] perspective-[1800px]">
        {[...Array(6)].map((_, i) => (
    <div
      key={i}
      className="group relative w-200 h-180 shrink-0 bg-white/10 backdrop-blur-md border border-dashed border-black/30 rounded-2xl shadow-lg transform-gpu transition-transform duration-500 hover:rotate-y-0"
      style={{
        transform: "rotateY(50deg)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "rotateY(0deg)";
        (e.currentTarget as HTMLDivElement).style.zIndex = "10";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "rotateY(50deg)";
        (e.currentTarget as HTMLDivElement).style.zIndex = "1";
      }}
    >
      <div className="p-4 text-black">
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-sm text-gray-700">Short description here.</p>
      </div>
    </div>
  ))}
</div>
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
            <LogoCircle/>
          
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-8">Projects & Awards</h2>
          <div className="flex flex-col gap-6">
            <GithubCardSkew cardInfo={{
              title: "3rd Place Solana Season Hackathon 2021",
              date: "Bubl | June 2021",
              description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "1st Place Congressional App Challenge 2020",
              date: "skinID | May 2020",
              description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }} />
            <GithubCardSkew cardInfo={{
              title: "AYSO Region 163, Player of the Year",
              date: "2015/16 Season",
              description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }} />
          </div>
        </section>
      </div>
    </main>
  );
}