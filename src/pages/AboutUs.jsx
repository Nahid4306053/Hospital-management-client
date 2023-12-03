import React from "react";
import Dentistry_hospital from "/Dentistry-hospital.jpg";
export default function AboutUs() {
  return (
    <div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${Dentistry_hospital})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Nahid Health Care Hospital</h1>
            <p className="mb-5">
            At Nahid Health Care Hospital, we believe that a healthy smile can brighten your
          life.Our dedicated team of experienced dental professionals is
          committed to providing comprehensive, high-quality dental care with a
          personal touch.
            </p>
            <button className="btn btn-info text-white rounded-none">Get Appoinmnet</button>
          </div>
        </div>
      </div>
      <div class="container mx-auto space-y-5 mt-20">
        <h1 className="text-2xl font-bold">Welcome to Nahid Health Care Hospital</h1>
        <p className="text-lg leading-8">
          At Nahid Health Care Hospital, we believe that a healthy smile can brighten your
          life. Our dedicated team of experienced dental professionals is
          committed to providing comprehensive, high-quality dental care with a
          personal touch. We understand that visiting the dentist can be a
          stressful experience for some, so we strive to create a warm and
          welcoming atmosphere where you can feel at ease.
        </p>

        <h2 className="text-xl font-bold">Our Mission  :</h2>
        <p >
          Our mission is to promote optimal oral health for our patients by
          delivering personalized and compassionate dental services. We are
          dedicated to improving and maintaining the oral health of our
          community by offering a wide range of dental treatments using the
          latest technology and techniques. Your health and comfort are our top
          priorities, and we aim to exceed your expectations at every visit.
        </p>

        <h2 className="text-xl font-bold" >Expert Care, Exceptional Service  :</h2>
        <p>
          At Nahid Health Care Hospital, you can expect to receive expert dental care
          tailored to your individual needs. Our skilled dentists and hygienists
          are passionate about what they do and are committed to ongoing
          education and training to provide you with the best possible care.
          Whether you need a routine check-up, advanced restorative procedures,
          or cosmetic dentistry services, we have the expertise to enhance your
          smile and improve your overall oral health.
        </p>

        <h2 className="text-xl font-bold" >Patient-Centered Approach  :</h2>
        <p>
          We believe in the importance of building strong relationships with our
          patients. Your comfort and satisfaction are paramount to us, and we
          take the time to listen to your concerns and answer any questions you
          may have. We are dedicated to educating our patients about their oral
          health and empowering them to make informed decisions about their
          dental care.
        </p>

        <h2 className="text-xl font-bold" >State-of-the-Art Facilities  :</h2>
        <p>
          Our modern and inviting dental facility is equipped with
          state-of-the-art technology to ensure accurate diagnoses and
          efficient, comfortable treatments. We adhere to strict sterilization
          protocols to guarantee a safe and hygienic environment for our
          patients. From the moment you step into our clinic to the completion
          of your treatment, you can expect the highest standard of care and
          professionalism.
        </p>

        <h2 className="text-xl font-bold" >Schedule Your Appointment  :</h2>
        <p>
          We invite you to experience the exceptional dental care that sets
          Nahid Health Care Hospital apart. Whether you are due for a routine check-up or
          need specialized dental services, we are here to serve you.{" "}
          <strong>Schedule your appointment today</strong> and take the first
          step toward achieving a healthier, more confident smile.
        </p>

        <p>
          Thank you for considering Nahid Health Care Hospital as your dental care
          provider. We look forward to welcoming you to our dental family and
          helping you achieve optimal oral health.
        </p>
      </div>
    </div>
  );
}
