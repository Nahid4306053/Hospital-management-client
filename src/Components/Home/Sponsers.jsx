import React from "react";
import Company_img_1 from "/company/1.png";
import Company_img_2 from "/company/2.png";
import Company_img_3 from "/company/3.png";
import Company_img_4 from "/company/4.png";
import Company_img_5 from "/company/5.png";

function Sponsers() {
  return (
    <div className="Sponsers border-2  mt-32 py-20">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center justify-center">

          <div className="Company_logo">
            <img src={Company_img_1} alt="Sponsers" className="hover:scale-110 cursor-pointer transition-all" />
          </div>

          <div className="Company_logo">
            <img src={Company_img_2} alt="Sponsers" className="hover:scale-110 cursor-pointer transition-all" />
          </div>
          <div className="Company_logo">
            <img src={Company_img_3} alt="Sponsers" className="hover:scale-110 cursor-pointer transition-all" />
          </div>
          <div className="Company_logo">
            <img src={Company_img_4} alt="Sponsers" className="hover:scale-110 cursor-pointer transition-all" />
          </div>
          <div className="Company_logo">
            <img src={Company_img_5} alt="Sponsers" className="hover:scale-110 cursor-pointer transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
