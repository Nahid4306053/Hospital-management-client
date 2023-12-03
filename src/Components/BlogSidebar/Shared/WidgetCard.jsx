import React from 'react'

export default function WidgetCard({blog}) {
  return (
    <div className='widgetCard gap-5 grid items-center grid-cols-12'>
      <div className="thum col-span-4">
         <img src={blog.thumbnail} className='w-full h-full object-cover' alt="" />           
      </div>
      <div className="desc col-span-8 text-base font-semibold space-y-3">
       <h3 className='category text-gray-400'>{blog.category}</h3>
       <h3 className='category hover:text-teal-400 cursor-pointer'>{blog.title}</h3>
      </div>
    </div>
  )
}
