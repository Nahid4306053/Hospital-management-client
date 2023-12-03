import React from "react";

export default function GalleryCard({ data }) {
  return (
    <>
      <div className="Hospital_img overflow-hidden relative">
        <div className="img  ">
          <img src={data.image} className="h-full w-full" alt="" />
          <div className="FullScreen absolute h-full w-full flex justify-center items-end ">
            <button  onClick={() => document.getElementById(`${"gel"+data.id}`).showModal()}  className=" px-10 Ful_btn bg-sky-400 mb-20 py-3  text-white text-lg   font-semibold  uppercase ">
              Full Sereen
            </button>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={"gel"+data.id} className="modal ScrollBerNone  bg-transparent">
        <div  className="modal-box   ScrollBerNone  w-11/12 max-w-5xl bg-transparent">
          <form method="dialog">
            <button className="btn bg-red-400 text-white btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕ </button>
          </form>
          <div className="font-bold text-lg">
           <img className="w-full" src={data.image} alt="" />
          </div>
        </div>
      </dialog>
    </>
  );
}
