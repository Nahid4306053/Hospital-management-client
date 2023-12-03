import React from "react";
import PageNationCard from "./PageNationCard";

export default function Pagenition({ data }) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {data.prev && (
        <PageNationCard direction="prev" data={data.prev}>
          <i className="fa-solid fa-arrow-left"></i>
        </PageNationCard>
      )}
      {data.next && (
        <PageNationCard direction="next" data={data.next}>
          <i className="fa-solid fa-arrow-right"></i>
        </PageNationCard>
      )}
    </div>
  );
}
