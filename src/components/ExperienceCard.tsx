import Image from "next/image";

type ExperienceCardProps = {
  logo: { src: string; alt: string; width: number; height: number; rounded?: boolean };
  role: string;
  company: string;
  date: string;
  location: string;
};

export default function ExperienceCard({
  logo,
  role,
  company,
  date,
  location,
}: ExperienceCardProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-sm">
      {/* Logo */}
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={`object-contain max-h-10 max-w-[120px] ${logo.rounded ? "rounded-lg" : ""}`}
        unoptimized
      />

      {/* Role */}
      <div>
        <p className="text-white/35 text-xs mb-1">
          {company} &middot; {location} &middot; {date}
        </p>
        <h3 className="text-white font-semibold text-2xl leading-tight">{role}</h3>
      </div>
    </div>
  );
}
