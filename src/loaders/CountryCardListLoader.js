import { getCountries, getRegions } from "../country";

export default async function countryCardListLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q"),
    region = url.searchParams.get("region");
  const countries = await getCountries(q == null ? q : q.trim(), region);
  const regions = getRegions(countries);
  return { countries, q, region, regions };
}
