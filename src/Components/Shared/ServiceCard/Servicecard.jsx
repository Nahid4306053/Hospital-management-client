import React from "react";
import './ServiceCard.scss'
export default function Servicecard({service}) {
  return (
    <div className="card  rounded-none servicecard bg-base-100 shadow-lg">
      <figure> <img className="w-full" src={service.banner} alt="Shoes" /> </figure>
      <div className="card-body">
        <h2 className="card-title">{service.service_title}</h2>
        <p>{service.description.slice(0,70)+"[..]"}</p>
       <div>
       <button className="btnservice text-sm mt-5 font-bold">Details</button>
       </div>
      </div>
    </div>
  );
}
