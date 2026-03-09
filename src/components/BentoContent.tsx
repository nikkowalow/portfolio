// ─── Universal bento card content component ───────────────────
// Image fills the tile by default. Hover reveals all details.

import Badge from "./Badge";

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
  /** Tech stack pills shown at the bottom on hover */
  techStack?: string[];
  image?: {
    src: string;
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
}

// ── Single tile — same regardless of layout ────────────────────
function Item({ item }: { item: ContentItem }) {
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
      <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-0 group-hover:backdrop-blur-md bg-black/0 group-hover:bg-black/60">
        {/* Top: bullets */}
        <div className="flex flex-col gap-1.5 overflow-hidden">
          {item.bullets && item.bullets.length > 0 && (
            <ul className="flex flex-col gap-1">
              {item.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-1.5 text-[20px] text-white/70 leading-snug"
                >
                  <span className="text-white/30 shrink-0 mt-px">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom: tech stack pills */}
        {item.techStack && item.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[9px] font-medium bg-white/10 text-white/60 border border-white/15 rounded-full px-2 py-0.5 leading-none"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
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
export function BentoContent({ items, layout }: BentoContentProps) {
  if (layout === "grid") {
    const cols = Math.ceil(Math.sqrt(items.length));
    return (
      <div className="relative flex-1 min-h-0 flex flex-col">
        <div
          className="cursor-target flex-1 grid min-h-0"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
        {/* {true && <BadgeOverlay />} */}
      </div>
    );
  }

  if (layout === "links") {
    return (
      <div className="relative flex-1 min-h-0 flex flex-col">
        <div className="cursor-target flex-1 grid grid-cols-2 min-h-0">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
        {/* {true && <BadgeOverlay />} */}
      </div>
    );
  }

  // "list" — vertical stack, items share height equally
  return (
    <div className="relative flex flex-col flex-1 min-h-0">
      <div className="cursor-target flex flex-col flex-1 min-h-0">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
      {/* {hasBadge && <BadgeOverlay />} */}
    </div>
  );
}
