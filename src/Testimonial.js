import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };


  return (

    <div className='testimonial-element'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                <h5 class="small-title">OUR testimonial</h5>
                <h2 class="sub-title">What our clients say</h2>
                </div>
                <div className='col-lg-9'>
                <Slider {...settings}>
                <div className='testimonial-box'>
                    <p>We wouldn’t have such great product quality and design if it weren’t for them. Our customers and we are always satisfied at the end, and Devolfs always delivers excellent results.</p>
               <div className='author-block'>
               <div className='author-image'>
                    <img src='assets/image/_static_images_author-img.png'/>
               </div>
               <div class="author-text">
               <h4>Kraemer Deo</h4>
               <span>Houseowner</span>
               </div>
               </div>
                    
                    </div>
                    <div className='testimonial-box'>
                    <p>We wouldn’t have such great product quality and design if it weren’t for them. Our customers and we are always satisfied at the end, and Devolfs always delivers excellent results.</p>
               <div className='author-block'>
               <div className='author-image'>
                    <img src='assets/image/_static_images_author-img.png'/>
               </div>
               <div class="author-text">
               <h4>Kraemer Deo</h4>
               <span>Houseowner</span>
               </div>
               </div>
                    
                    </div>
               
              </Slider>
                </div>
            </div>
        </div>
    </div>




  )
}

export default Testimonial