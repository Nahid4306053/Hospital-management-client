
import { NavLink } from "react-router-dom";
import web_logo from "/SITE/website-logo.png";
export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/doctors">Doctors</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/testimonials">Testimonials</NavLink>
      </li>     
       <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact us</NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-base-300">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full flex text-xs xl:text-sm navbar py-3 container mx-auto">
            <div className="flex-1 lg:hidden md:block ">
              <img className="h-14" src={web_logo} alt="" />
            </div>
            <div className="flex-none   hidden lg:block">
              <div className=" flex items-center justify-between">
                <div className="nav_links ">
                  <ul className="menu menu-horizontal text-xs xl:text-base pl-0 ml-0 font-semibold ">
                    {links}
                  </ul>
                </div>
              </div>
            </div>
            <div className="data flex-1  justify-end lg:flex gap-10 items-center ">
              <h2 className="font-medium text-[#606062] whitespace-nowrap md:block hidden">
                MON - STA 08.30 - 18.00.SUNDAY
              </h2>
              <button className="uppercase badge badge-info text-white lg:badge-lg ">
                open
              </button>
            </div>
            <div className="flex-none text-gray-500 lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost" > 
              <i className="fa-solid fa-bars"></i> 
              </label>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side z-[50000]">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
        
          </label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className=""
          >
             <i  aria-label="close sidebar"  className="z-[10] text-red-400 text-lg absolute top-0 right-0 p-5 fa-solid fa-xmark"></i>
          </label>
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </header>
  );
}
