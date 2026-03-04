"use client";

import TiltedCard from "./TiltedCard";
import ExperienceCard from "./ExperienceCard";
import Section from "./Section";
import { workExperience, projects, education, skills } from "@/data/data";

export default function CardCarousel() {
  return (
    <>
      {/* 1 · Work Experience */}
      <Section label="Work Experience">
        <div className="flex flex-col gap-6 w-full max-w-3xl">
          {workExperience.map((job) => (
            <TiltedCard
              key={job.title}
              backgroundColor="#111827"
              containerHeight="200px"
              containerWidth="100%"
              imageHeight="200px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <ExperienceCard
                  logo={job.image}
                  role={job.role}
                  company={job.title}
                  date={job.date}
                  location={job.location}
                />
              }
            />
          ))}
        </div>
      </Section>

      {/* 2 · Projects / Hackathons */}
      <Section label="Projects / Hackathons">
        <div className="flex flex-col gap-8">
          {projects.map((proj) => (
            <div key={proj.title}>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-white font-semibold">{proj.title}</h3>
                <span className="text-white/30 text-xs">{proj.date}</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-white/40 text-xs">{proj.location}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                  {proj.award}
                </span>
              </div>
              <ul className="flex flex-col gap-1">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="text-white/55 text-sm leading-relaxed">
                    · {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 · Education */}
      {/* <Section label="Education">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-white font-semibold text-lg">
              {education.school}
            </h3>
            <span className="text-white/30 text-xs">{education.date}</span>
          </div>
          <p className="text-white/40 text-xs mb-4">{education.location}</p>
          <p className="text-white/70 text-sm">{education.degree}</p>
          <p className="text-white/40 text-sm">{education.spec}</p>
        </div>
      </Section> */}

      {/* 4 · Technical Skills */}
      <Section label="Technical Skills">
        <div className="flex flex-col gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-white/30 text-xs mb-2">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
