import React from "react";
import WidgetTilte from "./Shared/WidgetTilte";

export default function Search() {
  return (
    <div>
      <WidgetTilte>Search Blog</WidgetTilte>
      <div className="py-5 bg-sky-100 px-6">
        <div className="form-control w-full">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Blog here…"
              className="input w-full focus:outline-none"
            />
            <button className="btn text-teal-400 text-lg btn-square">
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
