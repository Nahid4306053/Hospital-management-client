import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Shared/Navbar";
import Topheaders from "../Shared/Topheaders";
import Hospiltal_Location from "./Hospiltal_Location";
import PageBanner from "./PageBanner";
import Boy from "/404 Not Font/404Boy.png";
import Teeth from "/404 Not Font/404Teeth.png";
export default function NotFound() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden flex flex-col justify-between">
        <div className="nav_bar">
          <Topheaders></Topheaders>
          <Navbar></Navbar>
        </div>
        <PageBanner
          Sub_title="Not Found your request"
          title_name="404!"
          page_name="404 Page"
        />
        <div className="Not_Found container mx-auto flex items-center justify-center gap-10">
          <div className="teeth">
            <img src={Teeth} alt="" />
          </div>
          <div className="Error">
            <h1 className="text-7xl font-bold uppercase text-black">
              <span className="text-sky-400">404 </span>
              <br />
              Not Found
            </h1>

            <h3 className="text-xl font-bold uppercase mt-3 text-black">
              return
              <span className="text-sky-400">
                <Link to="/">Homepage</Link>
              </span>
            </h3>
          </div>
          <div className="boy">
            <img src={Boy} alt="" />
          </div>
        </div>
        <div>
          <Hospiltal_Location />
          <Footer />
        </div>
      </div>
    </>
  );
}
