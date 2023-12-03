import React from "react";
import "./BlogCrad.scss";
import blog_img from "/news/1.png";
import moment from "moment";
function BlogCard({blog}) {
  return (
    <div className="Card h-full ">
      <div className="card_img shadow-xl  blog_card  flex ">
        <div className="w-full">
          <img src={blog.thumbnail} className="w-full h-96" />
          <div className="p-10 space-y-4">
            <h1 className="text-2xl font-semibold card-title ">
            {blog.title}
            </h1>
            <p className="text-lg">
            {blog.description.slice(0,100)+"..."}
            </p>
          </div>
        </div>
        <div className=" w-28 bg-slate-200  text-lg sitebar flex items-center    justify-between py-5">
          <span className="">{moment.utc(blog.author.publishdate, "YYYYMMDDHHmmss").fromNow()}</span>
          <span className="">{blog.category}</span>
          <div className="">
            <button className=" blog_btn text-sm mt-5  font-bold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
