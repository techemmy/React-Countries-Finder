import PropTypes from "prop-types";

export default function CountryCard({ name, population, region, capital, imageURL }) {
  return (
    <a href="country-info.html">
      <div className="country__card feint__shadow curved__border">
        <div className="country__img__container">
          <img className="country__img" loading="lazy" src={imageURL} alt={`${name} logo`} />
        </div>
        <article className="country__card__info">
          <h3>{name}</h3>
          <p><span className="country__card__title">Population:</span> {population}</p>
          <p><span className="country__card__title">Region:</span> {region}</p>
          <p><span className="country__card__title">Capital:</span> {capital}</p>
        </article>
      </div>
    </a>
  )
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
}
