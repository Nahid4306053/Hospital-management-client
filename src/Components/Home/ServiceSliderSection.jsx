import  { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import serviceOverlay from "/services_img/service_overlay.webp";

import "swiper/css/navigation";
import "../../Styles/Banner.scss";
import "../../Styles/Home/ServiceSlideSection.scss";
export default function ServiceSliderSection() {
  const [services, setService] = useState([]);
  const servprevRef = useRef(null);
  const servnextRef = useRef(null);
  useEffect(() => {
    fetch(`/Data/services.json`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="lg:grid hidden gap-14 lg:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${serviceOverlay})`,
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center text-white ServiceSlideBanner h-[300px] uppercase"
      >
        <div className="space-y-4">
          <h3 className="text-2xl ">Nahid Dents</h3>
          <h1 className="text-5xl font-bold">Our Services</h1>
        </div>
      </div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: servprevRef.current,
            nextEl: servnextRef.current,
          }}
          modules={[Autoplay, Navigation]}
          className=" col-span-1"
        >
          {services.length > 0 &&
            services.map((ele) => {
              return (
                <SwiperSlide key={Math.random()}>
                  <div className="descriptions">
                    <div className=" space-y-6 ">
                      <h3 className="text-2xl font-bold">
                        {ele.service_title}
                      </h3>
                      <p className="text-lg opacity-75  max-w-xl">
                        {ele.description.slice(0, 300)}
                      </p>
                      <div>
                        <button className="btnservice font-bold">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <div
          className="flex gap-4 absolute top-0 z-10 right-[20%]
      "
        >
          <button
            ref={servprevRef}
            className="sidecontroller text-xl font-bold"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            ref={servnextRef}
            className="sidecontroller text-xl font-bold"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
