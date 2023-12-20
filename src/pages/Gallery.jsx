import  { useEffect, useState } from "react";
import GalleryCard from "../Components/Shared/GalleryCards/GalleryCard";
import PageBanner from "../Components/Home/PageBanner";

function Gallery() {
  const [Gallery_Data, setGallery_Data] = useState([]);

  useEffect(() => {
    fetch("/Data/GalleryData.json")
      .then((res) => res.json())
      .then((data) => setGallery_Data(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Gallery">
       <PageBanner Sub_title="Explore Bounding between Doctor and Patent" title_name="Our Gallery" page_name="Gallery" />
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Gallery_Data.length > 0 && Gallery_Data.map((ele, ind) => {
            return(
              <GalleryCard key={ind} data={ele}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
