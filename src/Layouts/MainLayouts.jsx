import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Topheaders from "../Components/Shared/Topheaders";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer";
import Hospiltal_Location from "../Components/Home/Hospiltal_Location";
import '../App.css'
import { ThreeCircles } from "react-loader-spinner";
export default function MainLayouts() {
  const navigetion = useNavigation()
  return (
    <>
      <div className="min-h-screen overflow-x-hidden flex flex-col justify-between">
        <div className="nav_bar">
          <Topheaders></Topheaders>
          <Navbar></Navbar>
        </div>
        {navigetion.state === "loading" ? (
        <div className=" flex justify-center min-h-screen items-center  w-full">
          <ScrollTop></ScrollTop>
          <ThreeCircles
            height="200"
            width="200"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#3498db"
            innerCircleColor="#e67e22"
            middleCircleColor="#e74c3c"
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
        <div>
          <Hospiltal_Location />
          <Footer />
        </div>
      </div>
    </>
  );
}
