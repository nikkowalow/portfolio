"use client";

import "../styles/fonts.css";
import "@/app/globals.css";
import Bento from "@/components/Bento";
import {
  profile,
  education,
  workExperience,
  projects,
  skills,
} from "@/data/data";

const languages = skills[0].items.map((item) => ({ title: item }));
const tools = skills
  .slice(1)
  .flatMap((s) => s.items.map((item) => ({ title: item })));

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#060010] overflow-hidden">
      <Bento
        textAutoHide={true}
        enableStars={false}
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={800}
        particleCount={0}
        glowColor="132, 0, 255"
        disableAnimations={false}
        data={[profile, education, workExperience, projects, languages, tools]}
      />
    </main>
  );
}
