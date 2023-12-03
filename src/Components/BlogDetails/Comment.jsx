import React, { useEffect, useState } from "react";
import Input from "../Input";
import CommentCard from "./CommentCard";

export default function Comment({data}) {
  
  return (
    <div className="Comment">
      <div className="py-10">
        <div className="Title space-y-4">
          <h1 className="text-2xl font-bold uppercase">your Comment</h1>
          <p className="text-slate-400 uppercase">
            what do yor think about this popic ?
          </p>
          <hr className="border-2 border-sky-500 w-10" />
        </div>

        <div className="Comment_Input grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Input Type="text" Placeholder="Name Surname" />
          <Input Type="email" Placeholder="type your email" />
          <div className="form-control col-span-2 mt-5">
            <textarea
              className="Input_1  placeholder:text-black focus:outline-none rounded-none textarea textarea-bordered h-24"
              placeholder="Your Comment..."
            ></textarea>
            <button className="uppercase max-w-xs hover:bg-[#1bc0e2] text-white bg-[#1bc0e2] btn rounded-none mt-5">
              send Coment
            </button>
          </div>
        </div>

        <div className="Title space-y-4 mt-20">
          <h1 className="text-2xl font-bold uppercase">Comments</h1>
          <p className="text-slate-400 uppercase">{data?.comments.length} Comment</p>
          <hr className="border-2 border-sky-500 w-10" />
        </div>

        <div className="Comment_Reply p-20">
              {data?.comments && data?.comments.length > 0 && data.comments.map((ele,ind)=>{
                    return(
                                        <>
                         <CommentCard data={ele} key={ele.id}/>  
                         {ele?.replies && ele?.replies.length > 0 && ele.replies.map(rep=>{
                             return  <CommentCard Reply={true} data={rep.id} key={ele.id}/> 
                         }) }   
                          </>      
                    )
              })}      
        </div>
      </div>
    </div>
  );
}
