// ─── Universal bento card content component ───────────────────
// Image fills the tile by default. Hover reveals all details.

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
  /** If set, the item becomes an anchor tag */
  url?: string;
  bullets?: string[];
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
      className="cursor-target relative overflow-hidden group flex-1 min-h-0 block border-r border-b border-dotted border-white/15"
      style={{ backgroundColor: "black" }}
    >
      {/* Image — fills entire tile */}
      {item.image && (
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "contain",
            padding: item.imagePadding ?? "0px",
            filter: item.image.invert ? "invert(1)" : undefined,
          }}
        />
      )}

      {/* Hover overlay — slides up from bottom */}
      <div className="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <div className="bg-black/80 backdrop-blur-md p-3 flex flex-col gap-1.5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-white font-semibold text-xs leading-tight truncate">
                {item.label}
              </p>
              {item.sublabel && (
                <p className="text-white/60 text-[10px] mt-0.5 truncate">
                  {item.sublabel}
                </p>
              )}
              {item.detail && (
                <p className="text-white/40 text-[10px] mt-0.5 truncate">
                  {item.detail}
                </p>
              )}
            </div>
            <div className="text-right shrink-0">
              {item.date && (
                <p className="text-white/40 text-[10px]">{item.date}</p>
              )}
              {item.location && (
                <p className="text-white/30 text-[10px]">{item.location}</p>
              )}
            </div>
          </div>

          {/* Badge */}
          {item.badge && (
            <span className="self-start text-[9px] font-semibold bg-white/15 text-white/80 rounded px-1.5 py-0.5 leading-none">
              {item.badge}
            </span>
          )}

          {/* Bullets */}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="flex flex-col gap-1 mt-0.5">
              {item.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-1.5 text-[10px] text-white/55 leading-snug"
                >
                  <span className="text-white/25 shrink-0 mt-px">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Tag>
  );
}

// ── Main component ─────────────────────────────────────────────
export function BentoContent({ items, layout }: BentoContentProps) {
  if (layout === "grid") {
    const cols = Math.ceil(Math.sqrt(items.length));
    return (
      <div
        className="cursor-target flex-1 grid min-h-0"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    );
  }

  if (layout === "links") {
    return (
      <div className="cusor-target flex-1 grid grid-cols-2 min-h-0">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    );
  }

  // "list" — vertical stack, items share height equally
  return (
    <div className="cursor-target flex flex-col flex-1 min-h-0">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
