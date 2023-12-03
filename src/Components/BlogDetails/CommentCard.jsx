import moment from "moment/moment";
import React from "react";

export default function CommentCard({ Reply, data }) {
 
  return (
    <div className={`CommentCard ${ Reply === true ? "ml-20" : "" }  border-b-4 border-white flex cursor-pointer gap-5`} > <div className="Avatar mt-5">
        <img src={ Reply  ? data.replier.avatar : data.commenter.avatar } className="w-20 rounded-full" alt="" />
      </div>
      <div className="Comment_conten w-full">
        <div className="flex items-center justify-between">
          <p className="text-slate-400 date">{moment .utc(data.date, "YYYYMMDDHHmmss") .fromNow()}</p>
          <button className="btnservice text-sm mt-5 font-bold">Reply</button>
        </div>
        <h1 className="text-sm -mt-3 font-bold uppercase">{ Reply  ? data.replier.username : data.commenter.username }</h1>
        <p className="mt-2 text-slate-500 pb-10"> {data.text} </p>
      </div>
    </div>
  );
}
