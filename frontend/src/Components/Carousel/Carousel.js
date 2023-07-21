import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Pic1 from'../../Assets/savelife.webp'
import Pic2 from '../../Assets/donateblood.jpg'
import Pic3 from '../../Assets/abc.jpg'

import './carousel.css'
function Carousel() {
    var settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
     <div className='carousel'>
        
     <Slider  {...settings}>
     
      <div>
      <img src={Pic1} className="Slider-img" alt=''/>
      </div>
      <div>
      <img src={Pic2} className="Slider-img" alt=''/>
      </div>
      <div>
      <img src={Pic3} className="Slider-img"  alt=''/>
      </div>
      
      
    </Slider>
     </div>
    </>
   
  )
}

export default Carousel