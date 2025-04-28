import React, { Suspense, lazy } from "react";
const HeadlineCaro = lazy(() => import("~/components/HeadlineCarousel"));

const SectionHeadlineCarousel2 = () => {
  return (
    <section
      id="headline-carousel2"
      className="o-section o-section--headline-carousel2"
    >
      <div className="c-headline-carousel c-headline-carousel--2 fadeInUp">
        <Suspense fallback={<div>Loading...</div>}>
          <HeadlineCaro />
        </Suspense>
      </div>
    </section>
  );
};

export default SectionHeadlineCarousel2;
