import React from "react";
/////importing images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    ///when we import the element to other page its length becomes inline not block
    <header className="py-8 lg:pb-12">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          {/* inserting logo */}
          <a href='#'>
            {/* <img src={Logo} alt='' /> */}
            {/* <div className="text-gradient leading-6 text-[23px] font-extrabold"><span>ISHA</span><br/> <span className="text-white/80">GUPTA</span></div> */}
          </a>
          {/* inserting button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
