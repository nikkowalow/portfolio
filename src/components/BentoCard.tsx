import { gsap } from "gsap";
import TargetCursor from "./TargetCursor";

interface BentoCardProps {
  className?: string;
  style?: React.CSSProperties;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  glowColor?: string;
  disableAnimations?: boolean;
  children?: React.ReactNode;
}

export default function BentoCard({
  className = "",
  style,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = false,
  glowColor = "132, 0, 255",
  disableAnimations = false,
  children,
}: BentoCardProps) {
  return (
    <div
      className={className}
      style={style}
      ref={(el) => {
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
          if (disableAnimations) return;

          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          if (enableTilt) {
            gsap.to(el, {
              rotateX: ((y - centerY) / centerY) * -10,
              rotateY: ((x - centerX) / centerX) * 10,
              duration: 0.1,
              ease: "power2.out",
              transformPerspective: 1000,
            });
          }

          if (enableMagnetism) {
            gsap.to(el, {
              x: (x - centerX) * 0.05,
              y: (y - centerY) * 0.05,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        const handleMouseLeave = () => {
          if (disableAnimations) return;

          if (enableTilt) {
            gsap.to(el, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }

          if (enableMagnetism) {
            gsap.to(el, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        const handleClick = (e: MouseEvent) => {
          if (!clickEffect || disableAnimations) return;

          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const maxDistance = Math.max(
            Math.hypot(x, y),
            Math.hypot(x - rect.width, y),
            Math.hypot(x, y - rect.height),
            Math.hypot(x - rect.width, y - rect.height),
          );

          const ripple = document.createElement("div");
          ripple.style.cssText = `
            position: absolute;
            width: ${maxDistance * 2}px;
            height: ${maxDistance * 2}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
            left: ${x - maxDistance}px;
            top: ${y - maxDistance}px;
            pointer-events: none;
            z-index: 1000;
          `;

          el.appendChild(ripple);

          gsap.fromTo(
            ripple,
            { scale: 0, opacity: 1 },
            {
              scale: 1,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => ripple.remove(),
            },
          );
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("click", handleClick);
      }}
    >
      {children}
    </div>
  );
}
