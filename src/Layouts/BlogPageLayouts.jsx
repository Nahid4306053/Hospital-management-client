import React from "react";
import PageBanner from "../Components/Home/PageBanner";
import { Outlet, useLoaderData } from "react-router-dom";
import BlogSidebar from "../Components/BlogSidebar/BlogSidebar";


export default function BlogPageLayouts() {
  const blogs = useLoaderData() 
  return (
    <div className="BlogPageLayouts">
      <PageBanner Sub_title="our expert some important wards" title_name="Our Blogs" page_name="blog Page" />
      <div className=" container mx-auto lg:gap-10 xl:gap-20 grid grid-cols-12">
            <div className="Blogs col-span-full  lg:col-span-8">
              <Outlet></Outlet> 
            </div>        
            <div className="Sidebar  col-span-full mt-20 lg:col-span-4">
                  <BlogSidebar blogs={blogs} ></BlogSidebar>   
            </div>
      </div>
    </div>  
  );
}  
