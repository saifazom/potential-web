import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

type Props = {
  texts: string[];
};

export const TestimonialsCarousel: React.FC<Props> = ({ texts }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          playOnInit: true,
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {texts.map((text, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>
                <div className=" p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

// export default TestimonialsCarousel;
