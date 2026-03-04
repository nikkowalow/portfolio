export default function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative z-10 h-screen snap-start w-full flex flex-col px-12 py-16">
      {/* Big section label — top left */}
      <h2 className="text-white font-bold text-8xl tracking-tight leading-none shrink-0">
        {label}
      </h2>

      {/* Cards — fills remaining height, children get full width */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl">{children}</div>
      </div>
    </section>
  );
}
