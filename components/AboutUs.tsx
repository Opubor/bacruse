import { hospitalName } from "@/data/data";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

function AboutUs() {
  return (
    <div
      id="about_us"
      className="px-2 lg:px-12 xl:px-32 py-16 bg-gray-50 flex flex-col lg:flex-row justify-between items-center gap-6 scroll-mt-20"
    >
      <div className="relative bg-[url('/pic29.jpg')] bg-center bg-cover w-full lg:w-5/12 h-96 rounded-xl flex justify-center"></div>
      <div className="w-full lg:w-7/12">
        <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
          Our Vision
        </h1>
        <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
          Long-term aspiration
        </p>

        <p className="pt-4 text-sm text-justify">
          To be a leading force in redefining outpatient healthcare, where
          compassionate, accessible, and innovative medical care empowers
          individuals to live healthier, fuller lives.
        </p>
        <p className="pt-4 text-sm text-justify">
          We envision a future where quality healthcare is within reach for
          every community, driven by personalized attention, cutting-edge
          medical practices, and a deep commitment to patient well-being.
          Through continuous improvement and a human-centered approach, we aim
          to transform the outpatient experience and become a trusted partner in
          lifelong health
        </p>

        {/* <div className="pt-8">
        <Link
          href={"/"}
          className="bg-blue hover:bg-darkblue px-8 py-3 text-sm text-white rounded-lg"
        >
          More About Us
        </Link>
      </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
