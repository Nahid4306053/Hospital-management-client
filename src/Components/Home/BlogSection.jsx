import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../Shared/BlogCard/BlogCard";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

function BlogSection() {
  const BlogprevRef = useRef(null);
  const BlognextRef = useRef(null);
  const [Blogdata,setBlogdata] = useState([])
  useEffect(() => {
    fetch('/Data/Blogs.json').then(res=> res.json()).then(blogs=> {
       if (blogs) {
      const mostnew = blogs.sort(
        (a, b) =>
          new Date(b.author.publishdate) - new Date(a.author.publishdate)
      );
      setBlogdata(mostnew.slice(0, 12));
    }
    }).catch(err=> console.log(err))
   
  }, []);
 
  return (
    <div className="BlogSection relative">
      <div className="container mt-32 mx-auto">
        <div className="titles ">
          <div className="text-light">
            <h3 className="text-center font-semibold uppercase text-5xl">
              Powerful gears
            </h3>
            <h5 className="text-center mt-4 text-xl">dentlst news</h5>
          </div>
        </div>
        <div className="relative mt-32">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: BlogprevRef.current,
              nextEl: BlognextRef.current,
            }}
            modules={[Autoplay, Navigation]}
            loop={true}
            className="BlogSwiper"
          >
            {Blogdata.length > 0 && Blogdata.map(ele=>{
              return(
                <SwiperSlide key={ele.id}> <BlogCard blog={ele} /> </SwiperSlide>
              )
            })}
          </Swiper>
          <div
            className="flex gap-4 absolute -top-14 z-10 right-[0%]
      "
          >
            <button
              ref={BlogprevRef}
              className="sidecontroller text-xl font-bold"
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button
              ref={BlognextRef}
              className="sidecontroller text-xl font-bold"
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
