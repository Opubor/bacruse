const hospitalName = "Barcruse";
const hospitalName2 = "Outpatient Clinic";

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
    service: "Medical Consultation",
    description:
      "Routine check-ups and medical advice from experienced physicians.",
    description2:
      "Our general consultation service is the first step to understanding your health. Experienced physicians are available to listen carefully to your concerns, perform physical examinations, and recommend appropriate treatments or specialist referrals. We prioritize patient comfort and thorough assessments in every visit.",
    backgroundPicture: "/pic16.jpg",
  },
  {
    id: 2,
    service: "Eye Clinic",
    description: "We are committed to helping you see the world more clearly.",
    description2:
      "Our Eye Clinic provides expert eye examinations, diagnosis, and treatment for a wide range of eye conditions. From routine vision checks and prescription lenses to managing eye infections and monitoring chronic eye diseases, our dedicated team ensures personalized and professional care in a comfortable environment.",
    backgroundPicture: "/pic31.jpg",
  },
  {
    id: 3,
    service: "Dental Clnic",
    description:
      "Your smile is our priority, and we’re committed to keeping it healthy and bright.",
    description2:
      "Our Dental Clinic offers a full range of oral health services, including dental check-ups, cleanings, fillings, tooth extractions, and preventive care. With modern equipment and a gentle approach, our experienced dentists are dedicated to providing high-quality treatment in a friendly and relaxing environment.",
    backgroundPicture: "/pic32.jpg",
  },
  {
    id: 4,
    service: "Medical Laboratory",
    description: "Accurate testing is the foundation of effective healthcare.",
    description2:
      "Our Medical Laboratory provides reliable diagnostic services using advanced equipment and strict quality control standards. From routine blood tests and urinalysis to specialized screenings, our skilled laboratory scientists ensure fast, precise results to support timely diagnosis and treatment decisions.",
    backgroundPicture: "/pic33.jpg",
  },
  {
    id: 5,
    service: "Dispensary",
    description:
      "Your trusted stop for safe, affordable, and reliable medications.",
    description2:
      "Our Dispensary ensures that patients receive high-quality, properly dispensed medications prescribed by our healthcare professionals. With a focus on safety, affordability, and patient education, our pharmacists are always available to provide guidance on proper drug usage and answer any questions you may have.",
    backgroundPicture: "/pic34.jpg",
  },
];

const staffs = [
  { id: 0, url: "/pic8.jpg", name: "Dr. James Maxwell", role: "Doctor" },
  { id: 1, url: "/pic8.jpg", name: "Dr. Catherine May", role: "Cardiologist" },
  { id: 2, url: "/pic8.jpg", name: "Dr. David Victory", role: "Optometrist" },
  { id: 3, url: "/pic8.jpg", name: "Dr. Sandra Omoko", role: "Dentist" },
  { id: 4, url: "/pic8.jpg", name: "Dr. Hannah Victor", role: "Nurse" },
  { id: 5, url: "/pic8.jpg", name: "Dr. Matthew Glory", role: "Nurse" },
  { id: 6, url: "/pic8.jpg", name: "Dr. Roy Judith", role: "Dermatologist" },
  { id: 7, url: "/pic8.jpg", name: "Dr. Juliet Osato", role: "Doctor" },
  { id: 8, url: "/pic8.jpg", name: "Dr. Divine Bimbo", role: "Doctor" },
  { id: 9, url: "/pic8.jpg", name: "Dr. Ejike Ebube", role: "Doctor" },
  { id: 10, url: "/pic8.jpg", name: "Dr. Jennifer Chopra", role: "Doctor" },
  { id: 11, url: "/pic8.jpg", name: "Dr. Chika TJ", role: "Doctor" },
];

const blog = [
  {
    id: 1,
    day: "17",
    month: "MAR",
    year: "2025",
    picture: "/pic56.jpg",
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
    day: "14",
    month: "MAY",
    year: "2025",
    picture: "/pic55.jpg",
    title: "Building a Healthier Lifestyle: Small Changes, Big Impact",
    paragraph1:
      "Living a healthy life doesn’t have to mean making huge, overwhelming changes overnight. In fact, some of the most powerful health transformations come from small, consistent habits that gradually improve your overall well-being. At Barcruse Outpatient Clinic, we believe in empowering individuals and families to take charge of their health — one step at a time.",
    paragraph2:
      "Simple daily habits like drinking more water, walking for 30 minutes, or eating more vegetables can significantly reduce your risk of common illnesses like heart disease, diabetes, and obesity. These changes may seem small, but over time, they build a strong foundation for lasting health. Combined with regular sleep and stress management, your body begins to function more efficiently — improving mood, energy, and immunity.",
    paragraph3:
      "Nutrition is another essential part of a healthy lifestyle. A balanced diet full of fresh fruits, vegetables, whole grains, and lean proteins helps fuel your body and prevent chronic diseases. It’s also important to limit processed foods, sugary drinks, and excessive salt. Our clinic’s nutrition team is always available to offer personalized dietary advice and support based on your health needs.",
    paragraph4:
      "Preventive care is just as important as your lifestyle choices. Regular health check-ups, dental cleanings, eye exams, and lab screenings help ensure you catch any potential issues early. At Barcruse Outpatient Clinic, we make it easy by offering all these services in one convenient and welcoming location — so you can focus on living well.",
    paragraph5:
      "Your health journey doesn’t have to be perfect — it just needs to start. Whether you’re making your first visit or returning for ongoing care, we’re here to support your goals every step of the way. Small changes today lead to a healthier, happier you tomorrow.",
  },
  {
    id: 3,
    day: "11",
    month: "JUN",
    year: "2025",
    picture: "/pic54.jpg",
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
    whatsapp: "+2347049088169",
    phone1: "+2347049088169",
    phone2: "+23408162745083",
    email: "barcruseoutpatientclinic@gmail.com",
    address:
      "15b Yalinga Street, Wuse 2, Abuja 900288, Federal Capital Territory",
    openingHours: "MON - FRI - 9am - 5pm; SAT - 10am - 3pm",
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
  hospitalName2,
  blog,
  contactInformation,
  navlinks,
  services,
  staffs,
  gallery,
};
