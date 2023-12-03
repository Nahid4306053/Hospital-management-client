import React, { useEffect, useState } from "react";
import WidgetCard from "./Shared/WidgetCard";
import WidgetTilte from "./Shared/WidgetTilte";

export default function NewReleasedBlogs({ blogs }) {
  const [newdblogs, setmostnewBlogs] = useState([]);
  useEffect(() => {
    if (blogs) {
      const mostnew = blogs.sort(
        (a, b) =>
          new Date(b.author.publishdate) - new Date(a.author.publishdate)
      );
      setmostnewBlogs(mostnew.slice(0, 5));
    }
  }, [blogs]);
  return (
    <div className="mt-10 bg-sky-100">
      <WidgetTilte>New Released Blogs</WidgetTilte>
      <div className="p-7 space-y-5">
        {newdblogs.length > 0 &&
          newdblogs.map((ele) => {
            return <WidgetCard key={ele.id} blog={ele}></WidgetCard>;
          })}
      </div>
    </div>
  );
}
