import React, { useEffect } from "react";

export default function CircleSlider(activetab) {
  useEffect(() => {  
      let tab = activetab;
    const setCircularPositions = () => {
      const container = document.querySelector(".dotCircle");
      if (container) {
        const radius = container.offsetWidth / 2.5;
        console.log(radius, container.offsetWidth);
        const fields = document.querySelectorAll(".itemDot");

        fields.forEach((field, index) => {
          const angle = (2 * Math.PI * index) / fields.length;
          const x = Math.round(
            container.offsetWidth / 2 +
              radius * Math.cos(angle) -
              field.offsetWidth / 2
          );
          const y = Math.round(
            container.offsetHeight / 2 +
              radius * Math.sin(angle) -
              field.offsetHeight / 2
          );
          field.style.left = x + "px";
          field.style.top = y + "px";
        });
      }
    };

    const handelactive = (tab) => {

      const container = document.querySelector(".dotCircle");
      if (container) {
        document.querySelectorAll(".itemDot").forEach(function (dot) {
          dot.classList.remove("active");
        });
        document.querySelectorAll(".CirItem").forEach(function (dot) {
          dot.classList.remove("active");
        });
        document.querySelector(`.itemDot${tab}`).classList.add("active");
        document.querySelector(".CirItem"+tab).classList.add("active");
      }
    };
    setCircularPositions();
    handelactive(tab);
    const sliderintervel = setInterval(() => {
      const fields = document.querySelectorAll(".itemDot");
       if(tab > fields.length - 1){
        tab = 1
       }
      else{
       tab++
      }
      handelactive(tab)
    }, 1500);
    window.addEventListener("resize", setCircularPositions);
    return () => {
      window.removeEventListener("resize", setCircularPositions);
      clearInterval(sliderintervel)
    };
  }, [activetab]);
}
