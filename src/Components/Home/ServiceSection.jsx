import React, { useEffect, useState } from "react";
import Servicecard from "../Shared/ServiceCard/Servicecard";

export default function ServiceSection(){
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch(`/Data/services.json`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 -mt-44 relative z-[100] gap-8 lg:grid-cols-4 md:grid-cols-2">
        <div className="card flex flex-col rounded-none justify-center ">
        <div className="p-10 bg-white shadow-lg space-y-4">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-lg">If a dog chews shoes whose shoes does he choose?</p>
       <div>
       <button className="btnservice border-[#24BFBF] text-[#24BFBF] border-2 px-10 py-3 text-lg  mt-5 font-bold">All Services</button>
       </div>
      </div>
        </div>
        {services && services.length > 0 && 
        services.slice(0,3).map((ele,ind)=>{
          return (
            <Servicecard key={ele.id} service={ele}></Servicecard>
          )
        })}
      </div>
    </div>
  );
}
