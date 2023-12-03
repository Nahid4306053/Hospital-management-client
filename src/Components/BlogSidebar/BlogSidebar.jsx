import React from "react";
import Search from "./Search";
import MostViewdBlogs from "./MostViewdBlogs";
import NewReleasedBlogs from "./NewReleasedBlogs";
import PopularTags from "./PopularTags";

export default function BlogSidebar({blogs}) {
  return (
    <>
      <Search></Search>
      <MostViewdBlogs blogs={blogs}></MostViewdBlogs>
      <div className="ad my-10 relative">
      <div className="ad-overlay absolute top-0 left-0 h-full w-full bg-sky-400 opacity-40 text-black text-2xl uppercase font-bold p-14 flex justify-center items-end">
         25% off in this week           
        </div>
        <img className="h-full w-full object-cover" src="https://i.ibb.co/7VpNdNc/Gallery-Img-2.png" alt="" />
      </div>
      <NewReleasedBlogs blogs={blogs} ></NewReleasedBlogs>
      <PopularTags></PopularTags>
    </>
  );
}
