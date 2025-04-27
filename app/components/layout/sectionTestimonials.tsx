import React from "react";
import { TestimonialsCarousel } from "~/components/TestimonialsCarousel";

const SectionTestimonials = () => {
  return (
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
  );
};

export default SectionTestimonials;
