import React from "react";
import { AchievementCounter } from "~/components/AchievementCounter";

const SectionAchievements = () => {
  return (
    <section id="achievements" className="o-section o-section--achievements">
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
  );
};

export default SectionAchievements;
