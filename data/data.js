const hospitalName = "Solar Clinic";

const navlinks = [
  { id: 0, name: "Home", link: "/" },
  { id: 1, name: "About Us", link: "/#about_us" },
  { id: 2, name: "Our Services", link: "/#our_services" },
  { id: 3, name: "Blog", link: "/#blog" },
  { id: 4, name: "Contact Us", link: "/#contact_us" },
];

const services = [
  {
    id: 1,
    service: "General Consultation",
    description:
      "Routine check-ups and medical advice from experienced physicians.",
    description2:
      "Our general consultation service is the first step to understanding your health. Experienced physicians are available to listen carefully to your concerns, perform physical examinations, and recommend appropriate treatments or specialist referrals. We prioritize patient comfort and thorough assessments in every visit.",
    backgroundPicture: "/pic16.jpg",
  },
  {
    id: 2,
    service: "Emergency Care",
    description:
      "24/7 urgent medical attention for accidents and critical conditions.",
    description2:
      "Our emergency department operates 24/7 to provide immediate care for accidents, injuries, and life-threatening conditions. With a dedicated team of doctors, nurses, and emergency responders, we are equipped to stabilize critical patients and offer timely interventions in a safe and controlled environment.",
    backgroundPicture: "/pic20.jpg",
  },
  {
    id: 3,
    service: "Laboratory",
    description:
      "Accurate testing, blood work, and imaging for timely diagnosis.",
    description2:
      "Our fully equipped laboratory provides accurate and efficient testing services to support your diagnosis and treatment. From routine blood tests to advanced imaging and diagnostics, our skilled technicians work closely with your doctors to ensure timely and reliable results for better medical decisions.",
    backgroundPicture: "/pic15.jpg",
  },
  {
    id: 4,
    service: "Maternity Services",
    description:
      "Prenatal care, delivery, and postnatal support for mothers and babies.",
    description2:
      "We offer comprehensive maternity care that covers every stage — from antenatal checkups and safe deliveries to postnatal support. Our dedicated team of obstetricians, midwives, and nurses provide a nurturing and safe environment for expectant mothers and newborns, making your childbirth experience positive and memorable.",
    backgroundPicture: "/pic18.jpg",
  },
  {
    id: 5,
    service: "Surgical Services",
    description:
      "Advanced surgical procedures with modern equipment and skilled surgeons.",
    description2:
      "Our hospital provides a wide range of surgical procedures — both elective and emergency. With state-of-the-art operating theaters and a team of highly skilled surgeons, we ensure each procedure is carried out with precision, care, and strict hygiene standards, from pre-surgery preparation to recovery.",
    backgroundPicture: "/pic17.jpg",
  },
  {
    id: 6,
    service: "Pharmacy",
    description:
      "On-site access to certified medications and prescription support.",
    description2:
      "Our in-house pharmacy offers quick and convenient access to certified medications prescribed by our doctors. Staffed by professional pharmacists, we ensure you receive the right dosage instructions, drug safety information, and friendly support to guide you through your treatment journey.",
    backgroundPicture: "/pic19.jpg",
  },
];

const staffs = [
  { id: 0, url: "/pic6.jpg", name: "Dr. James Maxwell", role: "Doctor" },
  { id: 1, url: "/pic7.jpg", name: "Dr. Catherine May", role: "Cardiologist" },
  { id: 2, url: "/pic8.jpg", name: "Dr. David Victory", role: "Optometrist" },
  { id: 3, url: "/pic9.jpg", name: "Dr. Sandra Omoko", role: "Dentist" },
  { id: 4, url: "/pic10.jpg", name: "Dr. Hannah Victor", role: "Nurse" },
  { id: 5, url: "/pic11.jpg", name: "Dr. Matthew Glory", role: "Nurse" },
  { id: 6, url: "/pic8.jpg", name: "Dr. Roy Judith", role: "Dermatologist" },
  { id: 7, url: "/pic7.jpg", name: "Dr. Juliet Osato", role: "Doctor" },
  { id: 8, url: "/pic6.jpg", name: "Dr. Divine Bimbo", role: "Doctor" },
  { id: 9, url: "/pic10.jpg", name: "Dr. Ejike Ebube", role: "Doctor" },
  { id: 10, url: "/pic11.jpg", name: "Dr. Jennifer Chopra", role: "Doctor" },
  { id: 11, url: "/pic9.jpg", name: "Dr. Chika TJ", role: "Doctor" },
];

const blog = [
  {
    id: 1,
    day: "19",
    month: "MAR",
    year: "2022",
    picture: "/pic1.jpg",
    title: "5 Signs You Should See a Doctor Sooner Than Later",
    paragraph1:
      "Many people delay visiting a doctor, hoping symptoms will pass. While some discomforts are harmless, others may signal something serious. Knowing when to act can make a big difference.",
    paragraph2:
      "Persistent fatigue that doesn’t improve with rest could point to underlying health issues like thyroid disorders, infections, or even anemia. It’s best to get it checked early.",
    paragraph3:
      "Unexplained pain, especially if it's recurring or increasing in intensity, should never be ignored. Pain is your body’s way of alerting you to a problem.",
    paragraph4:
      "Sudden weight loss or gain without changes in diet or activity could indicate metabolic or hormonal imbalances. A consultation can uncover the root cause.",
    paragraph5:
      "If you experience chest pain, shortness of breath, or dizziness, don’t wait. These could be symptoms of serious heart or lung conditions that require immediate medical attention.",
  },
  {
    id: 2,
    day: "23",
    month: "AUG",
    year: "2025",
    picture: "/pic4.jpg",
    title:
      "Preparing for a Healthy Pregnancy: What Every Expecting Mother Should Know",
    paragraph1:
      "Pregnancy is a beautiful journey, but it also requires proper planning and care. Starting with prenatal visits can ensure the best health outcomes for both mother and baby.",
    paragraph2:
      "Taking prenatal vitamins, especially folic acid, is essential in the early weeks. It helps in the development of the baby’s brain and spinal cord and reduces the risk of birth defects.",
    paragraph3:
      "Regular checkups allow doctors to monitor the baby’s growth, manage any risks, and provide guidance on nutrition, exercise, and lifestyle changes.",
    paragraph4:
      "It’s important to listen to your body. If you experience unusual symptoms like swelling, blurred vision, or severe cramps, inform your healthcare provider immediately.",
    paragraph5:
      "Creating a birth plan and choosing a trusted maternity facility can make delivery smoother. Our maternity team is here to support you every step of the way.",
  },
  {
    id: 3,
    day: "11",
    month: "JUN",
    year: "2016",
    picture: "/pic3.jpg",
    title: "Why Regular Health Screenings Could Save Your Life",
    paragraph1:
      "Many serious conditions — like high blood pressure, diabetes, and certain cancers — develop silently. Health screenings help detect them before symptoms appear.",
    paragraph2:
      "Routine checks such as blood pressure, cholesterol levels, and blood sugar can be done in a few minutes, yet they provide crucial insight into your overall health.",
    paragraph3:
      "Annual screenings tailored to your age, gender, and family history can help catch diseases early when they’re most treatable — or even prevent them entirely.",
    paragraph4:
      "Our hospital offers personalized screening packages, ensuring you get the right tests based on your unique health profile and lifestyle.",
    paragraph5:
      "Don’t wait until something feels wrong. Scheduling your next health screening is a simple, proactive step toward living a longer, healthier life.",
  },
];

const contactInformation = [
  {
    id: 0,
    whatsapp: "+2349139124809",
    phone1: "+2349139124809",
    phone2: "+2348119238643",
    email: "opubortony@gmail.com",
    address: "No. 9 rubber plantation Warri, Delta state, Nigeria.",
    openingHours: "MON - FRI, 9am - 5pm",
    facebook:
      "https://www.facebook.com/profile.php?id=100094794262869&mibextid=LQQJ4d",
    twitter: "https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA==",
    instagram: "https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA==",
  },
];

const gallery = [
  {
    id: 1,
    picture: "/pic9.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 2,
    picture: "/pic1.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 3,
    picture: "/pic2.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 4,
    picture: "/pic4.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 5,
    picture: "/pic6.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 6,
    picture: "/pic2.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 7,
    picture: "/pic12.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 8,
    picture: "/pic13.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
];

export {
  hospitalName,
  blog,
  contactInformation,
  navlinks,
  services,
  staffs,
  gallery,
};
