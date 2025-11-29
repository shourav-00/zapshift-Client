import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import CircleArrow from "./CircleArrow";

const Navbar = () => {
  return (
    <nav className="py-[14px] px-[32px] m-5 bg-[#ffffff] rounded-2xl h-[86px]">
      <div className="flex justify-between items-center gap-10">
        <Logo />
        <div className="text-[#606060] flex justify-center items-center gap-[36px]">
          <NavLink>Services</NavLink>
          <NavLink>Coverage</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="btn btn-soft rounded-[12px]">Sign In</button>
          <div className="flex justify-center items-center">
            <button className="btn bg-[#CAEB66] rounded-[12px]">Sign Up</button>

            <span className="w-10 h-10 bg-black rounded-full relative">
           
            <CircleArrow/>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
