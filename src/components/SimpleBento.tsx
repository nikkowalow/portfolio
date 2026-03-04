"use client";

import { useRef } from "react";

export default function SimpleBento() {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = gridRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gridRef.current!.style.setProperty("--x", `${x}px`);
    gridRef.current!.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      <style>
        {`
        .bento {
          --x: 50%;
          --y: 50%;
        }

        .card {
          position: relative;
          border-radius: 16px;
          padding: 24px;
          background: #060010;
          border: 1px solid #392e4e;
          color: white;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            350px circle at var(--x) var(--y),
            rgba(132,0,255,0.25),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .card:hover::before {
          opacity: 1;
        }

        /* Bento layout */

        .card:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .card:nth-child(4) {
          grid-column: span 2;
        }
        `}
      </style>

      <div
        ref={gridRef}
        onMouseMove={handleMouseMove}
        className="bento grid grid-cols-4 grid-rows-3 gap-4 h-screen p-8 bg-black"
      >
        <div className="card">
          <h2 className="text-2xl">Main Feature</h2>
          <p className="text-white/60">Large highlight card</p>
        </div>

        <div className="card">
          <h3>Analytics</h3>
        </div>

        <div className="card">
          <h3>Dashboard</h3>
        </div>

        <div className="card">
          <h3>Automation</h3>
        </div>

        <div className="card">
          <h3>Integration</h3>
        </div>

        <div className="card">
          <h3>Security</h3>
        </div>
      </div>
    </>
  );
}
