import React from "react";
import web_logo from "/SITE/website-logo.png";
export default function Footer() {
  return (
    <footer className="footer mt-10">
      <div className="container mx-auto">
        <div className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <img src={web_logo} alt="" className="h-16" />
            <p className="link-hover text-lg cursor-pointer text-slate-500 mt-5">
              ©2019
              <br />
              <p className="mt-4">Providing reliable tech since 1992</p>
            </p>
          </aside>
          <nav>
            <header className="footer-title text-xl">SERVICES</header>
            <a className="mt-3 link-hover text-lg cursor-pointer">Language</a>
            <a className="link-hover text-lg cursor-pointer">Fitness</a>
            <a className="link-hover text-lg cursor-pointer">GYM</a>
            <a className="link-hover text-lg cursor-pointer">Courses</a>
            <a className="link-hover text-lg cursor-pointer">Page</a> 
            <a className="link-hover text-lg cursor-pointer">Faq</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">COMPANY</header>
            <a className="mt-3 link-hover text-lg cursor-pointer">Language</a>
            <a className="link-hover text-lg cursor-pointer">Fitness</a>
            <a className="link-hover text-lg cursor-pointer">GYM</a>
            <a className="link-hover text-lg cursor-pointer">Courses</a>
            <a className="link-hover text-lg cursor-pointer">Page</a>
            <a className="link-hover text-lg cursor-pointer">Faq</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">CONTACT</header>
            <a className="mt-3 link-hover text-lg cursor-pointer">Language</a>
            <a className="link-hover text-lg cursor-pointer">Fitness</a>
            <a className="link-hover text-lg cursor-pointer">GYM</a>
            <a className="link-hover text-lg cursor-pointer">Courses</a>
            <a className="link-hover text-lg cursor-pointer">Page</a>
            <a className="link-hover text-lg cursor-pointer">Faq</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">CONTACT</header>
            <a className="mt-3 link-hover text-lg cursor-pointer">Language</a>
            <a className="link-hover text-lg cursor-pointer">Fitness</a>
            <a className="link-hover text-lg cursor-pointer">GYM</a>
            <a className="link-hover text-lg cursor-pointer">Courses</a>
            <a className="link-hover text-lg cursor-pointer">Page</a>
            <a className="link-hover text-lg cursor-pointer">Faq</a>
          </nav>
          
        </div>
        <div className="Theme_footer flex border-t-2 w-full p-10 justify-between items-center">
           <p className="text-slate-400 text-lg">Copyright © 2023 - All right reserved</p>
           <p className="text-slate-400 text-lg">Powerade by <span className=" bg-sky-600 px-7 rounded-full py-4 btn-sm cursor-pointer text-white font-bold"><a href="#">Themeflex</a></span></p>
           <p className="text-slate-400 text-lg">
           <span className="ml-4">Have any questions?</span>
           <span className="ml-4">+61 383 766 284 </span>
           <span className="ml-4">noreply@envato.com</span></p> 
           </div>
      </div>
    </footer>
  );
}
