import React from "react";

interface ShinyGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ShinyGradientButton: React.FC<ShinyGradientButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        relative overflow-hidden
        px-6 py-3
        rounded-xl
        font-semibold
        text-white
        transition-all duration-300
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:scale-[1.04]
        active:scale-[0.97]
        shadow-lg hover:shadow-purple-500/40
        group
        ${className}
      `}
    >
      {/* Shine sweep */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <span
          className="
            absolute -left-[100%] top-0 h-full w-[200%]
            bg-gradient-to-r from-transparent via-white/40 to-transparent
            skew-x-[-20deg]
            animate-shimmer
          "
        />
      </span>

      {/* Gradient motion layer */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          opacity-0 group-hover:opacity-40
          blur-xl
          transition duration-300
        "
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
