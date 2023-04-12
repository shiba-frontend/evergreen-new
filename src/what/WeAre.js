import React,{useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "../Counter";
import Testimonial from "../Testimonial";
gsap.registerPlugin(ScrollTrigger);

const WeAre = () => {


  return (
    <div className="weare-section">
      <div className="container">
        <div className="row animatebox">
          <div className="col-lg-6">
            <div className="feature-img" data-aos="zoom-in">
              <img src="assets/image/_static_images_service-feature-img.png" className="w-100 " />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-block text-animatewe" data-aos="zoom-in-up">
              <h5 class="small-title titleText">WHAT WE PROVIDE</h5>
              <h2 class="sub-title">Evergreen wide range of services</h2>
              <p>
                Our company provides a wide range of services, including Solar
                Home improvement, Roofing, Firepit, Landscaping and Water and
                gas intakes restoration of existing concrete, stamping,
                staining, and decorative finishes, cutting and demolition
                services, sealing, and maintenance. We're dedicated to providing
                high-quality workmanship and eco-friendly practices that ensure
                your satisfaction.
              </p>
              <div class="btn-block">
                <a class="primary-btn" href="/">
                  EXPLORE SERVICES<span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter/>
      <Testimonial/>
    </div>
  );
};

export default WeAre;
