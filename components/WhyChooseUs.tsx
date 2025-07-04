import { hospitalName } from "@/data/data";
import Link from "next/link";
import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { MdMemory } from "react-icons/md";

function WhyChooseUs() {
  return (
    <div className="relative min-h-screen lg:h-screen overflow-hidden px-2 lg:px-12 xl:px-32 py-8">
      <div className="absolute inset-0 blur-sm scale-105 bg-[url('/pic52.jpg')] bg-center bg-cover flex flex-col xl:flex-row justify-between items-center gap-6 py-8" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 h-full">
        <div className="w-full lg:w-6/12 flex flex-col justify-center items-start gap-4">
          <h2 className="tracking-tighter text-2xl lg:text-4xl font-bold text-white">
            Why Choose Us
          </h2>
          <p className="text-sm lg:text-base text-white">
            At {hospitalName}, we offer more than just treatment — we provide
            care you can trust. With certified experts, modern facilities, and a
            heart for every patient, your health is in the best hands. Because
            here, your well-being is our mission.
          </p>
          <Link
            href={"/#book_appointment"}
            className="bg-white hover:bg-darkblue hover:text-white mt-4 py-3 px-8 text-sm text-darkblue rounded-md"
          >
            Book Appointment
          </Link>
        </div>
        <div className="w-full lg:w-6/12 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
          <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
              <CiSquareCheck className="text-blue text-4xl" />
            </div>
            <h1 className="font-bold pt-2">Expertise</h1>
            <p className="text-sm text-center pt-2">
              Our team of licensed doctors, nurses, and specialists bring years
              of experience and are committed to delivering high-quality,
              evidence-based care you can trust.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
              <FaRegClock className="text-blue text-4xl" />
            </div>
            <h1 className="font-bold pt-2">Availability</h1>
            <p className="text-sm text-center pt-2">
              With 24/7 emergency services, you can count on us anytime for
              quick, reliable, and life-saving care.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
              <FaRegHeart className="text-blue text-4xl" />
            </div>
            <h1 className="font-bold pt-2">Compassion</h1>
            <p className="text-sm text-center pt-2">
              Every patient is treated with empathy, respect, and kindness —
              because healing starts with how you're cared for.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center p-6 rounded-full bg-white border-2 border-blue">
              <MdMemory className="text-blue text-4xl" />
            </div>
            <h1 className="font-bold pt-2">Technology</h1>
            <p className="text-sm text-center pt-2">
              We use cutting-edge medical equipment and modern tools to deliver
              accurate results and effective treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
