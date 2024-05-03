export async function getCountries(q, region) {
  let countries;

  const cachedCountries = JSON.parse(localStorage.getItem("countries"));
  if (cachedCountries && cachedCountries.length > 0) {
    countries = cachedCountries;
  } else if (!cachedCountries || cachedCountries.length <= 0) {
    const request = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
    );
    countries = await request.json();
    localStorage.setItem("countries", JSON.stringify(countries));
  } else {
    countries = [];
  }

  if (q && q !== "") {
    countries = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(q.toLowerCase()) ||
        country.name.official.toLowerCase().includes(q.toLowerCase())
      );
    });
  }

  if (region && region !== "") {
    countries = countries.filter((country) => {
      return country.region.toLowerCase().includes(region.toLowerCase());
    });
  }

  return countries;
}

export function getRegions(countries) {
  let cachedRegions = JSON.parse(localStorage.getItem("regions"));
  if (cachedRegions && cachedRegions.length > 0) {
    return cachedRegions;
  }

  const regions = new Set(
    countries.map((country) => {
      return country.region;
    }),
  );

  localStorage.setItem("regions", JSON.stringify(Array.from(regions)));
  return Array.from(regions);
}

export async function getCountry(countryName) {
  const request = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,languages,population,region,subregion,capital,tld,currencies,borders`,
  );
  const country = (await request.json())[0];
  if (country == undefined) return { country };

  country.nativeName = Object.values(country.name.nativeName).map(
    (n) => n.common,
  );
  country.tld = country.tld.join(", ");
  country.currencies = Object.values(country.currencies)
    .map((curr) => curr.name)
    .join(", ");
  country.languages = Object.values(country.languages);

  let borderNames = [];
  for await (const border of country.borders) {
    const borderName = await fetch(
      `https://restcountries.com/v3.1/alpha/${border}?fields=name`,
    );
    const name = (await borderName.json()).name.common;
    borderNames.push(name);
  }
  country.borders = borderNames;

  return { country };
}
