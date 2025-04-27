import React, { useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  testimonialAuthor1,
  arrowLeft,
  arrowRight,
} from "~/utils/ImageComponent";

export const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: `“Partnering with Potential was one of our best decisions. They understood our industry challenges and delivered a solution that streamlined our procurement process. We've seen faster order processing and stronger supplier relationships since launch. Thanks, Potential Inc team!"!”`,
      author: "Hogun Jung",
      position: "CEO of BuildChain",
      videoSrc: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
      img: testimonialAuthor1,
    },
    {
      id: 2,
      text: `“Partnering with Potential was one of our best decisions. They understood our industry challenges and delivered a solution that streamlined our procurement process. We've seen faster order processing and stronger supplier relationships since launch. Thanks, Potential Inc team!"!”`,
      author: "Jane Smith",
      position: "CTO, Another Co",
      videoSrc:
        "https://videos.pexels.com/video-files/3249940/3249940-uhd_2560_1440_25fps.mp4",
      img: testimonialAuthor1,
    },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().then(() => setPlayingIndex(index));
    }
  };
  const handlePauseOrToggle = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setPlayingIndex(index));
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <>
      <div className="c-testimonials__inner" ref={emblaRef}>
        <Carousel
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent className="c-testimonials__carousel">
            {testimonials.map((item, index) => (
              <CarouselItem className="c-testimonials__item" key={item.id}>
                <div className="c-testimonials__body">
                  <div className="c-testimonials__text">
                    <p className="fadeInUp">{item.text}</p>

                    <div className="c-testimonials__footer c-testimonial-author fadeInUp">
                      <div className="c-testimonial-author__img">
                        <img src={item.img} alt={`Author ${item.id}`} />
                      </div>
                      <h4 className="c-testimonial-author__name">
                        {item.author}
                        <span>{item.position}</span>
                      </h4>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="c-testimonials__video fadeInUp">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={item.videoSrc}
                      muted
                      playsInline
                      preload="auto"
                      onClick={() => handlePauseOrToggle(index)}
                      className="rounded-xl"
                    />
                    {playingIndex !== index && (
                      <button
                        className="c-testimonials__play-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlay(index);
                        }}
                      ></button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="c-testimonials__buttons fadeInUp">
            <CarouselPrevious className="c-testimonials__prev-btn">
              <img src={arrowLeft} alt="Prev" />
            </CarouselPrevious>
            <CarouselNext className="c-testimonials__next-btn">
              <img src={arrowRight} alt="Next" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </>
  );
};
