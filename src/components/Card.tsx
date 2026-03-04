"use client";

import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  rounded?: boolean;
};

export default function Card({
  title,
  description,
  image,
  date,
  location,
}: {
  title: string;
  description: string[];
  image: ImageProps;
  date: string;
  location: string;
}) {
  return (
    <div className="w-full border border-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`object-contain max-h-12 max-w-[80px] ${
              image.rounded ? "rounded-lg" : ""
            }`}
            unoptimized
            priority
          />
        </div>
        <div>
          <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
          <p className="text-white/40 text-xs mt-0.5">
            {location} &middot; {date}
          </p>
        </div>
      </div>
      <div className="space-y-1.5 pl-[72px]">
        {description.map((item, idx) => (
          <p key={idx} className="text-white/60 text-sm leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
