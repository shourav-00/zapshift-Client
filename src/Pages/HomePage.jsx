import React from "react";
import Home_Slider from "../Components/HomeComp/Home_Slider";
import HowItWorks from "../Components/HomeComp/HowItWorks";
import OurHelps from "../Components/HomeComp/OurHelps";
import Company from "../Components/HomeComp/Company";

const HomePage = () => {
  return (
    <div>
      {/* Slider Section */}
      <Home_Slider />
      {/* How It Works  */}
      <HowItWorks />
      {/* Our Helps  */}
      <OurHelps />
      {/* Company  */}
      <Company />
    </div>
  );
};

export default HomePage;
