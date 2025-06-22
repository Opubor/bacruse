"use client";
import { gallery } from "@/data/data";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  gallery: any;
}

function GalleryClient({ gallery }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [galleryId, setGalleryId] = useState<number>(0);

  const clickedPicture = gallery?.find(
    (gallery: any) => gallery?.id === galleryId
  );

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [galleryId]);
  return (
    <div>
      {" "}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1"
        data-aos="fade-up"
      >
        {gallery?.map((data: any) => (
          <div
            key={data?.id}
            className="w-full h-44 lg:h-72 overflow-hidden transition duration-1000 ease-in-out"
          >
            <div
              onClick={() => {
                setOpenModal(true), setGalleryId(data?.id);
              }}
              key={data?.id}
              style={{
                backgroundImage: `url(${data?.picture?.url})`,
              }}
              className={`bg-center bg-cover w-full h-44 lg:h-72 hover:scale-110 overflow-hidden cursor-pointer`}
            ></div>
          </div>
        ))}
      </div>
      {/* ===Picture Modal=== */}
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full min-h-screen bg-black/75 p-4`}
      >
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 flex flex-col justify-center items-center border-2 border-white">
          <div
            key={clickedPicture?.id}
            style={{
              backgroundImage: `url(${clickedPicture?.picture?.url})`,
            }}
            className={`bg-center bg-cover w-full h-44 lg:h-72 flex justify-end items-start`}
            data-aos="fade-up"
          >
            <div
              onClick={() => {
                setOpenModal(false), setGalleryId(0);
              }}
              className="flex justify-center items-center gap-2 p-2 text-xl text-white font-extrabold cursor-pointer bg-gray-900/60"
            >
              <MdClose size={20} className=" hover:animate-spin" />
            </div>
          </div>
          {clickedPicture?.caption && (
            <p className="text-sm text-center text-gray-600 bg-white py-2 w-full">
              {clickedPicture?.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GalleryClient;
