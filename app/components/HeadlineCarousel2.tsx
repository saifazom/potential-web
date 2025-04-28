import React from "react";
import Marquee from "react-fast-marquee";

export default function HeadlineCaro2() {
  return (
    <Marquee speed={60} pauseOnHover gradient={false}>
      <div className="c-our-story__title u-title">
        <h2>Stories That Inspire -</h2>
        <div className="c-our-story__video u-title-video">
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
    </Marquee>
  );
}
