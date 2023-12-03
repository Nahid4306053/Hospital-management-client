import React from 'react'
import Banner from '../Components/Home/Banner'
import ServiceSection from '../Components/Home/ServiceSection'
import AboutUsSection from '../Components/Home/AboutUsSection'
import ServiceSliderSection from '../Components/Home/ServiceSliderSection'
import WorkingTimeSection from '../Components/Home/WorkingTimeSection'
import WhyChosseUs from '../Components/Home/WhyChosseUs'
import DentistDepartmentSection from '../Components/Home/DentistDepartmentSection'
import BlogSection from '../Components/Home/BlogSection'
import TeamSection from '../Components/Home/TeamSection'
import SupportSection from '../Components/Home/SupportSection'
import GallerySection from '../Components/Home/GallerySection'
import Sponsers from '../Components/Home/Sponsers'
import ApponintmentSection from '../Components/Home/ApponintmentSection'
import TestimonialSection from '../Components/Home/TesttimonialSection'
export default function Home() {
  return (
    <div>
       <Banner/>
       <ServiceSection/>
       <AboutUsSection/>
       <ServiceSliderSection/> 
       <WhyChosseUs/>
       <WorkingTimeSection/>
       <DentistDepartmentSection/>
       <ApponintmentSection/>
       <BlogSection/>
       <TeamSection/>
       <SupportSection/>
       <GallerySection/>
       <TestimonialSection></TestimonialSection>
       <Sponsers/>
    </div>
  )
}
