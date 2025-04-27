import React, { Suspense, lazy } from "react";
const HeadlineCaro = lazy(() => import("~/components/HeadlineCarousel"));

const SectionHeadlineCarousel = () => {
  return (
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
  );
};

export default SectionHeadlineCarousel;
