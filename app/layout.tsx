import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barcruse Outpatient Clinic – Medical, Dental & Eye Care in Abuja",
  description:
    "Barcruse Outpatient Clinic in Wuse 2, Abuja offers expert care in general consultation, eye tests, glasses prescriptions, dental treatments, HIV testing, blood work, malaria diagnosis, antenatal services, and a full dispensary for medications.",
  icons: "/logo1.png",
  keywords:
    "Barcruse Clinic Abuja, Hospital Wuse 2, Eye Clinic Abuja, Glasses Prescription Abuja, Dental Clinic Abuja, Tooth Extraction, Dental Cleaning, HIV Test Abuja, Malaria Treatment, Antenatal Clinic, Blood Test Center Abuja, Vaccination Center, Blood Pressure Check, Medical Laboratory Abuja, Medication Dispensary, Health Checkup, Medical Consultation, Hospital Near Me, Clinics in Abuja",

  openGraph: {
    title: "Barcruse Outpatient Clinic – Expert Medical & Eye Care in Abuja",
    description:
      "Located in Wuse 2, Abuja, Barcruse Clinic provides trusted outpatient services including eye exams, dental procedures, HIV and malaria testing, blood work, antenatal care, and a pharmacy-grade dispensary.",
    url: "https://hospital-landingpage1.netlify.app/",
    siteName: "Barcruse Outpatient Clinic",
    images: [
      {
        url: "https://hospital-landingpage1.netlify.app/pic23.jpg",
        width: 1200,
        height: 630,
        alt: "Barcruse Clinic – Eye Tests, Dental Work, HIV & Lab Testing in Abuja",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Barcruse Outpatient Clinic – Eye, Dental & Medical Services",
    description:
      "From glasses prescriptions to blood tests, Barcruse Clinic offers complete outpatient care in Wuse 2, Abuja. Visit for medical consultation, dental care, HIV testing, malaria treatment & more.",
    images: ["https://hospital-landingpage1.netlify.app/pic23.jpg"],
  },
};

// export const metadata: Metadata = {
//   title: "Barcruse Outpatient Clinic",
//   description:
//     "A professional hospital website that helps clients access your services, view contact information, book appointments, build trust in your care, and much more — all in one place.",
//   icons: "/logo1.png",
//   keywords: "Hospital website demo",
//   openGraph: {
//     title: "Hospital Website Demo",
//     description:
//       "A professional hospital website that helps clients access your services, view contact information, book appointments, build trust in your care, and much more — all in one place.",
//     url: "https://hospital-landingpage1.netlify.app/",
//     siteName: "Hospital website demo",
//     images: [
//       {
//         url: "https://hospital-landingpage1.netlify.app/pic23.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Hospital website demo",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Hospital Website Demo",
//     description: "Hospital Website Demo",
//     images: ["https://hospital-landingpage1.netlify.app/pic23.jpg"],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
