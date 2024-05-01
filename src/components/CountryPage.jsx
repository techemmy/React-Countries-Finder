import { useNavigate, useLoaderData } from 'react-router-dom';

export default function CountryPage() {
  const navigate = useNavigate()
  const { country } = useLoaderData();

  return (
    <section className="country__details">
      <button
        type="button"
        className="curved__border"
        id="back__btn"
        onClick={() => {
          navigate(-1)
        }}>
        Back
      </button>
      <div id="country">
        <div className="flag">
          <img src={country.flags.svg} alt="%Country Flag" />
        </div>
        <aside className="country__info">
          <h2>{country.name.common}</h2>
          <h3>Official Name: {country.name.official}</h3>
          <section className="country__text__info">
            <article className="country__card__info">
              <p><span className="country__card__title">Native Name: </span>{country.nativeName[0]}</p>
              <p><span className="country__card__title">Population: </span>{country.population.toLocaleString()}</p>
              <p><span className="country__card__title">Region: </span>{country.region}</p>
              <p><span className="country__card__title">Sub Region: </span>{country.subregion}</p>
              <p><span className="country__card__title">Capital: </span>{country.capital}</p>
            </article>
            <article className="country__card__info">
              <p><span className="country__card__title">Top level Domain: </span>{country.tld}</p>
              <p><span className="country__card__title">Currencies: </span>{country.currencies}</p>
              <p><span className="country__card__title">Languages: </span>{country.languages.join(', ')}</p>
            </article>
          </section>
          <div className="border__countries">
            <span className="country__card__title">Border Countries: </span>
            {country.borders.length <= 0 ? "-" : null}
            {country.borders.map((border) => {
              return <button key={`border-${border}`}>{border}</button>
            })}
          </div>
        </aside>
      </div>
    </section>

  )
}
