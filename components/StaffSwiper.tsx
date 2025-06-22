"use client";
// import { staffs } from "@/data/data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  staffs: any;
}

function StaffSwiper({ staffs }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      navigation={true}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation, Navigation]}
      className="mySwiper"
    >
      {staffs.map((data: any) => (
        <SwiperSlide key={data?.id}>
          <div
            key={data?.id}
            className="flex flex-col justify-center items-center"
          >
            <Image
              src={data?.picture?.url || "/pic4.jpg"}
              alt="picture"
              width={3000}
              height={3000}
              className="w-full h-80 object-center object-cover"
            />

            <div className="bg-white px-4 xl:px-16 py-2 flex flex-col items-center justify-center lg:gap-0.5 shadow-lg shadow-gray-200 -translate-y-6">
              <h1 className="text-darkblue text-sm lg:text-md">{data?.name}</h1>
              <h2 className="text-gray-600 text-sm">{data?.role}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StaffSwiper;
