import { getCountries } from "../country";

export default async function countryCardListLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q"),
    region = url.searchParams.get("region");
  const countries = await getCountries(q, region);
  return countries;
}
