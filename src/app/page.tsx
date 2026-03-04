"use client";

import "../styles/fonts.css";
import "@/app/globals.css";
import Bento from "@/components/Bento";
import BentoCard from "@/components/BentoCard";
import TargetCursor from "@/components/TargetCursor";
import {
  profile,
  education,
  workExperience,
  projects,
  skills,
  links,
} from "@/data/data";

const languages = skills[0].items.map((item) => ({ title: item }));
const tools = skills
  .slice(1)
  .flatMap((s) => s.items.map((item) => ({ title: item })));

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#0f0f0f] overflow-hidden">
      <TargetCursor
        spinDuration={5}
        hideDefaultCursor
        parallaxOn
        hoverDuration={1}
      />
      <Bento
        textAutoHide={true}
        enableStars
        enableSpotlight={true}
        enableBorderGlow={true}
        // enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={800}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
        data={[
          profile,
          education,
          workExperience,
          projects,
          languages,
          tools,
          links,
        ]}
      />
    </main>
  );
}
