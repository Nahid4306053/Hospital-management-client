import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import signeture from "/testimonal/signature.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../Styles/Testimonial.scss";
import "swiper/css/effect-fade";
import testimonial_bg from "/testimonal_bg.jpg";
// import required modules

import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";

export default function TestimonialSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [testimonalData, setTestimonalData] = useState([]);
  const [CurrentInd,setCurrentInd] = useState(0)
  const handleThumbSlideChange = () => {
    if (mainSwiper && thumbsSwiper) {
      const activeThumbSlideIndex = thumbsSwiper.realIndex;
      mainSwiper.slideTo(activeThumbSlideIndex);
      setCurrentInd(activeThumbSlideIndex)
    }
  };
  useEffect(() => {
    fetch("/Data/Testimonial.json") .then((res) => res.json()) .then((data) => setTestimonalData(data)) .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full mt-20  h-[700px]">
      <div className="grid  grid-cols-12 gap-20 ">
        <div className="lg:col-span-5 xl:col-span-4 relative">
          <div className="bg-sky-400 fulviewContainer">
            <Swiper onSwiper={setMainSwiper} loop={true} spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Thumbs, EffectFade]} effect="fade" className="Fullview h-[600px]" >
              {testimonalData.length > 0 &&
                testimonalData.map((ele, ind) => {
                  return (
                    <SwiperSlide key={ind}> <img src={ele.avatar} alt="" /> </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className="Thumbsslide_container xl:-right-10 lg:-right-9 2xl:-right-3">
            <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={80} slidesPerView={3} freeMode={true} autoplay={{  disableOnInteraction: false, pauseOnMouseEnter: true, }} watchSlidesProgress={true} direction="vertical" onSlideChange={handleThumbSlideChange} modules={[FreeMode, Thumbs, Autoplay]} centeredSlides={true} className="Thumbsslide" >
              {testimonalData.length > 0 &&
                testimonalData.map((ele, ind) => {
                  return (
                    <SwiperSlide key={ind}> <img className="sha" src={ele.avatar} alt="" /> </SwiperSlide>
                  );
                })}
            </Swiper>
            <div className="shape "></div>
          </div>
        </div>
        <div className="Slider_Conten col-span-6 ">
          <div className="space-y-40 flex flex-col justify-between h-full">
            <div className="title  space-y-5   h-1/3">
              <h1 className="text-4xl text-sky-500 uppercase font-bold">
                {" "}
                happy customers{" "}
              </h1>
              <h2 className="text-xl tracking-widest uppercase  font-bold text-slate-400">
                {" "}
                Testimonials{" "}
              </h2>
            </div>

            {testimonalData.length > 0 && testimonalData.map((ele,ind)=>{
            return (
             <div className={`${CurrentInd === ind ? "flex" :"hidden"}  flex-col  h-2/3 justify-between`}>
              <div className="feedback ">
                <p className="text-2xl">
                  ❝ {ele.feedback} ❞
                </p>
              </div>
              <div className="flex justify-between">
                <div className="author space-y-1">
                  <h1 className="text-2xl uppercase font-bold tracking-wider">
                   {ele.name}
                  </h1>
                  <h1 className="text-lg  text-gray-400 tracking-wider">
                    Teacher of Web BD Sharp
                  </h1>
                </div>
                <div className="signeture">
                  <img src={signeture} alt="" />
                </div>
              </div>
            </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
