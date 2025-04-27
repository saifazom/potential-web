import React from "react";
import { Link } from "react-router";
import CircleCursor from "~/components/cursorForBox";

const caseStudyVideos = [
  {
    src: "https://cuberto.com/assets/projects/riyadh/cover.mp4",
    title: "Clypt - AI Crypto trading",
    caption: "Web Application",
  },
  {
    src: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
    title: "Clypt - AI Crypto trading",
    caption: "Web Application",
  },
  {
    src: "https://cuberto.com/assets/projects/qvino/cover.mp4",
    title: "Clypt - AI Crypto trading",
    caption: "Web Application",
  },
  {
    src: "https://cuberto.com/assets/projects/daoway/cover.mp4",
    title: "Clypt - AI Crypto trading",
    caption: "Web Application",
  },
  {
    src: "https://cuberto.com/assets/projects/flipaclip/cover.mp4",
    title: "Clypt - AI Crypto trading",
    caption: "Web Application",
  },
  {
    src: "https://cuberto.com/assets/projects/magma/cover.mp4?2",
    title: "Clypt - AI Crypto trading",
    caption: "Web Application",
  },
];
const SectionCaseStudies = () => {
  return (
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
          <div className="c-case-studies__body">
            {[0, 2, 4].map((rowIdx) => (
              <div className="c-case-study__wrap" key={rowIdx}>
                {[0, 1].map((colIdx) => {
                  const idx = rowIdx + colIdx;
                  const video = caseStudyVideos[idx];
                  if (!video) return null;
                  return (
                    <div className="c-case-study__col" key={idx}>
                      <div className="c-case-study__box">
                        <CircleCursor />
                        <div
                          className="c-case-study__video cursor-box fadeInUp"
                          onMouseEnter={(e) => {
                            const videoEl = e.currentTarget.querySelector(
                              "video"
                            ) as HTMLVideoElement;
                            if (videoEl) {
                              videoEl.play().catch((err) => {
                                console.warn("Play error:", err);
                              });
                            }
                          }}
                          onMouseLeave={(e) => {
                            const videoEl = e.currentTarget.querySelector(
                              "video"
                            ) as HTMLVideoElement;
                            if (videoEl) {
                              videoEl.pause();
                            }
                          }}
                        >
                          <video
                            src={video.src}
                            muted
                            playsInline
                            preload="auto"
                          ></video>
                        </div>
                        <div className="c-case-study__caption">
                          <h3 className="fadeInUp">
                            <strong>{video.title.split(" - ")[0]}</strong> -{" "}
                            {video.title.split(" - ")[1]}
                          </h3>
                          <p className="fadeInUp">{video.caption}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
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
  );
};

export default SectionCaseStudies;
