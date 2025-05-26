"use client";
import { services } from "@/data/data";
import React, { useEffect, useState } from "react";
import { FaDotCircle, FaStethoscope } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function OurServices() {
  const [openModal, setOpenModal] = useState(false);
  const [serviceId, setServiceId] = useState<number>(0);

  const clicked = services.find((data) => data?.id === serviceId);

  useEffect(() => {}, [serviceId]);
  return (
    <div
      id="our_services"
      className="px-2 lg:px-12 xl:px-32 py-8 lg:py-16 scroll-mt-20"
    >
      <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
        Our Medical Services
      </h1>
      <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter">
        Explore the care and expertise we offer at every stage of your health
        journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 pt-8">
        {services?.map((data) => (
          <div
            key={data?.id}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.backgroundPicture})`,
            }}
            className={`p-6 flex flex-col items-center justify-center bg-center bg-cover shadow-lg shadow-gray-400`}
          >
            <div className="p-6 bg-white rounded-full">
              <FaStethoscope className="text-darkblue" />
            </div>

            <h1 className="bg-darkblue text-sm md:text-md lg:text-xl font-semibold tracking-tight text-white px-8 py-2 my-2">
              {data?.service}
            </h1>

            <p className="text-sm text-white text-center">
              {data?.description}
            </p>

            <div
              onClick={() => {
                setOpenModal(true), setServiceId(data?.id);
              }}
              className="bg-white hover:bg-darkblue hover:text-white cursor-pointer text-xs text-darkblue py-3 px-12 mt-4 rounded-lg border border-darkblue"
            >
              Explore
            </div>
          </div>
        ))}
      </div>

      {/* ===Modal=== */}
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/75 p-4`}
      >
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 flex flex-col justify-center items-center bg-white">
          <div
            style={{
              backgroundImage: `url(${clicked?.backgroundPicture})`,
            }}
            className={`w-full h-44 lg:h-72 bg-center bg-cover`}
          >
            <div className="flex justify-end items-center p-4 cursor-pointer">
              <div
                onClick={() => {
                  setOpenModal(false), setServiceId(0);
                }}
                className="flex justify-center items-center gap-2 bg-white border-2 border-wine rounded-full p-2 text-xs"
              >
                <MdClose size={20} className=" hover:animate-spin" />
              </div>
            </div>
          </div>

          <div className="pt-4 pb-12 px-4">
            <div className="text-center">
              <h2 className="tracking-tighter relative inline-block text-2xl lg:text-3xl font-bold text-wine after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-3/3 after:bg-gradient-to-r after:from-wine after:to-rose-700 after:rounded-full">
                {clicked?.service}
              </h2>
            </div>
            <p className="text-gray-700 text-xs lg:text-sm text-center py-4 underline underline-offset-2">
              {clicked?.description}
            </p>

            <p className="text-justify text-xs lg:text-sm">
              {clicked?.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
