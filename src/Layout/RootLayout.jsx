import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-[#EAECED]">
      <Navbar />
      <main className="max-w-7xl mx-auto not-odd:flex-1 ">
        <div className="">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
