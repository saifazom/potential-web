import React from "react";

const SectionGridVideo = () => {
  return (
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
  );
};

export default SectionGridVideo;
