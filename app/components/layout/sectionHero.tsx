import React from "react";
import {
  clientImg1,
  clientImg2,
  clientImg3,
  Overlay,
  heroIcon1,
  heroIcon2,
} from "~/utils/ImageComponent";

const SectionHero = () => {
  return (
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
                    Trusted by businesses worldwide for <strong>speed</strong>,
                    precision, and results-driven solutions.
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
  );
};

export default SectionHero;
