import React from "react";
import "../../Styles/PopularTag.scss";
import WidgetTilte from "./Shared/WidgetTilte";
export default function PopularTags() {
  return (
    <div className="mt-10">
      <WidgetTilte>Popular tags</WidgetTilte>
      <div className="bg-sky-100 blog-tags p-8 flex flex-wrap gap-5 ">
        <div className="tag">Dental Care Tips</div>
        <div className="tag">Teeth Whitening</div>
        <div className="tag">Oral Health</div>
        <div className="tag">Pediatric Dentistry</div>
        <div className="tag">Gum Disease</div>
        <div className="tag">Orthodontics</div>
        <div className="tag">Dental Implants</div>
        <div className="tag">Cosmetic Dentistry</div>
        <div className="tag">Oral Surgery</div>
        <div className="tag">Dentures</div>
        <div className="tag">Root Canal</div>
        <div className="tag">Preventive Dentistry</div>
      </div>
    </div>
  );
}
