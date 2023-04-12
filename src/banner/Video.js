import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  useEffect(() => {

    gsap.to(".video-feature", {
      transform: "scale(1.1)",
      scrollTrigger: {
        trigger: ".video-feature",
        start: "top 70%",
        end: "bottom 10%",
        //pin: true,
        //markers: true,
        scrub: true,
        toggleActions: "play none none reset",
      },
    });

 




  }, []);

  return (
    <div className="video-element">
      <div className="container">
        <div className="video-feature">
          <div className="round-btn">
            <img
              src="assets/image/_static_images_round-text.png"
              className="rotate-img"
            />
            <span class="arrow-icon">
              <img src="assets/image/_static_images_arrow-right.png" />
            </span>
          </div>
          <img src="assets/image/_static_images_video-img.png" />
        </div>
        <div class="content-field">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12">
              <div
                class="lt-text"
               
              >
                <h5 class="small-title">EVERGREEN</h5>
                <h2 class="sub-title">
                  Looking for expert home improvement services?
                </h2>
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div
                class="rt-text"
                
              >
                <p>
                  You've come to the right place! Our team of professionals is
                  here to help you transform your home into the space of your
                  dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
