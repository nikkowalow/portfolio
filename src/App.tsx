import "./App.css";
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
  badge: p.award,
  bullets: p.bullets,
  image: p.image,
  backgroundColor: p.backgroundColor,
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
  return (
    <main className="h-screen p-3 flex gap-3 relative">
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
      <div className="relative z-10 flex gap-3 flex-1 h-full min-w-0">
        {/* Left ticker */}
        <div className="w-16 shrink-0 h-full">
          <LogoLoop
            logos={leftLogos}
            direction="up"
            speed={30}
            logoHeight={52}
            gap={20}
            fadeOut
            fadeOutColor="#09090b"
          />
        </div>
        {/* Bento grid */}
        <div className="bento-grid flex-1 h-full min-w-0">
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
            <BentoContent items={projectItems} layout="grid" />
          </Card>
        </div>
        {/* Right ticker */}
        <div className="w-16 shrink-0 h-full">
          <LogoLoop
            logos={rightLogos}
            direction="down"
            speed={30}
            logoHeight={52}
            gap={20}
            fadeOut
            fadeOutColor="#09090b"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
