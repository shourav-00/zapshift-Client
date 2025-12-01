import React from "react";
import img from "../../../public/Resources/service.png";

const OurHelps = () => {
  return (
    <div className="my-10 py-[14px] px-[32px] ">
      <div className="bg-[#03373d] rounded-2xl py-10">
        <div className="text-center">
          <h2 className="text-white pt-10 text-2xl">Our Services</h2>
          <p className="text-white py-5 max-w-3xl mx-auto break-words max-w-[250px]">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-between items-center gap-5 sm:gap-3 md:gap-8 text-center px-5 md:px-10 mt-10">

          <div className="bg-gray-200 hover:bg-[#c9eb65] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105 min-h-[250px] ">
            <div className="flex justify-center items-center">
                <img className="mb-2 " src={img} alt="" />
            </div>
            
            <h3 className="my-3 font-bold text-center max-w-[200px] mx-auto break-words">Express & Standard Delivery</h3>
            <p className="text-[#03373D] text-sm">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-gray-200 hover:bg-[#c9eb65] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105 min-h-[250px]">
            <div className="flex justify-center items-center">
                <img className="mb-2 " src={img} alt="" />
            </div>
            
            <h3 className="my-3 font-bold text-center max-w-[200px] mx-auto break-words">Nationwide Delivery</h3>
            <p className="text-[#03373D] text-sm">
             We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.
            </p>
          </div>
          <div className="bg-gray-200 hover:bg-[#c9eb65] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105 min-h-[250px]">
            <div className="flex justify-center items-center">
                <img className="mb-2 " src={img} alt="" />
            </div>
            
            <h3 className="my-3 font-bold text-center max-w-[200px] mx-auto break-words">Fulfillment Solution</h3>
            <p className="text-[#03373D] text-sm">
             We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
            </p>
          </div>
           <div className="bg-gray-200 hover:bg-[#c9eb65] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105 min-h-[250px]">
            <div className="flex justify-center items-center">
                <img className="mb-2 " src={img} alt="" />
            </div>
            
            <h3 className="my-3 font-bold text-center max-w-[200px] mx-auto break-words">Cash on Home Delivery</h3>
            <p className="text-[#03373D] text-sm">
              100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
            </p>
          </div>
           <div className="bg-gray-200 hover:bg-[#c9eb65] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105 min-h-[250px]">
            <div className="flex justify-center items-center">
                <img className="mb-2 " src={img} alt="" />
            </div>
            
            <h3 className="my-3 font-bold text-center max-w-[200px] mx-auto break-words">Corporate Service / Contract In Logistics</h3>
            <p className="text-[#03373D] text-sm">
Customized corporate services which includes warehouse and inventory management support.
            </p>
          </div>
           <div className="bg-gray-200 hover:bg-[#c9eb65] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105 min-h-[250px]">
            <div className="flex justify-center items-center">
                <img className="mb-2 " src={img} alt="" />
            </div>
            
            <h3 className="my-3 font-bold text-center max-w-[200px] mx-auto break-words">Parcel Return</h3>
            <p className="text-[#03373D] text-sm">
             Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHelps;
