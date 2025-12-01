import React from 'react';
import Home_Slider from '../Components/HomeComp/Home_Slider';
import HowItWorks from '../Components/HomeComp/HowItWorks';
import OurHelps from '../Components/HomeComp/OurHelps';

const HomePage = () => {
    return (
        <div>
            {/* Slider Section */}
            <Home_Slider/>
            {/* How It Works  */}
            <HowItWorks/>
            {/* Our Helps  */}
            <OurHelps/>

            
            
        </div>
    );
};

export default HomePage;