import React from "react";
import Hospiltal_Location_bg from "/Sponsers_bg.png";
export default function Hospiltal_Location() {
  return (
    <div
      className="Hospiltal_Location py-20"
      style={{
        background: `url(${Hospiltal_Location_bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <div className="Hospiltal_Info max-w-3xl text-center mx-auto h-full">
          <h1 className="text-3xl text-black uppercase mt-10 font-bold">
            So what are you waiting for ?
          </h1>
          <p className="text-xl text-slate-400 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio modi
            quos quod natus ducimus voluptates architecto vitae quasi ipsum
            explicabo?
          </p>
          <div className="Btn mt-10 md:mt-10 flex flex-wrap gap-4 items-center justify-center">
            <button className=" sidecontroller2  text-xl font-bold uppercase"> Hospital Location </button>
            <button className="sidecontroller2 text-xl font-bold uppercase "> Contact Form </button>
          </div>
        </div>
      </div>
    </div>
  );
}
