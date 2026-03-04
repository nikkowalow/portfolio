import React from "react";

export default function AboutCard() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
      {/* Background photo */}
      <img
        src="/icons/pfp.jpg"
        alt="Nikko Kowalow"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h2 className="text-white font-semibold text-2xl leading-tight tracking-tight">
          Nikko Kowalow
        </h2>
        <p className="text-white/70 text-sm mt-0.5">Software Engineer</p>
        <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Chicago, IL
        </p>
      </div>
    </div>
  );
}
