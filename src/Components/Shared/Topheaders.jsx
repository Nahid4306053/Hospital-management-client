import React from "react";
import { NavLink } from "react-router-dom";
import web_logo from "/SITE/website-logo.png";
export default function Topheaders() {
  return (
    <div className="bg-base-300 border-b py-3 border-gray-300">
      <div className="container mx-auto  ">
        <div className="flex justify-between">
          <div className="nav_logo flex-1 lg:block hidden">
            <NavLink to="/">
              <img className="h-14 " src={web_logo} alt="" />
            </NavLink>
          </div>
          <div className="nav_icons flex-1  px-2  flex lg:justify-end justify-between w-full items-center md:gap-20">
            <div className="icon socialICons flex items-center md:text-base text-xs gap-5 text-[#b9b9ba]">
              <a href="#"> <i className="fa-brands fa-skype"></i> </a> <a href="#"> <i className="fa-brands fa-square-facebook"></i> </a> <a href="#"> <i className="fa-brands fa-google-plus-g"></i> </a> <a href="#"> <i className="fa-brands fa-twitter"></i> </a> <a href="#"> <i className="fa-brands fa-vimeo-v"></i> </a> <a href="#"> <i className="fa-brands fa-youtube"></i> </a>
            </div>
            <div className="icon flex items-center  text-xs gap-12 mr-2 md:text-lg">
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="#">
                <i className="fa-regular fa-user"></i>
              </a>
              <a href="#" className="relative">
                <i className="fa-solid fa-basket-shopping"></i>
                <h1 className="absolute md:h-4 md:w-4 h-2 w-2 top-0 bg-sky-500 text-white text-[8px] md:text-xs font-bold md:top-2 -right-1  rounded-full flex items-center justify-center">
                  5
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
