const API_URL =
  "https://bright-car-0ea9deefa4.strapiapp.com/api/contactinformations";

export async function fetchContactInfo() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json.data;
}
