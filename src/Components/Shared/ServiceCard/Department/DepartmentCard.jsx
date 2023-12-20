/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "../Department/DepartmentCard.scss";
function DepartmentCard({ data }) {
  const { _id, departname, img, title, description } = data;
  return (
    <div className="p-10 mt-32 card rounded-none shadow-lg  DeparCard">
      <div className="DepCard_img py-4 w-24">
        <img src={img} className="imgbb h-14" />
      </div>
      <div className="title mt-5">
        <h1 className="text-base leading-8 font-bold uppercase">{title}</h1>
        <p className="mt-5 text-gray-600">{description.slice(0,120)+"..."}</p>
        <button className="btnservice text-sm mt-5 font-bold">Details</button>
      </div>
    </div>
  );
}

export default DepartmentCard;
