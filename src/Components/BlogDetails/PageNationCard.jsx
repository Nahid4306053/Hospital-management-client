import React from "react";
import './PageNationCard.scss'
import { Link } from "react-router-dom";
export default function PageNationCard({data,children,direction}) {
  return (
    <div className="grid gap-5 grid-cols-2">
      <div className={`${direction === "prev" ? "order-0": "order-1"} thumbnail relative`}>
      <img className="h-full w-full object-cover" src={data.thumbnail} alt="" />  
      <div className={`Overlay d-flex flex items-end  p-5 absolute top-0 h-full ${direction === 'prev' ? "justify-start" : "justify-end"}  w-full`}>
        <p className="text-white text-2xl"><Link to={`/blogs/singelblog/${data.id}`}>{children}</Link> </p>           
        </div>            
      </div> 
      <div className={`${direction === "prev" ? "order-1": "order-0"} description space-y-4`}>
       <div className={`details ${direction === "prev"  ? "text-start" :"text-right"}  space-y-4`}>
        <h3 className="text-xl font-semibold hover:text-teal-400 cursor-pointer"><Link to={`/blogs/singelblog/${data.id}`}>{data.title}</Link></h3>
        <p>{data.description.slice(0,80)}</p>            
       </div>
       <div className={`"author  flex ${direction === "prev"  ? "justify-start" :"justify-end"}  items-center gap-4`}>
        <img className="h-12 w-12 rounded-full" src={data.author.avatar} alt="" />       
        <p className="name">{data.author.authorname}</p>
       </div>
      </div>
    </div>
  );
}
