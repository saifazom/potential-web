import { gsap } from "gsap";
import { useLayoutEffect } from "react";
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

  return <div className="fadeInUp hidden"></div>;
};

export default PageWithAnimations;
