import React from "react";
import PageBanner from "../Components/Home/PageBanner";
import { useLoaderData } from "react-router-dom";
import DepartmentCard from "../Components/Shared/ServiceCard/Department/DepartmentCard";
import { useState } from "react";
import { useEffect } from "react";
import Servicecard from "../Components/Shared/ServiceCard/Servicecard";
import WhyChosseUs from "../Components/Home/WhyChosseUs";
export default function ServicesList() {
  const ServiceDepartments = useLoaderData();
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("/Data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []); 
  return (
    <>
      <PageBanner
        Sub_title="our awesome Services"
        title_name="Services List"
        page_name="Services List"
      />
      <h1 className="container mx-auto text-5xl font-bold my-10 text-sky-400">Our Departments</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 my-20">
        {ServiceDepartments.map((ele,ind) => {
          return <DepartmentCard data={ele} key={ind} />;
        })}
      </div>
        <h1 className="container mx-auto text-5xl font-bold my-10 text-sky-400">Our Services</h1>
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 my-20">
        {Services.length > 0 && Services.map((ele,ind) => {
          return <Servicecard service={ele} key={ind} />;  
        })}
      </div>
      <WhyChosseUs/>
    </>
  );
}
