import {
  FaCheckDouble,
  FaClock,
  FaMedal,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";
import { contactInformation } from "@/data/data";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";
import ContactInformationCard from "./ContactInformationCard";
import HeaderSwiper from "./HeaderSwiper";

export default function Header() {
  return (
    <div className="relative w-full top-0 left-0 right-0 min-h-screen">
      <div className="absolute inset-0 z-0">
        <HeaderSwiper />
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Foreground Content */}
      <div className="relative top-0 left-0 right-0 z-20 flex items-center justify-center text-white">
        <div className="bg-center bg-cover  w-full flex flex-col justify-start items-start pt-28 lg:pt-36 pb-8 lg:pb-0">
          <div
            className="px-2 lg:px-12 xl:px-36 flex flex-col justify-start items-start w-full"
            data-aos="fade-left"
          >
            <h1 className="text-white p-2 lg:p-4 text-2xl lg:text-5xl font-extrabold w-full tracking-tighter flex justify-start items-center gap-2">
              Your Health, Our Priority <FaCheckDouble />
            </h1>
            <p className="text-sm lg:text-lg my-4 lg:my-6 text-white p-2 lg:p-4 w-full lg:w-8/12">
              We’re dedicated to providing exceptional, patient-centered
              healthcare using the latest medical innovations — with compassion,
              integrity, and a deep commitment to your total well-being.
            </p>

            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
              <Link
                href={"/#our_services"}
                className="border-2 border-white bg-darkblue text-white py-3 px-6 text-sm hover:bg-blue rounded-full flex justify-center items-center gap-2"
              >
                <MdLocalHospital className="text-lg" />
                Our Services
              </Link>
              <Link
                href={"/#book_appointment"}
                className="border-2 border-white bg-white text-darkblue py-3 px-6 text-sm hover:bg-blue rounded-full flex justify-center items-center gap-2"
              >
                <FaRegCalendarAlt className="text-lg" />
                Book an Appointment
              </Link>
            </div>

            {/* Contact Information Card */}
            <ContactInformationCard />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
        <div className="bg-center bg-cover lg:min-h-screen w-full flex flex-col justify-start items-start pt-72 pb-8 lg:pb-0">
          <div
            className="px-2 lg:px-12 xl:px-36 flex flex-col justify-start items-start w-full"
            data-aos="fade-left"
          >
            <h1 className="text-darkblue bg-white/85 p-2 lg:p-4 text-2xl lg:text-5xl font-bold w-full tracking-tighter flex justify-start items-center gap-2">
              Your Health, Our Priority <FaCheckDouble />
            </h1>
            <p className="text-sm lg:text-lg my-8 bg-darkblue text-white p-2 lg:p-4 w-full text-left">
              Expert care, modern technology, and a compassionate team — all in
              one place.
            </p>

            <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
              <Link
                href={"/#our_services"}
                className="border-2 border-white bg-darkblue text-white py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
              >
                <MdLocalHospital className="text-lg" />
                Our Services
              </Link>
              <Link
                href={"/#book_appointment"}
                className="border-2 border-white bg-white text-darkblue py-3 px-6 text-sm hover:bg-blue rounded-md flex justify-center items-center gap-2"
              >
                <FaRegCalendarAlt className="text-lg" />
                Book an Appointment
              </Link>
            </div>

            <div className="text-darkblue mt-8 bg-white p-6 rounded-2xl">
              <h1 className="underline underline-offset-2 uppercase mb-2">
                Contact us
              </h1>
              <p className="flex justify-start items-center gap-2 text-sm">
                <FaLocationDot /> {contactInformation?.at(0)?.address}
              </p>
              <Link
                href={`https://wa.me/${contactInformation?.at(0)?.whatsapp}`}
                target="_blank"
                className="flex justify-start items-center gap-2 text-sm mt-2"
              >
                <IoLogoWhatsapp /> {contactInformation?.at(0)?.whatsapp}
              </Link>
              <Link
                href={`tel:${contactInformation?.at(0)?.phone1!}`}
                target="blank"
                className="flex justify-start items-center gap-2 text-sm mt-2"
              >
                <IoCall /> {contactInformation?.at(0)?.phone1}
              </Link>
              <Link
                href={`tel:${contactInformation?.at(0)?.phone2!}`}
                target="blank"
                className="flex justify-start items-center gap-2 text-sm mt-2"
              >
                <IoCall /> {contactInformation?.at(0)?.phone2}
              </Link>
              <p className="flex justify-start items-center gap-2 text-sm mt-2">
                <FaClock /> {contactInformation?.at(0)?.openingHours}
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="hidden lg:flex w-5/12"></div>
            <div className="w-full lg:w-7/12 backdrop-blur-md flex justify-between items-center mt-16 lg:border-l lg:border-l-white border-t border-t-white lg:rounded-tl-3xl">
              <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                <FaShieldAlt className="text-2xl lg:text-6xl" />
                <h1 className="text-xs lg:text-sm">Trusted</h1>
              </div>
              <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                <HiBadgeCheck className="text-2xl lg:text-6xl" />
                <h1 className="text-xs lg:text-sm">Certified</h1>
              </div>
              <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                <FaMedal className="text-2xl lg:text-6xl" />
                <h1 className="text-xs lg:text-sm">Accredited</h1>
              </div>
              <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
                <FaUserMd className="text-2xl lg:text-6xl" />
                <h1 className="text-xs lg:text-sm">Experienced</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */
}

// <div className="flex justify-between w-full">
//   <div className="hidden lg:flex w-5/12"></div>
//   <div className="w-full lg:w-7/12 backdrop-blur-md flex justify-between items-center mt-16 lg:border-l lg:border-l-white border-t border-t-white lg:rounded-tl-3xl">
//     <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
//       <FaShieldAlt className="text-2xl lg:text-6xl" />
//       <h1 className="text-xs lg:text-sm">Trusted</h1>
//     </div>
//     <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
//       <HiBadgeCheck className="text-2xl lg:text-6xl" />
//       <h1 className="text-xs lg:text-sm">Certified</h1>
//     </div>
//     <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
//       <FaMedal className="text-2xl lg:text-6xl" />
//       <h1 className="text-xs lg:text-sm">Accredited</h1>
//     </div>
//     <div className="text-white flex flex-col justify-center items-center gap-1 p-8 w-3/12">
//       <FaUserMd className="text-2xl lg:text-6xl" />
//       <h1 className="text-xs lg:text-sm">Experienced</h1>
//     </div>
//   </div>
// </div>;
