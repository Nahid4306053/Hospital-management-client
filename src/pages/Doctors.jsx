import React from "react";
import {useLoaderData} from 'react-router-dom'
import PageBanner from "../Components/Home/PageBanner";
import TeamCard from "../Components/Shared/TeamCard/TeamCard";
export default function Doctors() {
  const Doctorsdata = useLoaderData();
  return (
     <>
      <PageBanner Sub_title='a hardwork Team' title_name='Team Members' page_name='Doctors List'/>
       <div className="container mx-auto gap-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {Doctorsdata.map((ele)=>{
            return(
              <TeamCard Data={ele} key={ele.id}/>
            )
         })}
       </div>
     </>
  );
}
