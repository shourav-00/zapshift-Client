import React from 'react';
import truckLogo from '../../../public/assets/TruckLogo.png'
const HowItWorks = () => {
    return (
        <div className='py-[14px] px-[32px] my-5'>
            <h2 className='text-[#03373D] font-bold text-2xl mb-8'>How It Works</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-between items-center gap-5 sm:gap-3 md:gap-8 text-center sm:text-left'>
                 <div className="bg-gray-200 hover:bg-[#def2a2] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105">
                    <img className='mb-2' src={truckLogo} alt="" />
                    <h3 className='mb-2 font-semibold'>Booking Pick & Drop</h3>
                    <p className='text-[#03373D] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                 <div className="bg-gray-200 hover:bg-[#def2a2] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105">
                    <img className='mb-2' src={truckLogo} alt="" />
                    <h3 className='mb-2 font-semibold'>Cash On Delivery</h3>
                    <p className='text-[#03373D] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                  <div className="bg-gray-200 hover:bg-[#def2a2] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105">
                    <img className='mb-2' src={truckLogo} alt="" />
                    <h3 className='mb-2 font-semibold'>Delivery Hub</h3>
                    <p className='text-[#03373D] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                   <div className="bg-gray-200 hover:bg-[#def2a2] shadow-md transition-all duration-300 ease-in-out rounded-2xl p-5 hover:scale-105">
                    <img className='mb-2' src={truckLogo} alt="" />
                    <h3 className='mb-2 font-semibold'>Booking SME & Corporate</h3>
                    <p className='text-[#03373D] text-md'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;