import React from "react";

function QualityAssurance() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 pb-16 pt-8 bg-gray-50 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20"
    >
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Quality Assurance
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Committed to High Standards
        </p>

        <p className="pt-4 text-sm text-justify">
          At Barcruse Outpatient Clinic, excellence in care is non-negotiable.
          Every procedure, service, and interaction is guided by strict medical
          standards, continuous evaluation, and patient feedback. We uphold
          rigorous quality assurance practices to ensure safe, reliable, and
          compassionate healthcare. From clinical protocols to customer service,
          we are dedicated to delivering a seamless and trustworthy patient
          experience, because your health deserves nothing less than the best.
        </p>
      </div>
      <div className="relative bg-[url('/pic45.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center"></div>
    </div>
  );
}

export default QualityAssurance;
