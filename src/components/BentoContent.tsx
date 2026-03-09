// ─── Universal bento card content component ───────────────────
// Image fills the tile by default. Hover reveals all details.

import { useState } from "react";
import Badge from "./Badge";
import { ExpandedPanel } from "./ExpandedPanel";

export interface ContentItem {
  /** Primary label — company name, project title, school, link name */
  label: string;
  /** Secondary label — role, degree */
  sublabel?: string;
  /** Tertiary label — specialization, extra info */
  detail?: string;
  date?: string;
  location?: string;
  /** Award / badge text */
  badge?: string;
  award?: number;
  /** If set, the item becomes an anchor tag */
  url?: string;
  bullets?: string[];
  /** Tech stack shown in expanded panel */
  techStack?: { name: string; image?: string }[];
  /** Extra images shown in expanded panel */
  images?: string[];
  image?: {
    src: string;
    altSrc?: string;
    alt: string;
    width?: number;
    height?: number;
    invert?: boolean;
  };
  backgroundColor?: string;
  /** Padding inside the tile around the image. Defaults to "16px". Set "0" to fill edge-to-edge. */
  imagePadding?: string;
}

type Layout =
  | "list" // Vertical single-column stack
  | "grid" // Auto sqrt grid (4 items → 2×2, 9 → 3×3)
  | "links"; // Vertical stack, items are anchor tags

interface BentoContentProps {
  items: ContentItem[];
  layout: Layout;
  onExpandedChange?: (expanded: boolean) => void;
  /** Controlled close: set to false to collapse from outside */
  isExpanded?: boolean;
}

// ── Single tile — same regardless of layout ────────────────────
function Item({ item, onClick }: { item: ContentItem; onClick: () => void }) {
  const Tag = item.url ? "a" : "div";
  const linkProps = item.url
    ? {
        href: item.url,
        target: item.url.startsWith("mailto") ? "_self" : "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Tag
      {...linkProps}
      onClick={onClick}
      className="cursor-target relative overflow-hidden group flex-1 min-h-0 block border border-dotted border-white/25"
    >
      {/* Background color — separate layer so opacity doesn't affect image */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "black", opacity: 0.7 }}
      />

      {/* Image — centered by default, shrinks to top-left on hover */}
      {item.image && (
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="absolute transition-all duration-300 ease-out
            inset-0 w-full h-full object-contain"
          style={{
            padding: item.imagePadding ?? "0px",
            filter: item.image.invert ? "invert(1)" : undefined,
          }}
        />
      )}

      {/* Badge — always visible, top-right corner */}
      {item.badge && (
        <span className="absolute top-2 right-2 z-10 text-[9px] font-semibold bg-white/15 text-white/80 border border-white/20 rounded px-1.5 py-0.5 leading-none backdrop-blur-sm">
          {item.badge}
        </span>
      )}

      {item.award && (
        <BadgeOverlay
          path={
            item.award === 1
              ? "/textures/1st.glb"
              : item.award === 2
                ? "/textures/2nd.glb"
                : "/textures/3rd.glb"
          }
        />
      )}
      {/* <BadgeOverlay /> */}

      {/* Hover overlay — blurs in over the tile */}
    </Tag>
  );
}

interface BadgeOverlayProps {
  path: string;
}

const BadgeOverlay = ({ path }: BadgeOverlayProps) => (
  <div
    className="absolute top-0 right-0 pointer-events-none z-10"
    style={{
      width: "clamp(10px, 50%, 200px)",
      height: "clamp(10px, 50%, 200px)",
      transform: "translate(15%, -5%)",
    }}
  >
    <Badge path={path} />
  </div>
);

// ── Main component ─────────────────────────────────────────────
export function BentoContent({
  items,
  layout,
  onExpandedChange,
  isExpanded,
}: BentoContentProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const expandedItem = expanded !== null ? items[expanded] : null;

  const setExpandedItem = (i: number | null) => {
    setExpanded(i);
    onExpandedChange?.(i !== null);
  };

  // Allow parent to collapse via isExpanded=false
  if (isExpanded === false && expanded !== null) {
    setExpanded(null);
  }

  if (layout === "grid") {
    const cols = Math.ceil(Math.sqrt(items.length));
    return (
      <div className="relative flex-1 min-h-0 flex flex-col">
        <div
          className="cursor-target flex-1 grid min-h-0"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} onClick={() => setExpandedItem(i)} />
          ))}
        </div>
        {expandedItem && (
          <ExpandedPanel
            item={expandedItem}
            onClose={() => setExpandedItem(null)}
          />
        )}
      </div>
    );
  }

  if (layout === "links") {
    return (
      <div className="relative flex-1 min-h-0 flex flex-col">
        <div className="cursor-target flex-1 grid grid-cols-2 min-h-0">
          {items.map((item, i) => (
            <Item key={i} item={item} onClick={() => setExpandedItem(i)} />
          ))}
        </div>
        {expandedItem && (
          <ExpandedPanel
            item={expandedItem}
            onClose={() => setExpandedItem(null)}
          />
        )}
      </div>
    );
  }

  // "list" — vertical stack, items share height equally
  return (
    <div className="relative flex flex-col flex-1 min-h-0">
      <div className="cursor-target flex flex-col flex-1 min-h-0">
        {items.map((item, i) => (
          <Item key={i} item={item} onClick={() => setExpandedItem(i)} />
        ))}
      </div>
      {expandedItem && (
        <ExpandedPanel
          item={expandedItem}
          onClose={() => setExpandedItem(null)}
        />
      )}
    </div>
  );
}
