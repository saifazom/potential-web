import { gsap } from "gsap";
import { useLayoutEffect, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageWithAnimations = () => {
  useLayoutEffect(() => {
    gsap.utils.toArray<HTMLElement>(".fadeInUp").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 }, // Initial state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            // once: true,
          },
        }
      );
    });
  }, []);

  return <div className="fadeInUp"></div>;
};

export default PageWithAnimations;
// ===
export const AnimatedWave: React.FC = () => {
  const waveRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      waveRef.current,
      { x: "-100%" },
      {
        x: "100%",
        duration: 10,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return <i ref={waveRef}></i>;
};
