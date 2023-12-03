import React, { useEffect, useState } from "react";
import banner_sv_shape from "/banner_sv_shape.png";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import '../../Styles/Banner.scss'
export default function Banner() {
  const [bannerservices, setBannerService] = useState([]);
  useEffect(() => {
    fetch(`/Data/BannerService.json`)
      .then((res) => res.json())
      .then((data) => setBannerService(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="flex flex-col  justify-between min-h-[500px] md:h-[800px] overflow-hidden"
      style={{ background: "linear-gradient(90deg, rgba(3,147,206,1) 20%, rgba(37,192,191,1) 100%)", }}
    >
      <div className="">
        <Swiper spaceBetween={30} centeredSlides={true}   autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} direction="vertical"  modules={[Autoplay, Pagination]} className="mySwiper  max-h-[700px] md:max-h-[700px]  overflow-x-hidden mt-0  md:mt-28 2xl:mt-0 container mx-auto   w-full h-full" >
        {bannerservices && bannerservices.length > 0 && bannerservices.map((ele,ind)=>{
           return (
                 <SwiperSlide key={ind} className=" grid  justify-end">
                    <div className="slideItems pt-5 flex   justify-between items-center">
                      <div className="descriptions p-10 flex justify-center flex-1">
                        <div className=" space-y-6 ">
                          <h3 className="text-2xl text-white"> {ele.slogan} </h3>
                          <h1 className="text-5xl text-white font-bold"> {ele.service_title} </h1>
                          <p className="text-lg font-semibold text-white max-w-xl"> {ele.description}</p>
                          <div>
                            <button className="btn btn-outline text-white hover:border-white px-14 mt-7 border-2 rounded-none hover:bg-transparent "> Details </button>
                          </div>
                        </div>
                      </div>
                      <div className="banner md:block hidden h-full flex-1">
                        <img
                          className="h-[700px]  mx-auto"
                          src={ele.banner}
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
           )
         })}

        </Swiper>
      </div>
      <div className="svg z-50  hidden lg:block lg:-mt-56  2xl:-mt-30">
        <img className="w-full" src={banner_sv_shape} alt="" />
      </div>
    </div>
  );
}
