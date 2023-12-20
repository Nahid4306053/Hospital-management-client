/* eslint-disable react/prop-types */

import ApponintmentSection_bg from "/appoinment_bg.jpeg";
import Apponintment_lady from "/appoinment_lady.png";
export default function ApponintmentSection({ display }) {
  return (
    <div
      className="ApponintmentSection"
      style={{
        background: `url(${ApponintmentSection_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "no repeat",
      }}
    >
      <div
        className={`container ${
          display === "none" ? "" : "mt-28"
        } mx-auto  flex  items-end justify-start"`}
      >
        <div
          className={`Apponintment_conten w-full relative   ${
            display !== "none" && " py-20"
          }`}
        >
          <h1 className="md:text-5xl text-3xl font-bold text-sky-400 uppercase">
            <span className="text-black">Take an </span>Apponintment
          </h1>
          <p className="max-w-[700px] mt-4 text-xl text-slate-500 leading-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            culpa illo voluptas consequuntur
          </p>
          <div className="bg-white  rounded-lg overflow-hidden">
            <div className="Select_box grid grid-cols-12 pt-10   mt-5 ">
              <div
                className={`${
                  display === "none" ? "lg:col-span-full" : "lg:col-span-8"
                } col-span-full`}
              >
                <div
                  className={`${
                    display === "none" ? "" : "lg:grid-cols-2"
                  } grid    gap-10`}
                >
                  <select className="  border-4 text-slate-500 select rounded-none focus:outline-none uppercase select-bordered w-full">
                    <option disabled selected>
                      Choose Hospital Department
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>

                  <select className="  border-4 text-slate-500 select rounded-none focus:outline-none uppercase select-bordered w-full ">
                    <option disabled selected>
                      Choose Hospital Department
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div
                  className={`grid ${
                    display === "none" ? "space-y-4" : "2xl:grid-cols-4"
                  } gap-5 mt-8`}
                >
                  <select className="  border-4 text-slate-500 select rounded-none focus:outline-none uppercase select-bordered w-full ">
                    <option disabled selected>
                      Choose Hospital Department
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Surname"
                    className="input border-4 focus:outline-none rounded-none border-gray-300 w-full "
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input border-4 focus:outline-none rounded-none border-gray-300 w-full "
                  />
                  <button className="bg-sky-500 py-3 text-white font-bold">
                    Send
                  </button>
                </div>
              </div>
              <div
                className={`${
                  display === "none" ? "lg:hidden" : "lg:block"
                } Appoinment_lady  hidden col-span-4`}
              >
                <img
                  src={Apponintment_lady}
                  className="absolute h-full 2xl:right-10 -top-20"
                  alt=""
                />
              </div>
            </div>
            <div className="socialLinks mt-10 text-lg p-4 bg-gray-800 text-gray-300 w-full grid grid-cols-12 ">
              <div
                className={`${
                  display === "none"
                    ? "flex justify-evenly"
                    : "lg:col-span-8 grid grid-cols-2 lg:grid-cols-3"
                }  col-span-full items-center text-sm md:text-lg `}
              >
                <div className="contact ">
                  <p>
                    <i className="text-sky-400 pr-1 fa-solid fa-headphones"></i>
                    +88019092187555
                  </p>
                </div>
                <div className="contact">
                  <p>
                    <i className="text-sky-400 pr-1 fa-solid fa-envelope"></i>
                    ku4306053@gmail
                  </p>
                </div>
                <div
                  className={`${
                    display === "none" ? "lg:hidden" : "lg:flex"
                  } hidden socialICons  justify-between text-lg`}
                >
                  <a href="#">
                    <i className="fa-brands fa-skype"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-vimeo-v"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
