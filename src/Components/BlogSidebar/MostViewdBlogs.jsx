import React, { useEffect, useState } from 'react'
import WidgetTilte from './Shared/WidgetTilte'
import WidgetCard from './Shared/WidgetCard'

export default function MostViewdBlogs({blogs}) {
   const [viewdblogs,setmostViedBlogs] = useState([])  
   useEffect(()=>{
     if(blogs){
       const mostvied = blogs.sort((a,b)=> b.views - a.views)
       setmostViedBlogs(mostvied.slice(0,5))
    }
   },[blogs])     
        
  return (
    <div className='mt-10 bg-sky-100'>
      <WidgetTilte>Most Viewd Blogs</WidgetTilte>
      <div className='p-7 space-y-5'>
      {viewdblogs.length > 0 &&
          viewdblogs.map((ele) => {
            return <WidgetCard key={ele.id} blog={ele}></WidgetCard>;
          })}
      </div>
    </div>
  )
}
