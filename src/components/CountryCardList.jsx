import CountryCard from "./CountryCard";

export default function CountryCardList({ countries }) {
  if (Array.isArray(countries) && countries.length > 0) {
    countries = countries.map(country => {
      return <CountryCard
        key={`country ${country.name.common}`}
        name={country.name.common}
        region={country.region}
        capital={country.capital.toString()}
        population={country.population.toLocaleString()}
        imageURL={country.flags.svg}
      />
    })
  }

  return countries;
}

