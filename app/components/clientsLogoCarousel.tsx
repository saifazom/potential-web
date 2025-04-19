"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {
  logos: string[];
};

export const ClientsLogoCarousel: React.FC<Props> = ({ logos }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      startDelay: 300,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex-center">
        {logos.map((logo, index) => (
          <div key={index} className="c-clients-logo__item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
