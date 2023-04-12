import React,{useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Services = () => {
 
    return (
        <div className='services-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='services-text-block' data-aos="fade-left">
                            <h5 className='small-title title1'>ROOFING SERVICES</h5>
                            <h2 className='sub-title title2'>Need roofing <br/> services?</h2>
                            <p className='title3'>We got you covered. Our comprehensive construction services include</p>
                            <ul className='listed'>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    Roof repair
                                </li>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    Home exterior
                                </li>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    Roof replacement
                                </li>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    Home remodeling
                                </li>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    New construction
                                </li>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    Commercial construction.
                                </li>
                                <li>
                                    <span>
                                        <img src='assets/image/_static_images_check-circle-icon.png' />
                                    </span>
                                    Home additions
                                </li>
                            </ul>
                            <div class="bottom-text"><p>With our expertise and experience, we can handle all aspects of roofing while ensuring customer satisfaction.</p>
                            <div class="btn-block">
                            <a class="primary-btn" href="/#">EXPLORE SERVICES<span></span>
                            </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='service-img'>
                            <img data-aos="fade-right" src='assets/image/_static_images_frs-feature-img.png' className='w-100 serviceimg' />
                            <div className='lt-img' data-aos="zoom-in">
                            <img  src='assets/image/_static_images_frs-lt-img.png'/>
                            </div>
                            <div className='rt-img' data-aos="zoom-in">
                            <img src='assets/image/_static_images_frs-rt-img.png'/>
                            </div>
                            <div className='bottom-img' data-aos="zoom-in">
                            <img src='assets/image/_static_images_frs-small-img.png'/>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="stroke-text">
            <img src='assets/image/_static_images_stroke-text.png' className="w-100"  />
           
            </div>
        </div>
    )
}

export default Services