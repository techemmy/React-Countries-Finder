import CountryCard from "./CountryCard";
import PropTypes from 'prop-types';

export default function CountryListFallback({ countryCount }) {
  const cards = [];
  for (let i = 0; i < countryCount; i++) {
    const card = <CountryCard
      key={`country-fallback ${i}`}
      name="Loading..."
      population="Loading..."
      capital="Loading..."
      region="Loading..."
      imageURL="loading-gif.gif"
    />
    cards.push(card)
  }

  return cards
}

CountryListFallback.propTypes = {
  countryCount: PropTypes.number.isRequired
}
