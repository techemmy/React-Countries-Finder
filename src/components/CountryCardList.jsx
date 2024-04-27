import PropTypes from "prop-types";
import CountryListFallback from "./CountryListFallback";
import React from "react";
import CountryCard from "./CountryCard";

const possibleStatus = {
  'pending': 'pending',
  'resolved': 'resolved',
  'rejected': 'rejected',
}

export default function CountryCardList() {
  const [{ status, countries, error }, setState] = React.useState({
    status: 'pending',
    countries: null,
    error: null,
  })

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
      .then(res => res.json())
      .then(
        countriesResponse => {
          const countries = countriesResponse.map(country => {
            return <CountryCard
              key={`country ${country.name.common}`}
              name={country.name.common}
              region={country.region}
              capital={country.capital.toString()}
              population={country.population.toLocaleString()}
              imageURL={country.flags.png}
            />
          })
          setState({
            status: possibleStatus.resolved,
            countries,
            error: null
          });
        },
        error => {
          setState({
            status: possibleStatus.rejected,
            error: "I'll create error boundaries for that" + error.message
          });
        }
      )
  }, [])

  if (status === possibleStatus.resolved) {
    return countries;
  } else if (status === possibleStatus.rejected) {
    return error;
  } else {
    return <CountryListFallback countryCount={12} />
  }
}

