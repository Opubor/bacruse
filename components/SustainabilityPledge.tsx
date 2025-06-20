import React from "react";

function SustainabilityPledge() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 pb-16 pt-8 bg-gray-50 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20"
    >
      <div className="relative bg-[url('/pic44.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center"></div>
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Sustainability Pledge
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Caring for Health and Earth
        </p>

        <p className="pt-4 text-sm text-justify">
          At Barcruse Outpatient Clinic, we are committed to promoting health in
          a way that sustains both people and the planet. We strive to integrate
          environmentally responsible practices, support community well-being,
          and operate with economic integrity. Reducing medical waste and
          conserving energy to collaborating with local partners, we aim to
          build a healthier, more sustainable future
        </p>
      </div>
    </div>
  );
}

export default SustainabilityPledge;
