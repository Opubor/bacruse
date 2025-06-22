import React from "react";
import OurServicesClient from "./OurServicesClient";
import { fetchMedicalServices } from "@/services/medicalServices";

async function OurServices() {
  const services = await fetchMedicalServices();

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

      <OurServicesClient services={services} />
    </div>
  );
}

export default OurServices;

// <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4 pt-8">
//   {services?.map((data) => (
//     <div
//       key={data?.id}
//       className="flex justify-between items-center bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/pic29.jpg')] bg-center bg-cover"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${data.backgroundPicture})`,
//         }}
//         className="w-2/12 h-full bg-center bg-cover"
//       ></div>

//       <div className="w-10/12 flex justify-between items-center">
//         <h1 className="text-white lg:text-md p-4">{data?.service}</h1>
//         <div
//           onClick={() => {
//             setOpenModal(true), setServiceId(data?.id);
//           }}
//           className="text-white border-l-2 border-l-white h-full p-2 lg:p-4 cursor-pointer"
//         >
//           <FaChevronRight />
//         </div>
//       </div>
//     </div>
//   ))}
// </div>;
