import React from "react";

import img from "../../../public/Resources/brands/casio.png";
import img2 from "../../../public/Resources/brands/amazon_vector.png";
import img3 from "../../../public/Resources/brands/moonstar.png";
import img4 from "../../../public/Resources/brands/start.png";
import img5 from "../../../public/Resources/brands/start-people 1.png";
import img6 from "../../../public/Resources/brands/randstad.png";
import Marquee from "react-fast-marquee";

const Company = () => {
  return (
    <div className="py-[14px] px-[32px] my-5">
      <p className="text-center font-bold text-2xl text-[#03373D]">
        We've helped thousands of sales teams
      </p>
          <Marquee pauseOnClick={true}
          speed={30}>
      <div className="mt-15 flex justify-center items-center gap-15">
    
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        
      </div>
      </Marquee>
    </div>
  );
};

export default Company;
