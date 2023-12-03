import React, { useState } from "react";
import "../../Styles/Home/WhyChoseUsSection.scss";
import CircleSlider from "../../Utils/CircleSlider";
import bgimg from "/services_img/about_us.png";
export default function WhyChosseUs() {
  const [activetab, setactivetab] = useState(1);
  CircleSlider(activetab);
  return (
    <div
      style={{ overflow: "hidden", background: `url(${bgimg})` }}
      className=" why_chose"
    >
      <div className="titles ">
        <div className="text-light">
          <h5 className="text-center mb-4">a passion for helling</h5>
          <h3 className="text-center font-bold ">why choose us</h3>
          <h5 className="text-center mt-4">our clinic info</h5>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="holderCircle ">
          <div className="dotCircle">
            <span
              className="itemDot active itemDot1"
              onClick={() => setactivetab(1)}
            >
              <i className="fa-light fa-user-nurse"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot  itemDot2" onClick={() => setactivetab(2)}>
              <i className="fa-solid fa-syringe"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot itemDot3" onClick={() => setactivetab(3)}>
              <i className="fa-light fa-list-dropdown"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot itemDot4" onClick={() => setactivetab(4)}>
              <i className="fa-thin fa-toothbrush"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot itemDot5" onClick={() => setactivetab(5)}>
              <i className="fa-solid fa-house-medical-flag"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot itemDot6" onClick={() => setactivetab(6)}>
              <i className="fa-light fa-helmet-safety"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot itemDot7" onClick={() => setactivetab(7)}>
              <i className="fa-light fa-user-doctor"></i>
              <span className="forActive"></span>
            </span>
            <span className="itemDot itemDot8" onClick={() => setactivetab(8)}>
              <i className="fa-light fa-hospital"></i>
              <span className="forActive"></span>
            </span>
          </div>

          <div className="contentCircle">
            <div className="CirItem active CirItem1">
              <div className="content">
                <h1>100% quelity toot testing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem  CirItem2">
              <div className="content">
                <h1>safety with suggetion</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem CirItem3">
              <div className="content">
                <h1>100% quelity presscription</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem CirItem4">
              <div className="content">
                <h1>dental brush use</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem CirItem5">
              <div className="content">
                <h1>dental thuthpaste for treatment</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem CirItem6">
              <div className="content">
                <h1>take care extra</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem CirItem7">
              <div className="content">
                <h1>Nursh take care extra</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="CirItem CirItem8">
              <div className="content">
                <h1>with 100% safety treetmnet</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum non ab ducimus eligendi? Itaque eaque commodi,
                  repudiandae veritatis
                  <br />
                  <br /> Lorem ipsum dolor sit. quisquam ratione magni natus
                  blanditiis ipsum porro, suscipit ad numquam nihil!
                </p>
                <div className="li">
                  <a className="links" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
