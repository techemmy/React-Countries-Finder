import { getCountry } from "../country";

export default async function countryPageLoader({ params }) {
  const country = await getCountry(params.countryCode);
  return country;
}
