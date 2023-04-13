import React, { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Video = () => {

  const [play, setplay] = useState(false)
  var vid = document.getElementById("myVideo");

const VideoHandler = () =>{ 
  setplay(true);
}


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
<>
{
    !play ? 
    <div className="video-element">
      <div className="container">
    
        <div className="video-feature">
          <div className="round-btn" onClick={VideoHandler}>
            <img
              src="assets/image/_static_images_play-text.png"
              className="rotate-img"
            />
            <span class="arrow-icon">
              <img src="assets/image/_static_images_play-icon.png" />
            </span>
          </div>
          <img src="assets/image/_static_images_video-img.png" className="main-a-image" />
        </div>
   
      </div>
    </div>
  
    :
    <div className="video">
    <video width="100%" height="700" id="myVideo" autoPlay muted >
      <source src="assets/image/video-3.mp4" type="video/mp4"/>
      <source src="assets/image/video-3.mp4" type="video/ogg"/>
    </video>
  </div>
}
<div className="container">
   <div class="content-field">
    <div class="row align-items-center">
      <div class="col-lg-5 col-md-12">
        <div
          class="lt-text"
          data-aos="fade-left"
        >
          <h5 class="small-title">EVERGREEN</h5>
          <h2 class="sub-title">
            Looking for expert <br/> home improvement <br/> services?
          </h2>
        </div>
      </div>
      <div class="col-lg-7 col-md-12">
        <div
          class="rt-text"
          data-aos="fade-right"
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
   

  </>
  );
};

export default Video;
