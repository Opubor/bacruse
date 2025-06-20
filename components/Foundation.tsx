import React from "react";

function Foundation() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 pb-16 pt-8 bg-gray-50 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20"
    >
      <div className="relative bg-[url('/pic41.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center"></div>
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Our Foundation
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Built on care
        </p>

        <p className="pt-4 text-sm text-justify">
          At Barcruse Outpatient Clinic, we are committed to redefining
          outpatient healthcare by providing accessible, compassionate, and
          high-quality medical services tailored to the needs of our community.
          Founded in 2025 and located in Abuja, Nigeria, Barcruse was
          established with a clear purpose: to bridge the gap in outpatient care
          and offer a welcoming, patient-first environment where every
          individual receives the attention and treatment they deserve. Our
          clinic brings together a team of skilled medical professionals,
          caregivers, and innovators who are passionate about delivering
          excellence in everyday healthcare. We believe that health should never
          be out of reach-and through empathy, efficiency, and continuous
          improvement, Barcruse aims to become a trusted pillar of wellness in
          the heart of the city and beyond.
        </p>
      </div>
    </div>
  );
}

export default Foundation;
