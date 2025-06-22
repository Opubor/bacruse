"use client";
import { services } from "@/data/data";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";

interface Props {
  services: any;
}

function OurServicesClient({ services }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [serviceId, setServiceId] = useState<number>(0);

  const clicked = services?.find((data: any) => data?.id === serviceId);

  useEffect(() => {}, [serviceId]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 pt-8">
        {services?.map((data: any) => (
          <div
            key={data?.id}
            className="w-full h-auto rounded-xl shadow-lg shadow-gray-300"
          >
            <div
              style={{
                backgroundImage: `url(${data?.backgroundPicture?.url})`,
              }}
              className="w-full h-40 rounded-xl bg-center bg-cover"
            ></div>

            <div className="flex flex-col justify-center items-center p-4">
              <h1 className="text-darkblue text-center font-bold lg:text-xl tracking-tighter underline p-4 uppercase">
                {data?.name}
              </h1>
              <p className="text-center">{data?.description1}</p>
              <div
                onClick={() => {
                  setOpenModal(true), setServiceId(data?.id);
                }}
                className="cursor-pointer bg-darkblue hover:bg-blue flex justify-center items-center gap-1 text-sm text-white rounded-full px-16 py-3 mt-4"
              >
                <span>Read more</span>
                <FaChevronRight />
              </div>
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
              backgroundImage: `url(${clicked?.backgroundPicture?.url})`,
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
                {clicked?.name}
              </h2>
            </div>
            <p className="text-gray-700 text-sm text-center py-4 underline underline-offset-2">
              {clicked?.description1}
            </p>

            <p className="text-justify text-sm">{clicked?.description2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServicesClient;
