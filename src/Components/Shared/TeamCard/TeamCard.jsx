import React from "react";
import "./TeamCard.scss";
export default function TeamCard({ Data }) {
  return (
    <div className="teamCard mt-20 shadow-2xl relative bg-white p-10  pb-0">
      <div className="profile w-24 h-24 absolute right-10 -top-14">
        <figure>
          <img
            src={Data.avatar}
            className="h-full  w-full object-cover"
            alt=""
          />
        </figure>
      </div>
      <div className="about">
        <div className="main_details">
          <h3 className="name  font-bold text-lg uppercase">{Data.name}</h3>
          <h5 className="departname text-slate-500 text-lg capitalize">
            {Data.departname}
          </h5>
        </div>
        <div className="bio mt-5">
          <p className=" text-slate-500">{Data.bio}</p>
        </div>
        <div className="social_links text-xl  flex justify-between pb-6 mt-10">
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
  );
}
