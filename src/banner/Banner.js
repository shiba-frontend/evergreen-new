import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {

    useEffect(() => {

        const t1 = gsap.timeline();
        t1.to(".animate-text",{
            opacity:1,
            delay:1,
            duration:1.8,
        })

      }, []);


  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="banner-text">
              <h2 className="title-text animate-text">
                Creating a <span>greener <br/> tomorrow </span> through expert
                landscaping and <span> solar <br/> panel benefits </span> today.
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="img-block">
              <img
                src="assets/image/_static_images_banner-img.png"
                className="main-img"
              />
              <div className="round-btn">
                <img
                  src="assets/image/_static_images_round-text.png"
                  className="rotate-img"
                />
                <span class="arrow-icon">
                  <img src="assets/image/_static_images_arrow-right.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="bottom-text">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-6">
                  <div class="text-box">
                    <h3>home improvement</h3>
                    <a href="/#">Agency</a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="text-box">
                    <h3>Say Hello</h3>
                    <a href="/#">Hello@evergreen.com</a>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12 offset-lg-1">
                  <div class="text-box">
                    <p>
                      Our team is focused on improving greener tomorrow through
                      expert landscaping and solar panel benefits today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
