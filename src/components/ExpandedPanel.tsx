import { useEffect, useState } from "react";
import type { ContentItem } from "./BentoContent";
import { ImageGrid } from "./ImageGrid";

interface ExpandedPanelProps {
  item: ContentItem;
  onClose: () => void;
}

export function ExpandedPanel({ item }: ExpandedPanelProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="absolute inset-0 z-20 flex flex-col overflow-hidden border-t border-white/20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.96)",
        transition:
          "opacity 300ms cubic-bezier(0.4,0,0.2,1), transform 300ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "black", opacity: 0.9 }}
      />

      {/* Scrollable content */}
      <div className="relative flex flex-col h-full p-6 gap-3 backdrop-blur-md overflow-y-auto">
        {/* ── Row 1: logo left, role + date right ── */}
        <div className="flex items-start justify-between gap-4 max-h-[120px]">
          {item.image && (
            <img
              src={item.image.altSrc ?? item.image.src}
              alt={item.image.alt}
              className={`max-h-full max-w-[40%] h-auto object-contain shrink-0${item.image.rounded ? " rounded-xl" : ""}`}
              style={{ filter: item.image.invert ? "invert(1)" : undefined }}
            />
          )}
          <div className="text-right ml-auto flex flex-col items-end gap-2">
            {item.sublabel && (
              <p className="text-white/90 text-xl font-bold leading-tight">
                {item.sublabel}
              </p>
            )}
            <div className="flex flex-col items-end gap-1.5">
              <div className="flex flex-wrap justify-end gap-1.5">
                {item.date && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-medium">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="shrink-0"
                    >
                      <rect
                        x="1"
                        y="2"
                        width="10"
                        height="9"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 1v2M8 1v2M1 5h10"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item.date}
                  </span>
                )}
                {item.location && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-medium">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <circle cx="6" cy="4.5" r="1" fill="currentColor" />
                    </svg>
                    {item.location}
                  </span>
                )}
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-medium hover:bg-white/20 hover:text-white/90 transition-colors"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M5 2H2.5A1.5 1.5 0 0 0 1 3.5v6A1.5 1.5 0 0 0 2.5 11h6A1.5 1.5 0 0 0 10 9.5V7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 1h4v4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 1 6 6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  {new URL(item.url).hostname.replace(/^www\./, "")}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ── Activities ── */}
        {item.activities && item.activities.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Activities
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.activities.map((a, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/55 text-xs"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Coursework ── */}
        {item.coursework && item.coursework.length > 0 && (
          <div className="flex flex-col gap-1.5">
            {"hello"}
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Relevant Coursework
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.coursework.map((c, i) =>
                c.url ? (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/55 text-xs hover:bg-white/15 hover:text-white/80 transition-colors"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/55 text-xs"
                  >
                    {c.name}
                  </span>
                ),
              )}
            </div>
          </div>
        )}

        {/* ── Row 2: description ── */}
        {item.description && (
          <p className="text-white/60 text-base leading-relaxed">
            {item.description}
          </p>
        )}

        {/* ── Row 3: bullets ── */}
        {/* {item.bullets && item.bullets.length > 0 && (
          <ul className="flex flex-col gap-3">
            {item.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 text-lg text-white/70 leading-relaxed"
              >
                <span className="text-white/30 shrink-0">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )} */}

        {/* ── Row 3: extra images ── */}
        {item.images && item.images.length > 0 && (
          <ImageGrid images={item.images} />
        )}

        {/* ── Row 4: tech stack logos (pinned to bottom) ── */}
        {item.techStack && item.techStack.length > 0 && (
          <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              {item.techStack.map((tech, i) =>
                tech.image ? (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      title={tech.name}
                      className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-[filter] duration-200"
                    />
                    <span className="text-[10px] text-white/30">
                      {tech.name}
                    </span>
                  </div>
                ) : (
                  <span
                    key={i}
                    className="text-xs font-medium bg-white/10 text-white/50 border border-white/15 rounded-full px-3 py-1 leading-none"
                  >
                    {tech.name}
                  </span>
                ),
              )}
            </div>
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/90 transition-colors shrink-0"
                aria-label="GitHub repository"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
