"use client";

export default function Card({ index }: { index: number }) {
  return (
<div
              key={index}
              className="top-1/2 -translate-y-1/2 group relative w-200 h-160 shrink-0 bg-white/10 backdrop-blur-md border border-dashed border-black/30 rounded-2xl shadow-lg transform-gpu ease-in-out transition-transform duration-350 hover:rotate-y-0"
              style={{
                transform: "rotateY(60deg)",
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                card.style.transform += " scale(1.08)";
                // card.style.zIndex = "10";
              }}
              
              onMouseLeave={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                // Reset to original rotation only, preserving the skew
                card.style.transform = "rotateY(60deg)";
                card.style.zIndex = "0";
              }}
            >
              <div className="p-4 text-black">
                <h3 className="text-lg font-bold mb-2">Card Title</h3>
                <p className="text-sm text-gray-700">Short description here.</p>
              </div>
            </div>
  );
}
