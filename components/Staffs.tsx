import React from "react";
import StaffSwiper from "./StaffSwiper";
import { fetchMedicalStaffs } from "@/services/medicalStaffs";

async function Staffs() {
  const medicalStaffs = await fetchMedicalStaffs();

  return (
    <div className="px-2 lg:px-12 xl:px-32 py-8">
      <h1 className="uppercase border-l-2 border-l-black text-sm px-2">
        Meet Our Expert Medical Team
      </h1>
      <p className="text-lg lg:text-2xl pt-4 font-bold tracking-tighter pb-8">
        Qualified. Compassionate. Dedicated to your health.
      </p>

      <StaffSwiper staffs={medicalStaffs} />
    </div>
  );
}

export default Staffs;
