import React,{useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WeAre = () => {

    useEffect(() => {
        const text = document.querySelectorAll('.text-animatewe > *')
        const tl = gsap.timeline().to('.feature-img', {y: -30}).fromTo(text, {y: 30}, {y: 0, stagger: 0.3})

        ScrollTrigger.create({
            trigger: '.weare-section',
            animation: tl,
            pin: true,
            start: 'top top',
            end: '+=1200 bottom',
            scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
            markers: true,
        })
      }, []);


  return (
    <div className="weare-section">
      <div className="container">
        <div className="row animatebox">
          <div className="col-lg-6">
            <div className="feature-img">
              <img src="assets/image/_static_images_service-feature-img.png" className="w-100 " />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-block text-animatewe">
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
      <svg
        width="100%"
        viewBox="0 0 1920 700"
        fill="none"
        class="keplr-animation-lines"
      >
        <path
          d="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65  285 1797.76 143.751 1921 1.00002"
          stroke="url(#lines-path)"
          vector-effect="non-scaling-stroke"
        ></path>
        <path
          d="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
          stroke="url(#lines-path)"
          vector-effect="non-scaling-stroke"
        ></path>
        <path
          d="M1 354H1921"
          stroke="url(#lines-path)"
          vector-effect="non-scaling-stroke"
        ></path>
        <path
          d="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
          stroke="url(#lines-path)"
          vector-effect="non-scaling-stroke"
        ></path>
        <path
          d="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
          stroke="url(#lines-path)"
          vector-effect="non-scaling-stroke"
        ></path>
        <line
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          stroke="url(#lines-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          transform="translate(-80,0)"
          vector-effect="non-scaling-stroke"
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002"
            rotate="auto"
            begin="1"
          ></animateMotion>
        </line>
        <line
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          stroke="url(#lines-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          transform="translate(-80,0)"
          vector-effect="non-scaling-stroke"
        >
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
            rotate="auto"
            begin="5"
          ></animateMotion>
        </line>
        <line
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          stroke="url(#lines-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          transform="translate(-80,0)"
          vector-effect="non-scaling-stroke"
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M1 354H1921"
            rotate="auto"
            begin="3"
          ></animateMotion>
        </line>
        <line
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          stroke="url(#lines-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          transform="translate(-80,0)"
          vector-effect="non-scaling-stroke"
        >
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
            rotate="auto"
            begin="2"
          ></animateMotion>
        </line>
        <line
          x1="0"
          y1="0"
          x2="80"
          y2="0"
          stroke="url(#lines-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          transform="translate(-80,0)"
          vector-effect="non-scaling-stroke"
        >
          <animateMotion
            dur="4.5s"
            repeatCount="indefinite"
            path="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
            rotate="auto"
            begin="0"
          ></animateMotion>
        </line>
        <defs>
          <linearGradient
            id="lines-gradient"
            x1="0"
            y1="0"
            x2="80"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="transparent " offset="0"></stop>
            <stop stop-color="white" offset="1"></stop>
          </linearGradient>
          <linearGradient
            id="lines-path"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="transparent" offset="0%"></stop>
            <stop stop-color="#07BEB8" offset="10%"></stop>
            <stop stop-color="#07BEB8" offset="90%"></stop>
            <stop stop-color="transparent" offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WeAre;
