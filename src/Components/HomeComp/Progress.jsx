import React from "react";
import img from "../../../public/Resources/live-tracking.png";
import img2 from "../../../public/Resources/safe-delivery.png";
import img3 from "../../../public/Resources/customer-top.png";

const Progress = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex flex-col justify-center items-center gap-5">

        <div className="bg-white flex flex-col sm:flex-row  sm:justify-center sm:items-center p-4 sm:p-8">
            <div className=" flex justify-center items-center">
                 <img className="md:h-[200px] sm:w-[200px] h-[70px] w-[70px]" src={img} alt="" />
            </div>
        

         <div className="mx-4 sm:mx-8 h-5 sm:h-50">
             <span className="block border-b-2 sm:border-l-2 border-dotted border-[#03373D] h-full"></span>
        </div>

          <div>
            <h2 className="text-[#03373D] mt-5 sm:mt-0 font-bold text-md text-center sm:text-left">Live Parcel Tracking</h2>
            <p className="text-md mt-3 text-center sm:text-left">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

  <div className="bg-white flex flex-col sm:flex-row  sm:justify-center sm:items-center p-4 sm:p-8">
            <div className=" flex justify-center items-center">
                 <img className="md:h-[200px] sm:w-[200px] h-[70px] w-[70px]" src={img2} alt="" />
            </div>
        

         <div className="mx-4 sm:mx-8 h-5 sm:h-50">
             <span className="block border-b-2 sm:border-l-2 border-dotted border-[#03373D] h-full"></span>
        </div>

          <div>
            <h2 className="text-[#03373D] mt-5 sm:mt-0 font-bold text-md text-center sm:text-left">100% Safe Delivery</h2>
            <p className="text-md mt-3 text-center sm:text-left">
              We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>



         <div className="bg-white flex flex-col sm:flex-row  sm:justify-center sm:items-center p-4 sm:p-8">
            <div className=" flex justify-center items-center">
                 <img className="md:h-[200px] sm:w-[200px] h-[70px] w-[70px]" src={img3} alt="" />
            </div>
        

         <div className="mx-4 sm:mx-8 h-5 sm:h-50">
             <span className="block border-b-2 sm:border-l-2 border-dotted border-[#03373D] h-full"></span>
        </div>

          <div>
            <h2 className="text-[#03373D] mt-5 sm:mt-0 font-bold text-md text-center sm:text-left">24/7 Call Center Support</h2>
            <p className="text-md mt-3 text-center sm:text-left">
             Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>
       

       <div className=" my-15 w-11/12 mx-auto">
             <span className=" block border-b-2 border-dotted  border-[#03373D] "></span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
