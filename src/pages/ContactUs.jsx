
import PageBanner from "../Components/Home/PageBanner";
import WorkingTimeSection from "../Components/Home/WorkingTimeSection";
import Input from "../Components/Input";
import "../Styles/Input.scss";
export default function ContactUs() {
  return (
    <div>
      <PageBanner
        Sub_title="Get in tuch"
        ContactUs_bg="banner_sv_shape_ContactUs_bg"
        title_name="Contact us"
        page_name="Contact page"
      ></PageBanner>
      <div className="map relative -translate-y-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29110.95658412664!2d90.41798677445074!3d24.211347115638382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1698483263077!5m2!1sbn!2sbd"
          className="w-full  h-screen border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="From_Style absolute top-40 w-full  my-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto">
            <div>
              <div className="from  p-10 bg-white ">
                <p className="text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda
                </p>

                <div className="Input">
                  <Input Type="text" Placeholder="FuLL name surname" />
                  <Input Type="email" Placeholder="Email" />
                  <Input Type="text" Placeholder="Phone Number" />
                  <Input Type="text" Placeholder="Sublect" />
                  <div className="form-control mt-5">
                    <textarea
                      className="Input_1 placeholder:text-black placeholder:uppercase focus:outline-none rounded-none textarea textarea-bordered h-24"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button className="uppercase w-full hover:bg-[#1bc0e2] text-white bg-[#1bc0e2] btn rounded-none mt-5">
                    email send
                  </button>
                </div>
              </div>

              <div className="icon gap-5 py-6 text-white flex bg-[#1bc0e2] items-center justify-center">
                <a href="#">
                  <i className="fa-brands fa-skype"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-vimeo-v"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container py-10 justify-evenly mt-24 bg-[#1bc0e2] p-10 grid grid-cols-1 lg:grid-cols-3 gap-44  mx-auto">
            <div className="Phone_Conten flex text-white items-center gap-10">
              <i className="fa-solid fa-phone text-5xl fa-rotate-270 text-white"></i>
              <div className="space-y-1">
                <h1 className="text-xl font-bold uppercase">Phone</h1>
                <p>(880+) (01909218755)</p>
              </div>
            </div>

            <div className="Email_Conten flex text-white items-center gap-10">
              <i className="fa-solid fa-envelope-open-text text-5xl"></i>
              <div className="space-y-1">
                <h1 className="text-xl font-bold uppercase ">Email</h1>
                <p>info@gmail.com</p>
              </div>
            </div>

            <div className="Location_Conten flex text-white items-center gap-10">
              <i className="fa-solid fa-map-location-dot text-5xl"></i>
              <div className="space-y-1">
                <h1 className="text-xl font-bold uppercase">Location</h1>
                <p>3460 Mcgowen St London / England</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorkingTimeSection />
    </div>
  );
}
