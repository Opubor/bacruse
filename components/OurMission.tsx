import React from "react";

function OurMission() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 pb-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20"
      data-aos="fade-up"
    >
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Our Mission
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Purpose & Goals
        </p>

        <p className="pt-4 text-sm text-justify">
          Our mission is clear and unwavering: to make high-quality outpatient
          healthcare accessible, compassionate, and patient-centered for all
          individuals, regardless of background or circumstance.
        </p>
        <p className="pt-4 text-sm text-justify">
          We are committed to delivering expert medical care through innovative
          practices, personalized attention, and a seamless care experience that
          prioritizes dignity, comfort, and trust.
        </p>
        <p className="pt-4 text-sm text-justify">
          By integrating medical excellence with empathy and forward-thinking
          solutions, we aim to remove barriers to care, promote wellness, and
          support healthier communities, one patient at a time
        </p>
      </div>
      <div className="relative bg-[url('/pic40.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center"></div>
    </div>
  );
}

export default OurMission;
