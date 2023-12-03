import React from "react";
import banner_sv_shape_ContactUs from "/banner_sv_shape_ContactUs.png";
import { Link } from "react-router-dom";
export default function PageBanner({ title_name, page_name, Sub_title , ContactUs_bg}) {
  return (
    <div className=" p-0  relative z-50 overflow-hidden 
    " >
     <div style={{ background: "linear-gradient(90deg, rgba(3,147,206,1) 20%, rgba(37,192,191,1) 80%)", }}>
     <div className="lg:pt-28 py-10  space-y-6 text-white w-full h-full container mx-auto">
        <h2 className=" uppercase text-xl">{Sub_title}</h2>
        <h1 className="text-6xl font-bold capitalize">{title_name}</h1>
        <div className="All_Btn  flex items-center gap-5">
          <button className="border-2 px-4  py-3 text-xl font-bold">
            <Link to='/'><i className="fa-solid fa-house"></i></Link>
          </button>
          <button className="border-2 px-4  py-3 text-xl capitalize">
            {page_name}
          </button>
        </div>
      </div>
     </div>
      <div  className="svg   z-50  ">
        <img className="w-full z-50 " src={banner_sv_shape_ContactUs} alt="" />
      </div>
    </div>
  );
}
