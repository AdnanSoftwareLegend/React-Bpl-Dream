import React from 'react';

import logoImg from '../assets/logo.png'

import coinImg from '../assets/image.png'

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar  max-w-[1000px] mx-auto ">
        <div className="flex-1">
          <a className="text-xl">
          
           <img className="w-[60px] h-[60px] p-[5px]" src={logoImg} alt="" />

          </a>
        </div>
        <div className="flex items-center gap-2">
         <span>{availableBalance}</span>
         <span>coin</span>
         <img className="w-[20px] h-[20px]" src={coinImg} alt="" />
        </div>
      </div>

        </div>
    );
};

export default Navbar;