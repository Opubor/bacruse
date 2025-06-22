import { fetchContactInfo } from "@/services/contactInformation";
import Link from "next/link";
import React from "react";
import { FaClock, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

async function ContactInformationCard() {
  const contactInformation = await fetchContactInfo();

  return (
    <div className="w-full flex justify-start">
      <div className="text-darkblue mt-8 bg-white p-4 lg:p-6 rounded-2xl">
        <h1 className="underline underline-offset-2 uppercase mb-2">
          Contact us
        </h1>
        <p className="flex justify-start items-center gap-2 text-sm">
          <FaLocationDot /> {contactInformation?.at(0)?.address || "/"}
        </p>
        <Link
          href={`https://wa.me/${
            contactInformation?.at(0)?.whatsappNumber || "/"
          }`}
          target="_blank"
          className="flex justify-start items-center gap-2 text-sm mt-2"
        >
          <RiWhatsappFill /> {contactInformation?.at(0)?.whatsappNumber || "/"}
        </Link>
        <Link
          href={`tel:${contactInformation?.at(0)?.phoneNumber1! || "/"}`}
          target="blank"
          className="flex justify-start items-center gap-2 text-sm mt-2"
        >
          <IoCall /> {contactInformation?.at(0)?.phoneNumber1 || "/"}
        </Link>
        <Link
          href={`tel:${contactInformation?.at(0)?.phoneNumber2! || "/"}`}
          target="blank"
          className="flex justify-start items-center gap-2 text-sm mt-2"
        >
          <IoCall /> {contactInformation?.at(0)?.phoneNumber2 || "/"}
        </Link>
        <p className="flex justify-start items-center gap-2 text-sm mt-2">
          <FaClock /> {contactInformation?.at(0)?.openingHours || "/"}
        </p>
      </div>
    </div>
  );
}

export default ContactInformationCard;
