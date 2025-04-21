import { useEffect, useRef, useState } from "react";

const CircleCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const boxes = document.querySelectorAll(".cursor-box");

    const handleMove = ((e: Event) => {
      const evt = e as MouseEvent;
      setCoords({ x: evt.clientX, y: evt.clientY });
    }) as EventListener;

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    boxes.forEach((box) => {
      box.addEventListener("mousemove", handleMove);
      box.addEventListener("mouseenter", show);
      box.addEventListener("mouseleave", hide);
    });

    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("mousemove", handleMove);
        box.removeEventListener("mouseenter", show);
        box.removeEventListener("mouseleave", hide);
      });
    };
  }, []);

  return isVisible ? (
    <div
      ref={cursorRef}
      className="fixed flex-center rounded-[3px] z-[9999] pointer-events-none text-[10px] tracking-[2px] uppercase"
      style={{
        left: coords.x - 27,
        top: coords.y - 9,
      }}
    >
      <span className="animate-[spin_3s_linear_infinite] size-20 bg-themeViolet-50 rounded-full pointer-events-none border-3 border-dashed absolute left-[50%] top-[50%] -translate-1/2 -z-[1]"></span>
      Explore
    </div>
  ) : null;
};

export default CircleCursor;
