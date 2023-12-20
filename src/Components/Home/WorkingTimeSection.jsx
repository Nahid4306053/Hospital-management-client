
import "../../Styles/Home/WorkingTimeSection.scss";
import servicebg from "/services_img/servicebg.png";
export default function WorkingTimeSection() {
  return (
    <div className="time_shedual ">
      <div className=" mx-auto">
        <div className="grid grid-cols-12 ">
          <div
            style={{
              background: `url(${servicebg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            className="col-span-12 lg:col-span-6 lg:text-start py-20 flex justify-center items-center worktitle "
          >
            <div className="titles text-white">
              <div className="">
                <h5 className="text-xl uppercase font-bold md:text-center  lg:text-start mb-4">
                  passion for helling
                </h5>
                <h3 className="text-4xl font-bold uppercase  md:text-center  lg:text-start">
                  Working on time
                </h3>
                <h5 className="text-xl uppercase font-bold md:text-center  lg:text-start mt-4">
                  our hospital is now:
                </h5>
                <div className="btn-all mt-5">
                  <button className="btton-1">
                    <a className="links" href="#">
                      <i className="icofont-building-alt"></i>open
                    </a>
                  </button>
                  <button className="btton-2">
                    <a className="links" href="tel:+8801909218755">
                      <i className="icofont-headphone-alt-2"></i>call now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 bg-sky-400 h-full  lg:col-span-6  lg:text-start ">
            <ul className="list_time text-sm   text-white">
              <li className="py-5 md:px-20 px-5">
                <p>setarday</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
              <li className="py-5 md:px-20 px-5">
                <p>sunday</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
              <li className="py-5 md:px-20 px-5">
                <p>Mondey</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
              <li className="py-5 md:px-20 px-5">
                <p>tuesday</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
              <li className="py-5 md:px-20 px-5">
                <p>wednesday</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
              <li className="py-5 md:px-20 px-5">
                <p>thurshday</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
              <li className="py-5 md:px-20 px-5">
                <p>friday</p>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 08:30 AM
                </div>
                <div>
                  <i className="fa-light fa-clock mr-4"></i> 18:30 AM
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
