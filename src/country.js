export async function getCountries(q = "", region) {
  let request;
  if (q !== "") {
    request = await fetch(
      `https://restcountries.com/v3.1/name/${q}?fields=name,flags,population,region,capital`,
    );
    return { countries: await request.json(), q };
  }

  const cachedCountries = JSON.parse(localStorage.getItem("countries"));
  if (cachedCountries && cachedCountries.length > 0) {
    return { countries: cachedCountries, q };
  }

  if (!request) {
    request = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
    );
  }

  if (request.status !== 200) {
    return { countries: [], q };
  }

  const countries = await request.json();
  localStorage.setItem("countries", JSON.stringify(countries));
  // return { countries, q };
  return new Promise((res) => {
    setTimeout(() => {
      res({ countries, q });
    }, 5000);
  });
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

  // return { country };
  return new Promise((res) => {
    setTimeout(() => {
      res({ country });
    }, 5000);
  });
}
