import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import CircleArrow from "./CircleArrow";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="py-[14px] px-[32px] m-3 md:m-5 bg-[#ffffff] rounded-2xl h-[86px] ">
      <div className="flex justify-between items-center gap-5 lg:gap-5">
        <NavLink to='/'> <Logo /></NavLink>
       
        <div className="text-[#606060] hidden lg:flex justify-center items-center  lg:gap-[12px] mt-[5px]">
          <NavLink to='services'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 hover:bg-gray-300  px-4 py-2 rounded-2xl'}
          >Services</NavLink>
          <NavLink to='coverage'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl'}
          >Coverage</NavLink>
            <NavLink to='aboutUs'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl whitespace-nowrap' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 hover:bg-gray-300 py-2 rounded-2xl whitespace-nowrap'}
          >About Us</NavLink>
           <NavLink to='pricing'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66]  px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-2xl'}
          >Pricing</NavLink>

          <NavLink to='blog'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200  hover:bg-gray-300 px-4 py-2 rounded-2xl'}
          >Blog</NavLink>

          <NavLink to='contact'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl'}
          >Contact</NavLink>
         
         
    
       
        </div>
        <div className="hidden lg:flex justify-center items-center gap-3 mt-[5px]">
          <button className="btn btn-soft rounded-[12px]">Sign In</button>
          <div className="flex justify-center items-center">
            <button className="btn bg-[#CAEB66] rounded-[12px]">Sign Up</button>

            <span className="w-10 h-10 bg-black rounded-full relative">
              <CircleArrow />
            </span>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-5">
                <HiBars3 className="w-8 h-8 mt-[7px] text-[#1F1F1F]" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="bg-gray-100 min-h-full w-70 p-3">
                {/* Sidebar content here */}
                <div className="flex flex-col justify-center items-center pb-2 border-b-2 border-b-gray-400">
                  <Logo />
                </div>
                <div className="flex flex-col gap-3 mt-5 ml-5">
                  <NavLink to='services'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 rounded-2xl'}
          >Services</NavLink>
          <NavLink to='coverage'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 rounded-2xl'}
          >Coverage</NavLink>
            <NavLink to='aboutUs'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 rounded-2xl'}
          >About Us</NavLink>
           <NavLink to='pricing'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 rounded-2xl'}
          >Pricing</NavLink>

          <NavLink to='blog'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 rounded-2xl'}
          >Blog</NavLink>

          <NavLink to='contact'
            className={({isActive})=>

            isActive ? 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#CAEB66] px-4 py-2 rounded-2xl' : 'text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 rounded-2xl'}
          >Contact</NavLink>
         
                </div>

                <div className="flex flex-col justify-center items-end gap-3 p-3 mt-10">
                  <button className="btn btn-soft rounded-[12px] w-full">
                    Sign In
                  </button>

                  <button className="btn bg-[#CAEB66] rounded-[12px] w-full ">
                    Sign Up
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
