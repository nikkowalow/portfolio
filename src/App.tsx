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
    <main className="h-screen bg-zinc-950 p-3 flex gap-3">
      <TargetCursor
        spinDuration={5}
        hideDefaultCursor
        parallaxOn
        hoverDuration={1}
      />

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
          <CardHeader title="Work Experience" className="px-4 pt-3" />
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
          <CardHeader title="Education" className="px-4 pt-3" />
          <BentoContent items={educationItems} layout="list" />
        </Card>

        <Card flush className="links">
          <CardHeader title="Connect" className="px-4 pt-3" />
          <BentoContent items={linkItems} layout="links" />
        </Card>

        <Card flush className="projects">
          <CardHeader title="Projects & Hackathons" className="px-4 pt-3" />
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
    </main>
  );
}

export default App;
