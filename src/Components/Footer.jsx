import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import logo from "../../public/assets/linkedin-icon 2.png";
import logo1 from "../../public/assets/twitter-logo-2 3.png";
import logo2 from "../../public/assets/unnamed (2).webp";
import logo3 from "../../public/assets/fi_3670209.png";

const Footer = () => {
  return (
    <div className="bg-black rounded-2xl py-[14px] px-[32px] m-3 md:m-5 mb-5">
      <div className="p-[32px]">
        <div className=" flex flex-col justify-center items-center ">
          <Logo />
          <p className="text-white mt-3 max-w-[750px] mx-auto text-center leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="w-full my-10">
            <p className="border-1 border-dashed border-[#03464D]"></p>
            <div className="my-3 text-white grid justify-center items-center grid-cols-3 md:grid-cols-6 gap-5 md:gap-2 py-5 text-center">
              <NavLink to="services">Services</NavLink>
              <NavLink to="coverage">Coverage</NavLink>
              <NavLink to="aboutUs" className="whitespace-nowrap">About Us</NavLink>
              <NavLink to="pricing">Pricing</NavLink>
              <NavLink to="blog">Blog</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <p className="border-1 border-dashed border-[#03464D]"></p>
          </div>

          <div className="my-3 text-white flex justify-center items-center gap-5">
            <img className="w-5 h-5 rounded-full "src={logo} alt="Logo Coming" />
            <img className="w-5 h-5 rounded-full" src={logo1} alt="Logo Coming" />
            <img className="w-5 h-5 rounded-full" src={logo2} alt="Logo Coming" />
            <img className="w-5 h-5 rounded-full" src={logo3} alt="Logo Coming" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
