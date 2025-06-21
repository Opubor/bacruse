"use client";
import React, { useState } from "react";
import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";

function BookAnAppointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!nameRegex.test(name.trim())) {
      return "Please enter a valid name (letters, spaces, and basic punctuation only).";
    }

    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!phoneRegex.test(phone.trim())) {
      return "Phone number should contain 10 to 15 digits.";
    }

    if (!dateTime.trim()) {
      return "Please select a date and time.";
    }

    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    const adminPhone = "2349139124809"; // Admin WhatsApp number
    const message = `📅 *New Appointment Booking*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Date & Time:* ${dateTime}`;

    const whatsappURL = `https://wa.me/${adminPhone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      id="book_appointment"
      className="px-2 lg:px-12 xl:px-32 bg-white flex flex-col lg:flex-row justify-between items-center gap-6 py-16 scroll-mt-20"
    >
      <div className="w-full lg:w-7/12 h-auto lg:h-96 bg-white rounded-2xl shadow-lg shadow-gray-300 flex flex-col lg:flex-row justify-between items-center gap-4 p-4">
        <div className="bg-[url('/pic47.jpg')] w-full lg:w-6/12 h-44 lg:h-full bg-center bg-cover rounded-2xl"></div>
        <div className="w-full lg:w-6/12">
          <h1 className="flex justify-start items-center gap-2 font-semibold text-lg pb-4">
            <FaRegCalendarAlt />
            Book an Appointment
          </h1>

          <form onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-600 text-xs font-medium my-2">{error}</p>
            )}
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-darkblue hover:bg-blue mt-4 py-3 w-full text-sm text-white rounded-md"
            >
              Book Appointment
            </button>
          </form>

          {/* <form>
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              placeholder="Name"
            />
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              placeholder="E-mail"
            />
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              placeholder="Phone Number"
            />
            <input
              className="border border-gray-300 p-2 rounded-md w-full mt-2 text-sm"
              type="datetime-local"
            />
            <button className="bg-darkblue hover:bg-blue mt-4 py-3 w-full text-sm text-white rounded-md">
              Book Appointment
            </button>
          </form> */}
        </div>
      </div>
      <div className="w-full lg:w-5/12 h-96 bg-[url('/pic46.jpg')] bg-center bg-cover rounded-2xl flex justify-end items-start p-6">
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4 flex justify-start items-center gap-2 w-11/12 lg:w-8/12">
          <div>
            <FaRegCalendarCheck className="text-xl text-blue" />
          </div>
          <div>
            <h1 className="text-sm font-semibold">Appointment</h1>
            <p className="text-xs text-gray-600">
              Book Appointment anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAnAppointment;
