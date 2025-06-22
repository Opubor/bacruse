const API_URL =
  "https://bright-car-0ea9deefa4.strapiapp.com/api/medicalservices?populate=backgroundPicture&sort=createdAt:asc";

export async function fetchMedicalServices() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json.data;
}
