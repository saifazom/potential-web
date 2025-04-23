import type { Route } from "../pages/+types/home";
import { Link } from "react-router";
import React, { Suspense, lazy } from "react";
const HeadlineCaro = lazy(() => import("~/components/HeadlineCarousel"));
const HeadlineCaro2 = lazy(() => import("~/components/HeadlineCarousel2"));
const ClientsLogo = lazy(() => import("~/components/clientsLogoMarquee"));
import { TestimonialsCarousel } from "~/components/TestimonialsCarousel";
import { AchievementCounter } from "~/components/AchievementCounter";
import PageWithAnimations from "~/components/gsapAnim";
import CircleCursor from "~/components/cursorForBox";
import {
  clientImg1,
  clientImg2,
  clientImg3,
  Overlay,
  heroIcon1,
  heroIcon2,
  accourdionImg1,
  storyImg1,
  storyImg2,
  storyImg3,
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
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <>
      <PageWithAnimations />

      <section id="hero" className="o-section o-section--hero">
        <div className="c-hero">
          <div className="container mx-auto">
            <div className="c-hero__content">
              <div className="c-hero__text-box">
                <h1 className="c-hero__title fadeInUp">
                  Build and Scale Custom Software 3x Faster.
                </h1>

                <div className="c-cp-box fadeInUp">
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
              <div className="c-hero__video fadeInUp">
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
                <div className="c-hero-footer__top fadeInUp">
                  <div className="c-hero-footer__icon">
                    <img src={heroIcon1} alt="Hero Icon1" />
                    HQ: South Korea
                  </div>
                  <div>Servicing Earth</div>
                </div>
                <div className="fadeInUp">
                  <p>
                    Potential is a global Design and Development Agency. Helping
                    Brands redefine experiences and empower business growth.
                  </p>
                </div>
              </div>
              <div className="c-hero-footer__col">
                <div className="c-hero-footer__title fadeInUp">
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
              className="c-grid-video__box max-h-[1070px] fadeInUp"
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
              className="c-grid-video__box max-h-[519px] fadeInUp"
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
              className="c-grid-video__box max-h-[519px] fadeInUp"
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
          <h2 className="c-clients-logo__title fadeInUp">
            <strong>Over 100+</strong> companies trust us
          </h2>

          <div className="fadeInUp">
            <Suspense fallback={<div className="flex-center">Loading...</div>}>
              <ClientsLogo />
            </Suspense>
          </div>
        </div>
      </section>
      {/* <--! End CLient Logo Section --> */}

      <section id="achievements" className="o-section o-section--achievements ">
        <div className="c-achievements">
          <div className="container mx-auto">
            <div className="c-achievements-header">
              <h3 className="u-small-title fadeInUp">our achievements</h3>
              <div className="u-title max-w-4xl fadeInUp">
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
                <div className="c-achievements__video fadeInUp">
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
        <div className="c-headline-carousel fadeInUp">
          <Suspense fallback={<div>Loading...</div>}>
            <HeadlineCaro />
          </Suspense>
        </div>
      </section>
      {/* <--! End Headline Slider Section --> */}

      <section id="case-studies" className="o-section o-section--case-studies">
        <div className="c-case-studies">
          <div className="container mx-auto">
            <div className="c-case-studies__header">
              <h3 className="u-small-title fadeInUp">our Case Studies</h3>
              <div className="u-title fadeInUp">
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
                  <CircleCursor />
                  <div
                    className="c-case-study__video cursor-box fadeInUp"
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
                  <div className="c-case-study__caption">
                    <h3 className="fadeInUp">
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p className="fadeInUp">Web Application</p>
                  </div>
                </div>
              </div>

              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <CircleCursor />
                  <div
                    className="c-case-study__video cursor-box fadeInUp"
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
                    <h3 className="fadeInUp">
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p className="fadeInUp">Web Application</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /-- Video Row -- */}
            <div className="c-case-study__wrap">
              <div className="c-case-study__col ">
                <div className="c-case-study__box">
                  <CircleCursor />
                  <div
                    className="c-case-study__video cursor-box fadeInUp"
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
                    <h3 className="fadeInUp">
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p className="fadeInUp">Web Application</p>
                  </div>
                </div>
              </div>

              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <CircleCursor />
                  <div
                    className="c-case-study__video cursor-box fadeInUp"
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
                    <h3 className="fadeInUp">
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p className="fadeInUp">Web Application</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /-- Video Row -- */}
            <div className="c-case-study__wrap">
              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <CircleCursor />
                  <div
                    className="c-case-study__video cursor-box fadeInUp"
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
                    <h3 className="fadeInUp">
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p className="fadeInUp">Web Application</p>
                  </div>
                </div>
              </div>

              <div className="c-case-study__col">
                <div className="c-case-study__box">
                  <CircleCursor />
                  <div
                    className="c-case-study__video cursor-box fadeInUp"
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
                    <h3 className="fadeInUp">
                      <strong>Clypt</strong> - AI Crypto trading
                    </h3>
                    <p className="fadeInUp">Web Application</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /-- Video Row -- */}

            <div className="text-center fadeInUp">
              <Link to="/" className="c-case-study__button">
                <span>View all cases</span>
              </Link>
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
            <div className="c-expertise-area__header">
              <h3 className="u-small-title fadeInUp">Our expertise areas</h3>
              <h2 className="u-title fadeInUp">
                Tailored Software, Built by Experts to Drive 10x Growth.
              </h2>
            </div>
            {/* /-- Header -- */}

            <Accordion type="single" collapsible className="c-accordion">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="c-accordion__item fadeInUp"
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

                        <Link to="/" className="c-accordion__btn u-button">
                          Learn More
                        </Link>
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
        <div className="c-headline-carousel c-headline-carousel--2 fadeInUp">
          <Suspense fallback={<div className="flex-center">Loading...</div>}>
            <HeadlineCaro />
          </Suspense>
        </div>
      </section>
      {/* <--! End Headline Carosel Section2 --> */}

      <section id="testimonials" className="o-section o-section--testimonials">
        <div className="c-testimonials">
          <div className="container mx-auto">
            <div className="c-testimonials__header">
              <h3 className="u-small-title fadeInUp">
                our Clients love about us
              </h3>
              <h2 className="u-title fadeInUp">
                Stories of Success: Hear From Our Clients.
              </h2>
            </div>
            {/* /-- Header -- */}

            <div className="c-testimonials__wrap">
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
      </section>
      {/* <--! End Testimonials Section --> */}

      <section id="our-story" className="o-section o-section--our-story">
        <div className="c-our-story">
          <div className="container mx-auto">
            <div className="c-headline-carousel__wrap">
              <div className="c-our-story__header fadeInUp">
                <Suspense fallback={<div>Loading...</div>}>
                  <HeadlineCaro2 />
                </Suspense>
              </div>
            </div>
            {/* /-- Header -- */}

            <div className="c-our-story__wrap">
              <div className="c-our-story__col">
                <div className="c-our-story__img fadeInUp">
                  <img src={storyImg1} alt="Story Img 1" />
                </div>
                <div className="c-our-story__text fadeInUp">
                  <h4>The Future of Digital Design: Trends to Watch in 2024</h4>
                </div>
              </div>
              <div className="c-our-story__col">
                <div className="c-our-story__img fadeInUp">
                  <img src={storyImg2} alt="Story Img 2" />
                </div>
                <div className="c-our-story__text fadeInUp">
                  <h4>Our Story: A Journey of Innovation and Growth.</h4>
                </div>
              </div>
              <div className="c-our-story__col">
                <div className="c-our-story__img fadeInUp">
                  <img src={storyImg3} alt="Story Img 3" />
                </div>
                <div className="c-our-story__text fadeInUp">
                  <h4>The Future of Digital Design: Trends to Watch in 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--! End Our Story Section --> */}

      <section id="cta" className="o-section o-section--cta">
        <div className="c-cta">
          <div className="container mx-auto">
            <div className="c-cta__wrap">
              <div className="c-cta__text">
                <h2 className="c-cta__title fadeInUp">Let’s Chat</h2>
                <div className="fadeInUp">
                  <p>
                    Connect with us to launch high-impact software solutions
                    quickly and efficiently.
                  </p>
                </div>
              </div>
              <Link to="#" className="c-cta__button fadeInUp"></Link>
            </div>
          </div>
        </div>
      </section>
      {/* <--! End CTA Section --> */}
    </>
  );
}
