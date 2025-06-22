const API_URL =
  "https://bright-car-0ea9deefa4.strapiapp.com/api/medicalstaffs?populate=picture&sort=createdAt:asc";

export async function fetchMedicalStaffs() {
  const res = await fetch(API_URL, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    console.error("Failed to fetch data", res.statusText);
    return [];
  }

  const json = await res.json();
  return json.data;
}
