import { useEffect, useState } from "react";
import type { ContentItem } from "./BentoContent";

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
          <div className="text-right ml-auto">
            {item.sublabel && (
              <p className="text-white/80 text-base font-semibold">
                {item.sublabel}
              </p>
            )}
            {item.label && (
              <p className="text-white/50 text-sm mt-1">{item.label}</p>
            )}
            {item.date && (
              <p className="text-white/40 text-sm mt-1">{item.date}</p>
            )}
            {item.location && (
              <p className="text-white/30 text-sm">{item.location}</p>
            )}
          </div>
        </div>

        {/* ── Row 2: bullets ── */}
        {item.bullets && item.bullets.length > 0 && (
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
        )}

        {/* ── Row 3: extra images ── */}
        {item.images && item.images.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {item.images.map((img, i) => (
              <img
                key={i}
                src={img}
                // alt={img.alt ?? ""}
                className="rounded-xl h-28 w-auto object-contain rounded-lg"
              />
            ))}
          </div>
        )}

        {/* ── Row 4: tech stack logos (pinned to bottom) ── */}
        {item.techStack && item.techStack.length > 0 && (
          <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center">
            {item.techStack.map((tech, i) =>
              tech.image ? (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    title={tech.name}
                    className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-[filter] duration-200"
                  />
                  <span className="text-[10px] text-white/30">{tech.name}</span>
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
        )}
      </div>
    </div>
  );
}
