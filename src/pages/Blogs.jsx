import React from 'react'
import BlogsCard2 from '../Components/Blogs/BlogsCard2'
import { useLoaderData } from 'react-router-dom'
import { shuffle } from 'lodash'

export default function Blogs() {

  const BlogsDatas = useLoaderData()
  return (
   <> 
     <div className='grid gap-20 mt-20'>
     {BlogsDatas && shuffle(BlogsDatas).map((ele)=>{
          return (
            <BlogsCard2 blog={ele} key={ele.id}></BlogsCard2> 
          )          
     })}
     </div>
   </>
  )
}
