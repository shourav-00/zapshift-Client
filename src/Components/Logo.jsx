import React from 'react';
import logo from '../../public/Resources/Images/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="Logo" />
            <h2 className='text-[#303030] text-2xl font-bold ml-[-15px]'>ZapShift</h2>
           
        </div>
    );
};

export default Logo;