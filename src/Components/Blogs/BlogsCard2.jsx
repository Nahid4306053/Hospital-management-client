/* eslint-disable react/prop-types */
import moment from "moment/moment";
import { Link } from "react-router-dom";


export default function BlogsCard2({blog}) {
  return (
    <div className="Card rounded-lg overflow-hidden bg-slate-100  grid grid-cols-12  items-center">
      <div className="Thumnail md:col-span-5 h-full  col-span-full">
        <img src={blog.thumbnail} className="h-full w-full object-cover " alt="" />
      </div>
      <div className="details p-10  md:col-span-7 col-span-full space-y-10">
        <div className="Description space-y-7">
          <h1 className="title hover:text-teal-400 cursor-pointer text-2xl font-bold uppercase"> {blog.title}</h1>
          <p className="des text-slate-400 text-lg leading-8"> {blog.description.slice(0,190)+"..."  } </p>
          <Link to={`/blogs/singelblog/${blog.id}`}>
          <button className="btnservice font-bold mt-4">Details</button></Link>
        </div>
        <div className="author text-xs flex items-center justify-between md:text-sm font-semibold text-slate-500 gap-4">
          <div className="aut_img flex gap-4 items-center ">
            <img src={blog.author.avatar} alt="" className="h-12 rounded-full" />
            <h3 className="aut_name">{blog.author.authorname.slice(0,10)}</h3>
          </div>
          <h3 className="aut_name">Nutrition and Dentistry</h3>
          <h3 className="aut_name ">{moment.utc(blog.author.publishdate, "YYYYMMDDHHmmss").fromNow()}</h3>
        </div>
      </div>
    </div>
  );
}
