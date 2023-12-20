import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import NotFound from "../Components/Home/NotFound";
import Appointment from "../pages/Appointment";
import ContactUs from "../pages/ContactUs";
import ServicesList from "../pages/ServicesList";
import Gallery from "../pages/Gallery";
import BlogPageLayouts from "../Layouts/BlogPageLayouts";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Testimonials from "../pages/Testimonials";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
// eslint-disable-next-line no-sparse-arrays
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { 
        path: "/doctors",
        loader:()=>fetch("/Data/TeamData.json"),
        element: <Doctors />
      },  
      
      { 
        path: "/services",
        loader:()=>fetch("/Data/ServiceDepartments.json"),
        element: <ServicesList />
      }, 
      
      {
        path: "/appointment",
        element: <Appointment />
      },     
      
      {
        path: "/contact",
        element: <ContactUs />
      },  
      
      {
        path: "/gallery",
        element: <Gallery />
      }, 
             {
        path: "/about",
        element: <AboutUs />
      },    
          
      {
        path: "/blogs",     
        loader : async ()=> fetch('/Data/Blogs.json'),
        element: <BlogPageLayouts />,
  
        children:[
          {
            path: "/blogs",
            loader : async ()=> fetch('/Data/Blogs.json') ,
            element: <Blogs />, 
          } ,
          {
            path: "/blogs/singelblog/:id",
            loader : async ()=> fetch('/Data/Blogs.json') ,
            element: <BlogDetails />, 
          }
        ]
      },
      {
        path: "/testimonials",
        element: <Testimonials />
      },    

    ],
  },
  ,{
    path:"/login",
    element : <Login></Login>
  }
]);
