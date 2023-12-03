import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "../Shared/TeamCard/TeamCard";
export default function TeamSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [User_data, setUser_data] = useState([]);

  useEffect(() => {
    fetch("/Data/TeamData.json")
      .then((res) => res.json())
      .then((data) => setUser_data(data));
  }, []);

  return (
    <div className="bg-sky-400 py-20 mt-32">
      <div className="container mx-auto">
        <div className="w-full uppercase mx-auto text-white">
          <div className="text-light">
            <h3 className=" text-center font-bold  text-5xl">
              expert in the fleld
            </h3>
            <h5 className="text-center mt-5 text-2xl font-bold">doctors</h5>
          </div>
        </div>
        <div className="relative">
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
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Autoplay, Navigation]}
            loop={true}
            className="teamswiper h-96 translate-y-44 "
          >
            {User_data.length > 0 &&
              User_data.map((Data, ind) => {
                return (
                  <SwiperSlide key={ind}>
                    <TeamCard Data={Data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div
            className="flex gap-4 absolute top-20 z-10 right-[0%]
      "
          >
            <button ref={prevRef} className="sidecontroller1 text-xl font-bold">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button ref={nextRef} className="sidecontroller1 text-xl font-bold">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
