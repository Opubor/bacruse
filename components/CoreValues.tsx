import React from "react";

function CoreValues() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 pb-16 pt-8 bg-gray-50 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20"
    >
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Core Values
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Excellence Through Service
        </p>

        <p className="pt-4 text-sm text-justify">
          At Barcruse Outpatient Clinic, four core values guide everything we
          do: Compassion, Accessibility, Excellence, and Trust. We treat every
          patient with empathy and respect. Our commitment to accessibility
          means we provide affordable, inclusive healthcare for all. We pursue
          excellence through high standards and continuous improvement.We build
          lasting trust through transparency.
        </p>
      </div>
      <div className="relative bg-[url('/pic43.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center"></div>
    </div>
  );
}

export default CoreValues;
