import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Comment from "../Components/BlogDetails/Comment";
import Pagenition from "../Components/BlogDetails/Pagenition";
import "../Styles/BlogDetails.scss";
export default function BlogDetails() {
  const blogs = useLoaderData();
  const { id } = useParams();
  const [blogDetails, setblogDetails] = useState({});
  const [prevNext, setPrevNext] = useState({});
  useEffect(() => {
    if (blogs) {
      const index = blogs.findIndex((ele) => ele.id.toString() === id);
      if (index > -1) {
        setblogDetails(blogs[index]);
        const FindprevNext = { prev: blogs[index - 1], next: blogs[index + 1] };
        setPrevNext(FindprevNext);
      }
    }
  }, [blogs]);
  return (
    Object.keys(blogDetails).length > 0 && (
      <>
        <div className="BlogDetails mt-20">
          <div className="container mx-auto">
            <div className="thuimnail relative h-[500px]">
              <img
                className="w-full h-full object-cover"
                src={blogDetails.thumbnail}
                alt=""
              />
              <div className="maininfo text-right  top-0 w-80   h-full absolute right-0">
                <div className="grid grid-rows-5 h-full maindetails flex-col">
                  <div className="author flex-1 items pl-[100px]">
                    <img
                      className="h-14  w-14 rounded-full"
                      src={blogDetails.author.avatar}
                      alt=""
                    />
                    <p className="name">{blogDetails.author.authorname}</p>
                  </div>
                  <div className="Category items pl-[90px]">
                    <i className="fa-regular fa-folder"></i>
                    <p>{blogDetails.category.slice(0, 20) + ".."}</p>
                  </div>
                  <div className="Category items pl-[70px]">
                    <i className="fa-regular fa-eye"></i>
                    <p>{blogDetails.views} Views</p>
                  </div>
                  <div className="Category items pl-[50px]">
                    <i className="fa-regular fa-comments"></i>
                    <p>{blogDetails.comments.length} Comments</p>
                  </div>
                  <div className="Category items pl-[30px]">
                    <i className="fa-regular fa-calendar-days"></i>
                    <p>
                      {moment
                        .utc(blogDetails.author.publishdate, "YYYYMMDDHHmmss")
                        .fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="details mt-10 space-y-5">
              <h1 className="text-4xl font-semibold">{blogDetails.title}</h1>
              <p className="text-lg leading-8">{blogDetails.description}</p>
            </div>
          </div>
        </div>
        <div className="socialLinks rounded-sm bg-gray-700 mt-10 p-5 text-white flex justify-between">
          <p>Share On:</p>
          <div className="icon socialICons flex items-center md:text-base text-xs gap-5 text-white">
            <a href="#">
              {" "}
              <i className="fa-brands fa-skype"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fa-brands fa-square-facebook"></i>{" "}
            </a>{" "}
            <a href="#">
              {" "}
              <i className="fa-brands fa-google-plus-g"></i>{" "}
            </a>{" "}
            <a href="#">
              {" "}
              <i className="fa-brands fa-twitter"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fa-brands fa-vimeo-v"></i>{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fa-brands fa-youtube"></i>{" "}
            </a>
          </div>
        </div>
        <Pagenition data={prevNext}>
          <i className="fa-solid fa-arrow-left"></i>
        </Pagenition>
       <Comment  data={blogDetails}/>
      </>
    )
  );
}
