import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  rowSpan?: 1 | 2 | 3;
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  rowStart?: 1 | 2 | 3;
  /** Remove card padding so content fills edge-to-edge. Use CardHeader className to add header-only padding. */
  flush?: boolean;
}

const colSpanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
};
const rowSpanMap: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
};
const colStartMap: Record<number, string> = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
  6: "col-start-6",
  7: "col-start-7",
};
const rowStartMap: Record<number, string> = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
};

export function Card({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  colStart,
  rowStart,
  flush = false,
}: CardProps) {
  return (
    <div
      className={[
        colSpanMap[colSpan],
        rowSpanMap[rowSpan],
        colStart ? colStartMap[colStart] : "",
        rowStart ? rowStartMap[rowStart] : "",
        "rounded-2xl border border-white/8 bg-white/3",
        flush ? "p-0 overflow-hidden" : "p-5 overflow-hidden",
        "transition-colors duration-200 hover:border-white/12",
        "flex flex-col",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  icon?: ReactNode;
  title: string;
  className?: string;
}

export function CardHeader({ icon, title, className = "" }: CardHeaderProps) {
  return (
    <div className={`flex items-center gap-2 mb-2 shrink-0 ${className}`}>
      {icon && <span className="text-white/40 flex items-center">{icon}</span>}
      <span className="text-xl font-semibold tracking-widest uppercase text-white/40">
        {title}
      </span>
    </div>
  );
}

export function CardDivider({ className = "" }: { className?: string }) {
  return <hr className={`border-white/8 my-4 shrink-0 ${className}`} />;
}
