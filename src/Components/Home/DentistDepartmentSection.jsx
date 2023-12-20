import  { useEffect, useState } from 'react'
import DepartmentCard from '../Shared/ServiceCard/Department/DepartmentCard'
import dep_bg from "/services_img/dpe_bg.png"
import "../Shared/ServiceCard/Department/DepartmentCard.scss"
export default function DentistDepartmentSection() {
  const [data,setData] = useState([]);
  useEffect(()=>{
      fetch('Data/ServiceDepartments.json')
      .then(res => res.json()).then(data => setData(data))
  },[])
  return (
    <div className='container lg:mt-20 mx-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20">
       <div className="cards order-1  lg:order-0 grid  col-span-2 lg:grid-cols-1 grid-cols-1">
       <div className="md:grid-cols-2 grid md:gap-10">
       {data && data.slice(0,4).map((ele,ind)=>{
            return(
                <DepartmentCard data={ele} key={ind}/>   
            )        
       })}        
       </div>
       </div>
       <div className="banner order-0 lg:order-1 mt-10" style={{background:`url(${dep_bg})`, backgroundSize:"cover" }}>
          <div className='Our_bg flex items-end'>
             <div className='font-bold uppercase text-white space-y-4'>
               <h1 className='text-3xl'>Our departments</h1>
               <h3 className='text-xl'>variety of Services</h3>
                
             </div>
          </div>
       </div>
     </div>              
   </div>
  )
}
