import type { Route } from "../pages/+types/home";
import React, { Suspense, lazy } from "react";
const HeadlineCaro = lazy(() => import("~/components/HeadlineCarousel"));
const ClientsLogo = lazy(() => import("~/components/clientsLogoMarquee"));
import { TestimonialsCarousel } from "~/components/TestimonialsCarousel";
import { AchievementCounter } from "~/components/AchievementCounter";
import {
  clientImg1,
  clientImg2,
  clientImg3,
  Overlay,
  heroIcon1,
  heroIcon2,
  accourdionImg1,
} from "~/utils/ImageComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
const accordionData = [
  {
    title: "UI/UX Design",
    content: {
      text1: "Frontend Development (React, Angular, Vue.js)",
      text2: "Backend Development (Node.js, Python, PHP)",
      text3: "Custom Web Applications",
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  },
  {
    title: "Web Development",
    content: {
      text1: "Frontend Development (React, Angular, Vue.js)",
      text2: "Backend Development (Node.js, Python, PHP)",
      text3: "Custom Web Applications",
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  },
  {
    title: "Mobile App Development",
    content: {
      text1: "Frontend Development (React, Angular, Vue.js)",
      text2: "Backend Development (Node.js, Python, PHP)",
      text3: "Custom Web Applications",
      buttonLabel: "Learn More",
      buttonLink: "#",
    },
  },
];
export default function Home() {
  return (
    <>
      <section id="hero" className="o-section o-section--hero">
        <div className="container mx-auto">
          <div className="c-hero">
            <div className="c-hero__content">
              <div className="c-hero__text-box">
                <h1 className="c-hero__title">
                  Build and Scale Custom Software 3x Faster.
                </h1>

                <div className="c-cp-box">
                  <div className="c-cp-box__images">
                    <div className="c-cp-box__img">
                      <img src={clientImg1} alt="Client Img1" />
                    </div>
                    <div className="c-cp-box__img">
                      <img src={clientImg2} alt="Client Img2" />
                    </div>
                    <div className="c-cp-box__img">
                      <img src={clientImg3} alt="Client Img3" />
                    </div>
                  </div>
                  <div className="c-cp-box__text flex-1">
                    <p>
                      Trusted by businesses worldwide for <strong>speed</strong>
                      , precision, and results-driven solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="c-hero__video">
                <div className="c-hero__video-overlay">
                  <video
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    preload="auto"
                    src="https://cuberto.com/assets/projects/daoway/cover.mp4"
                  ></video>
                </div>
                <img src={Overlay} alt="Video Mask" />
              </div>
            </div>
            <div className="c-hero-footer">
              <div className="c-hero-footer__col">
                <div className="c-hero-footer__top">
                  <div className="c-hero-footer__icon">
                    <img src={heroIcon1} alt="Hero Icon1" />
                    HQ: South Korea
                  </div>
                  <div className="">Servicing Earth</div>
                </div>
                <p>
                  Potential is a global Design and Development Agency. Helping
                  Brands redefine experiences and empower business growth.
                </p>
              </div>
              <div className="c-hero-footer__col">
                <div className="c-hero-footer__title">
                  <img src={heroIcon2} alt="Hero Icon 2" />
                  <h3>
                    Your company is ready for big moves and we are here for it.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--! End Hero Section --> */}

      <section id="grid-video" className="0-section o-section--grid-video">
        <div className="c-grid-video">
          <div className="c-grid-video__col col-span-2">
            <div
              className="c-grid-video__box max-h-[1070px]"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector(
                  "video"
                ) as HTMLVideoElement;
                if (video) {
                  //   video.currentTime = 0;
                  video.play().catch((err) => {
                    console.warn("Play error:", err);
                  });
                }
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector(
                  "video"
                ) as HTMLVideoElement;
                if (video) {
                  video.pause();
                  //   video.currentTime = 0;
                }
              }}
            >
              <video
                src="https://cuberto.com/assets/projects/flipaclip/cover.mp4"
                muted
                playsInline
                preload="auto"
              ></video>
            </div>
          </div>
          {/* /-- Video Col-- */}

          <div className="c-grid-video__col">
            <div
              className="c-grid-video__box max-h-[519px]"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector(
                  "video"
                ) as HTMLVideoElement;
                if (video) {
                  //   video.currentTime = 0;
                  video.play().catch((err) => {
                    console.warn("Play error:", err);
                  });
                }
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector(
                  "video"
                ) as HTMLVideoElement;
                if (video) {
                  video.pause();
                  //   video.currentTime = 0;
                }
              }}
            >
              <video
                src="https://cuberto.com/assets/projects/kzero/cover.mp4"
                muted
                playsInline
                preload="auto"
              ></video>
            </div>

            <div
              className="c-grid-video__box max-h-[519px]"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector(
                  "video"
                ) as HTMLVideoElement;
                if (video) {
                  //   video.currentTime = 0;
                  video.play().catch((err) => {
                    console.warn("Play error:", err);
                  });
                }
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector(
                  "video"
                ) as HTMLVideoElement;
                if (video) {
                  video.pause();
                  //   video.currentTime = 0;
                }
              }}
            >
              <video
                src="https://cuberto.com/assets/projects/magma/cover.mp4"
                muted
                playsInline
                preload="auto"
              ></video>
            </div>
          </div>
          {/* /-- Video Col -- */}
        </div>
      </section>
      {/* <--! End Video Grid Section --> */}

      <section id="clients-logo" className="o-section o-section--clients-logo">
        <div className="c-clients-logo">
          <h2 className="c-clients-logo__title">
            <strong>Over 100+</strong> companies trust us
          </h2>

          <Suspense fallback={<div className="flex-center">Loading...</div>}>
            <ClientsLogo />
          </Suspense>
        </div>
      </section>
      {/* <--! End CLient Logo Section --> */}

      <section id="achievements" className="o-section o-section--achievements">
        <div className="c-achievements">
          <div className="container mx-auto">
            <div className="c-achievements-header">
              <h3 className="u-small-title">our achievements</h3>
              <div className="u-title max-w-4xl">
                <h2>
                  Driving Impact, Scaling Businesses, and Delivering Excellence.
                </h2>
                <div className="u-title-video">
                  <video
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    preload="auto"
                    src="https://cuberto.com/assets/projects/magma/cover.mp4?2"
                  ></video>
                </div>
              </div>
            </div>
            {/* /-- Header -- */}

            <div className="c-achievements__grid">
              <div className="c-achievements__col">
                <AchievementCounter />
              </div>
              <div className="c-achievements__col">
                <div className="c-achievements__video">
                  <video
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    preload="auto"
                    src="https://web.potentialai.com/assets/logo-animate-Bcd2apbp.webm"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--! End Our Achievements Section --> */}

      <section
        id="headline-carousel"
        className="o-section o-section--headline-carousel"
      >
        <div className="c-headline-carousel">
          <Suspense fallback={<div>Loading...</div>}>
            <HeadlineCaro />
          </Suspense>
        </div>
      </section>
      {/* <--! End Headline Slider Section --> */}

      <section id="case-studies" className="o-section o-section--case-studies">
        <div className="container mx-auto">
          <div className="c-case-studies">
            <div className="c-case-studies__header">
              <h3 className="u-small-title">our Case Studies</h3>
              <div className="u-title">
                <h2>
                  Featured
                  <span className="flex items-start">
                    <div className="u-title-video static translate-0 mr-5 w-[221px]">
                      <video
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        preload="auto"
                        src="https://cuberto.com/assets/projects/magma/cover.mp4?2"
                      ></video>
                    </div>
                    Projects
                  </span>
                </h2>
              </div>
            </div>
            {/* /-- Header -- */}

            <div className="c-case-study__wrap">
              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <div className="c-case-study__video">
                    <div
                      className="c-case-study__video"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector(
                          "video"
                        ) as HTMLVideoElement;
                        if (video) {
                          //   video.currentTime = 0;
                          video.play().catch((err) => {
                            console.warn("Play error:", err);
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector(
                          "video"
                        ) as HTMLVideoElement;
                        if (video) {
                          video.pause();
                          //   video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        src="https://cuberto.com/assets/projects/riyadh/cover.mp4"
                        muted
                        playsInline
                        preload="auto"
                      ></video>
                    </div>
                  </div>
                  <div className="c-case-study__caption">
                    <h3>
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>

              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <div
                    className="c-case-study__video"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        // video.currentTime = 0;
                        video.play().catch((err) => {
                          console.warn("Play error:", err);
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        // video.currentTime = 0;
                      }
                    }}
                  >
                    <video
                      src="https://cuberto.com/assets/projects/puntopago/cover.mp4"
                      muted
                      playsInline
                      preload="auto"
                    ></video>
                  </div>
                  <div className="c-case-study__caption">
                    <h3>
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /-- Video Row -- */}
            <div className="c-case-study__wrap">
              <div className="c-case-study__col ">
                <div className="c-case-study__box">
                  <div
                    className="c-case-study__video"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        // video.currentTime = 0;
                        video.play().catch((err) => {
                          console.warn("Play error:", err);
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        // video.currentTime = 0;
                      }
                    }}
                  >
                    <video
                      src="https://cuberto.com/assets/projects/qvino/cover.mp4"
                      muted
                      playsInline
                      preload="auto"
                    ></video>
                  </div>
                  <div className="c-case-study__caption">
                    <h3>
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>

              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <div
                    className="c-case-study__video"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        // video.currentTime = 0;
                        video.play().catch((err) => {
                          console.warn("Play error:", err);
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        // video.currentTime = 0;
                      }
                    }}
                  >
                    <video
                      src="https://cuberto.com/assets/projects/daoway/cover.mp4"
                      muted
                      playsInline
                      preload="auto"
                    ></video>
                  </div>
                  <div className="c-case-study__caption">
                    <h3>
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /-- Video Row -- */}
            <div className="c-case-study__wrap">
              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <div
                    className="c-case-study__video"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        // video.currentTime = 0;
                        video.play().catch((err) => {
                          console.warn("Play error:", err);
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        // video.currentTime = 0;
                      }
                    }}
                  >
                    <video
                      src="https://cuberto.com/assets/projects/flipaclip/cover.mp4"
                      muted
                      playsInline
                      preload="auto"
                    ></video>
                  </div>
                  <div className="c-case-study__caption">
                    <h3>
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>

              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <div
                    className="c-case-study__video"
                    onMouseEnter={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        // video.currentTime = 0;
                        video.play().catch((err) => {
                          console.warn("Play error:", err);
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget.querySelector(
                        "video"
                      ) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        // video.currentTime = 0;
                      }
                    }}
                  >
                    <video
                      src="https://cuberto.com/assets/projects/magma/cover.mp4?2"
                      muted
                      playsInline
                      preload="auto"
                    ></video>
                  </div>
                  <div className="c-case-study__caption">
                    <h3>
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p>Web Application</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /-- Video Row -- */}

            <div className="text-center">
              <a className="c-case-study__button" href="#">
                <span>View all cases</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <--! End Case Studies Section --> */}

      <section
        id="expertise-area"
        className="o-section o-section--expertise-area"
      >
        <div className="c-expertise-area">
          <div className="container mx-auto">
            <div className="c-contact__header">
              <h3 className="u-small-title">Our expertise areas</h3>
              <h2 className="u-title">
                Tailored Software, Built by Experts to Drive 10x Growth.
              </h2>
            </div>
            {/* /-- Header -- */}

            <Accordion type="single" collapsible className="c-accordion">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="c-accordion__item"
                >
                  <AccordionTrigger className="c-accordion__title">
                    <span>{(index + 1).toString().padStart(2, "0")}</span>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="c-accordion__content">
                    <div className="c-accordion__body">
                      <div className="c-accordion__text">
                        <ul>
                          <li>{item.content.text1}</li>
                          <li>{item.content.text2}</li>
                          <li>{item.content.text3}</li>
                        </ul>

                        <a className="c-accordion__btn u-button" href="#">
                          Learn More
                        </a>
                      </div>
                      <div className="c-accordion__img">
                        <img src={accourdionImg1} alt="Accordion Img 1" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* <--! End Expertise Area Section --> */}

      <section
        id="headline-carousel2"
        className="o-section o-section--headline-carousel2"
      >
        <div className="c-headline-carousel c-headline-carousel--2">
          <Suspense fallback={<div className="flex-center">Loading...</div>}>
            <HeadlineCaro />
          </Suspense>
        </div>
      </section>
      {/* <--! End Testimonials Section --> */}

      <section id="testimonials" className="o-section o-section--testimonials">
        <div className="c-headline-carousel">
          <div className="container mx-auto">
            <div className="c-testimonials__header">
              <h3 className="u-small-title">our Clients love about us</h3>
              <h2 className="u-title">
                Stories of Success: Hear From Our Clients.
              </h2>
            </div>
            {/* /-- Header -- */}

            <div className="c-testimonials__wrap">
              {/* <TestimonialsCarousel texts={} /> */}
            </div>
          </div>
        </div>
      </section>
      {/* <--! End Testimonials Section --> */}
    </>
  );
}
