import HeaderSwiper from "@/components/HeaderSwiper";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Staffs from "@/components/Staffs";
import AboutUs from "@/components/AboutUs";
import BookAnAppointment from "@/components/BookAnAppointment";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import Link from "next/link";
import BackgroundSwiper from "@/components/ComponentX";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white text-black">
      <Navbar />

      {/* <HeaderSwiper /> */}

      <BackgroundSwiper />
      <OurServices />

      <BookAnAppointment />

      <ContactUs />

      <Staffs />

      <OurVision />

      <OurMission />

      <div className="bg-darkblue py-4 w-full flex justify-center">
        <Link
          href={"/about-us"}
          className="bg-white px-16 py-4 rounded-full hover:bg-lightblue text-sm"
        >
          Learn More About Us
        </Link>
      </div>

      <WhyChooseUs />

      <Gallery />

      <Blog />

      <Footer />
    </div>
  );
}
