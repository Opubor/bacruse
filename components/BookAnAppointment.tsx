import React, { useState } from "react";
import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";
import BookAnAppointmentClient from "./BookAnAppointmentClient";
import { fetchContactInfo } from "@/services/contactInformation";

async function BookAnAppointment() {
  const contactInformation = await fetchContactInfo();

  return (
    <>
      <BookAnAppointmentClient
        // adminPhoneNumber="2349139124809"
        adminPhoneNumber={contactInformation?.at(0)?.whatsappNumber}
      />
    </>
  );
}

export default BookAnAppointment;
