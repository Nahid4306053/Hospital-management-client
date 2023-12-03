import React, { useEffect, useState } from "react";
import "../../Styles/Home/GallerySection.scss";
import GalleryCard from "../Shared/GalleryCards/GalleryCard";

function GallerySection() {
  const [Gallery_Data, setGallery_Data] = useState([]);

  useEffect(() => {
    fetch("/Data/GalleryData.json")
      .then((res) => res.json())
      .then((data) => setGallery_Data(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="GallerySection">
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-20 flex items-center bg-sky-400 text-white">
            <div>
              <h1 className="text-6xl uppercase font-bold ">hospital</h1>
              <h1 className="text-2xl mt-4 uppercase  font-bold ">
                photo gallery
              </h1>
              <button className="  mt-5 font-bold border-4  px-10 py-2">
                View All
              </button>
            </div>
          </div>
          {Gallery_Data.length > 0 && Gallery_Data.slice(0,5).map((ele, ind) => {
            return(
              <GalleryCard key={ind} data={ele}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
