"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type Props = {
  texts: string[];
};

export const HeadlineCarousel: React.FC<Props> = ({ texts }) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, slidesToScroll: 3 },
    [
      AutoScroll({
        speed: 1,
        startDelay: 300,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="c-headline-carousel__wrap flex-center">
        {texts.map((text, index) => (
          <h3 key={index} className="c-headline-carousel__item">
            <span>{text}</span>
          </h3>
        ))}
      </div>
    </div>
  );
};
