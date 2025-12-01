import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../../public/Resources/banner/banner1.png'
import img2 from '../../../public/Resources/banner/banner2.png'
import img3 from '../../../public/Resources/banner/banner3.png'


const Home_Slider = () => {
  return (
 
    <Carousel 
    autoPlay={true}
    infiniteLoop={true}
    interval={2000}
    showThumbs={false}
    showStatus={false}
    renderArrowPrev={() => null}
    renderArrowNext={()=> null}


    className="py-[14px] px-[32px]"
    >
        
      <div className="">
        <img src={img} />
       
       
      </div>
      <div>
        <img src={img2} />
    
      </div>
      <div>
        <img src={img3} />
       
      </div>
    
    </Carousel>
     
  );
};

export default Home_Slider;
