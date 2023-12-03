import React from "react";
import "../../Styles/Home/AboutUs.scss";
import about_img from "/about_Img/1.png";
export default function AboutUsSection() {
  return (
    <div style={{ overflow: "hidden" }} className="About_us ">
      <div className="container relative mx-auto">
        <div className="grid  grid-cols-12">
          <div className="col-span-12 lg:col-span-6 batch_img_ab  position-relative">
            <img className="img-fluid" src={about_img} alt="" />
            <div className="batch d-flex justify-content-center align-items-center">
              <h5>since 1996</h5>
            </div>
          </div>
          <div
            style={{ marginTop: "150px" }}
            className="col-span-12 lg:col-span-6 p-0 "
          >
            <div className="titles px-4">
              <h5 className="text-xl uppercase text-gray-400">Nahid dents</h5>
              <h3 className="text-5xl font-bold text-sky-500">About us</h3>
            </div>
            <div className="abou_content px-4 text-lg">
              <p>
                Suspendisse sed nisi lacus sed viverra tellus in hac habitasse
                platea dictumst vestibulum rhoncus est pellentesque elit
                ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
                at.
                <br />
                <br />
                Elit ullamcorper dignissim at consectetur lorem donec massa
                sapien faucibus et molestie ac.
              </p>
              <div className="btn-all">
                <button className=" uppercase border-[#ffffff] text-[#ffffff] border-2 px-10 py-3 text-lg  mt-20 font-bold">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
