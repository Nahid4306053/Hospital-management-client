import React from "react";
import Support_bg from "/Support.png";
export default function SupportSection() {
  return (
    <div className="SupportSection">
      <div className="container mt-[200px] mx-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="Support_bg">
            <img src={Support_bg} className="w-full h-full object-cover" />
          </div>
          <div className="Hospital_info">
            <div className="text-light uppercase">
              <h3 className=" font-bold  text-5xl">care advice & support</h3>
              <h5 className="mt-5 text-2xl text-[#38BDF8] font-bold ">
                Hospital info check
              </h5>
            </div>

            <div className="space-y-2 mt-10">
              <div className="rounded-lg flex support_media flex-col text-center md:flex-row md:text-start p-10  items-center gap-10 ">
                <div className="icon rounded-full bg-sky-400 p-6 py-7 flex justify-center items-center text-white">
                  <i className="fa-solid fa-users text-4xl"></i>
                </div>
                <div className="max-w-lg">
                  <h1 className="text-xl uppercase font-bold ">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet alias cumque consectetur adipisci optio dolorum
                    possimus, voluptas asperiores! Mollitia.
                  </p>
                </div>
              </div>
              <div className="rounded-lg flex support_media flex-col text-center md:flex-row md:text-start p-10  items-center gap-10 ">
                <div className="icon rounded-full bg-sky-400 p-6 py-7 flex justify-center items-center text-white">
                  <i className="fa-solid fa-users text-4xl"></i>
                </div>
                <div className="max-w-lg">
                  <h1 className="text-xl uppercase font-bold ">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet alias cumque consectetur adipisci optio dolorum
                    possimus, voluptas asperiores! Mollitia.
                  </p>
                </div>
              </div>
              <div className="rounded-lg flex support_media flex-col text-center md:flex-row md:text-start p-10  items-center gap-10 ">
                <div className="icon rounded-full bg-sky-400 p-6 py-7 flex justify-center items-center text-white">
                  <i className="fa-solid fa-users text-4xl"></i>
                </div>
                <div className="max-w-lg">
                  <h1 className="text-xl uppercase font-bold ">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet alias cumque consectetur adipisci optio dolorum
                    possimus, voluptas asperiores! Mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
