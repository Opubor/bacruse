import CoreValues from "@/components/CoreValues";
import Foundation from "@/components/Foundation";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import QualityAssurance from "@/components/QualityAssurance";
import SustainabilityPledge from "@/components/SustainabilityPledge";
import React from "react";

function Page() {
  return (
    <div>
      <h1 className="text-darkblue text-xl lg:text-4xl font-extrabold text-center underline mb-8">
        About-us
      </h1>

      <OurVision />
      <OurMission />
      <Foundation />
      <CoreValues />
      <SustainabilityPledge />
      <QualityAssurance />
    </div>
  );
}

export default Page;
