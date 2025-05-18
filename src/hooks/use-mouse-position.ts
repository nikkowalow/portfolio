import { useEffect } from "react";

export function useMousePosition<T extends HTMLElement = HTMLElement>(
    ref: React.RefObject<T>,
    callback?: ({ x, y }: { x: number; y: number }) => void,
  ) {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { top, left } = ref.current?.getBoundingClientRect() || {
        top: 0,
        left: 0,
      };

      callback?.({ x: clientX - left, y: clientY - top });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const { clientX, clientY } = event.touches[0];
      const { top, left } = ref.current?.getBoundingClientRect() || {
        top: 0,
        left: 0,
      };

      callback?.({ x: clientX - left, y: clientY - top });
    };

    const node = ref.current;
    node?.addEventListener("mousemove", handleMouseMove);
    node?.addEventListener("touchmove", handleTouchMove);

    return () => {
      node?.removeEventListener("mousemove", handleMouseMove);
      node?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [ref, callback]);
}
