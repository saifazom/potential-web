import React from "react";
import { Link } from "react-router";

const SectionCTA = () => {
  return (
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
  );
};

export default SectionCTA;
