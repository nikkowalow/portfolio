import "./App.css";
import { useEffect, useState } from "react";
import { Card, CardHeader } from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import { BentoContent, type ContentItem } from "./components/BentoContent";
import {
  workExperience,
  projects,
  education,
  links,
  skills,
} from "./data/portfolio";
import TargetCursor from "./components/TargetCursor";
import { LogoLoop } from "./components/LogoLoop";
import Grainient from "./components/Grainient";

function useLogoHeight() {
  const getHeight = () => {
    const w = window.innerWidth;
    if (w < 640) return 32;
    if (w < 768) return 40;
    if (w < 1024) return 48;
    if (w < 1280) return 56;
    return 64;
  };
  const [logoHeight, setLogoHeight] = useState(getHeight);
  useEffect(() => {
    const handler = () => setLogoHeight(getHeight());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return logoHeight;
}

// ── Data → ContentItem mappers ────────────────────────────────
const workItems: ContentItem[] = workExperience.map((j) => ({
  label: j.title,
  sublabel: j.role,
  date: j.date,
  location: j.location,
  bullets: j.bullets,
  image: j.image,
  backgroundColor: j.backgroundColor,
}));

const projectItems: ContentItem[] = projects.map((p) => ({
  label: p.title,
  date: p.date,
  //   badge: p.badge,
  bullets: p.bullets,
  image: p.image,
  backgroundColor: p.backgroundColor,
  award: p.award,
}));

const educationItems: ContentItem[] = education.map((e) => ({
  label: e.school,
  sublabel: e.degree,
  detail: (e as any).spec,
  date: e.date,
  location: e.location,
  image: e.image,
  backgroundColor: e.backgroundColor,
}));

const linkItems: ContentItem[] = links.map((l) => ({
  label: (l as any).name,
  url: (l as any).url,
  image: (l as any).image,
  backgroundColor: "transparent",
  imagePadding: "0",
}));

const byCategory = Object.fromEntries(skills.map((s) => [s.category, s.items]));

const leftLogos = (byCategory["Languages"] ?? [])
  .filter((i) => i.image)
  .map((i) => ({ src: i.image!, alt: i.name }));

const rightLogos = [
  ...(byCategory["Frameworks"] ?? []),
  ...(byCategory["Tools & Infra"] ?? []),
]
  .filter((i) => i.image)
  .map((i) => ({ src: i.image!, alt: i.name }));

// ── Layout ────────────────────────────────────────────────────
function App() {
  const logoHeight = useLogoHeight();
  return (
    <main className="h-screen  flex gap-3 relative">
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Grainient
          color1="#3b0047"
          color2="#00052e"
          color3="#0d0d0d"
          timeSpeed={0.85}
          colorBalance={0.03}
          warpStrength={0.35}
          warpFrequency={12}
          warpSpeed={3.2}
          warpAmplitude={80}
          blendAngle={72}
          blendSoftness={0.61}
          rotationAmount={1000}
          noiseScale={1.65}
          grainAmount={0.08}
          grainScale={0.9}
          grainAnimated={false}
          contrast={1.35}
          gamma={1}
          saturation={1.05}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <TargetCursor
        spinDuration={5}
        hideDefaultCursor
        parallaxOn
        hoverDuration={1}
      />
      <div className="relative z-10 flex  flex-1 h-full min-w-0">
        {/* Left ticker */}
        <div className=" shrink-0 h-full flex items-center">
          <LogoLoop
            logos={leftLogos}
            direction="up"
            speed={30}
            logoHeight={logoHeight}
            gap={24}
            // fadeOut
            fadeOutColor="#09090b"
            className="pl-3"
          />
        </div>
        {/* Bento grid */}
        <div className="p-3 bento-grid flex-1 h-full min-w-0">
          <Card flush className="work">
            <CardHeader title="Work Experience" className="" />
            <BentoContent items={workItems} layout="list" />
          </Card>

          <ProfileCard
            className="profile"
            name="Nikko Kowalow"
            title="Software Engineer"
            handle="nikkokowalow"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/pfp.jpg"
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/textures/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />

          <Card flush className="education">
            <CardHeader title="Education" className="" />
            <BentoContent items={educationItems} layout="list" />
          </Card>

          <Card flush className="links">
            <CardHeader title="Connect" className="" />
            <BentoContent items={linkItems} layout="links" />
          </Card>

          <Card flush className="projects">
            <CardHeader title="Projects & Hackathons" className="" />
            <div className="relative flex-1 min-h-0 flex flex-col">
              <BentoContent items={projectItems} layout="grid" />
              {/* <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none">
                <Badge />
              </div> */}
            </div>
          </Card>
        </div>
        {/* Right ticker */}
        <div className=" shrink-0 h-full flex items-center">
          <LogoLoop
            logos={rightLogos}
            direction="down"
            speed={30}
            logoHeight={logoHeight}
            gap={24}
            // fadeOut
            fadeOutColor="#09090b"
            className="pr-3"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
