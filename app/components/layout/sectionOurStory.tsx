import React, { Suspense, lazy } from "react";
const HeadlineCaro2 = lazy(() => import("~/components/HeadlineCarousel2"));
import { storyImg1, storyImg2, storyImg3 } from "~/utils/ImageComponent";

const SectionOurStory = () => {
  return (
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
  );
};

export default SectionOurStory;
