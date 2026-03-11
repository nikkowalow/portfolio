interface ImageGridProps {
  images: string[];
}

export function ImageGrid({ images }: ImageGridProps) {
  if (images.length === 0) return null;

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${Math.min(images.length, 2)}, 1fr)`,
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl bg-white/5 border border-white/10"
          style={{
            gridColumn:
              images.length % 2 !== 0 && i === images.length - 1
                ? "1 / -1"
                : undefined,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{ display: "block", aspectRatio: "16/9" }}
          />
        </div>
      ))}
    </div>
  );
}
