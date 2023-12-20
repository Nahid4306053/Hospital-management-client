
import PageBanner from "../Components/Home/PageBanner";
import Appointment_Img from '/Appointment_Img/Appointment_Img.png'
import ApponintmentSection from "../Components/Home/ApponintmentSection";
export default function Appointment() {
  return (
    <div className="Appointment">
      <PageBanner Sub_title="a Simpol Appointment" title_name="Appointment" page_name="Appointment" />

      <div className="Appointment_take my-20">
          <div className="container mx-auto grid items-center grid-cols-1 gap-20 lg:grid-cols-2 ">
                <div className="Appointment_Img">
                   <img className="w-full object-cover " src={Appointment_Img} alt="" />
                </div>

                <div className="Appointment_Conten">
                <ApponintmentSection display="none"/>
                </div>

          </div>
      </div>

    </div>
  );
}
