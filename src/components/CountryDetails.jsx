export default function CountryDetails() {
  return (
    <section className="country__details">
      <button type="button" className="curved__border" id="back__btn">Back</button>
      <div id="country">
        <div className="flag">
          <img src="https://flagcdn.com/al.svg" alt="%Country Flag" />
        </div>
        <aside className="country__info">
          <h2>Belgium</h2>
          <section className="country__text__info">
            <article className="country__card__info">
              <p><span className="country__card__title">Native Language: </span>English</p>
              <p><span className="country__card__title">Population: </span>11,319,232</p>
              <p><span className="country__card__title">Region: </span>Europe</p>
              <p><span className="country__card__title">Sub Region: </span>Western Europe</p>
              <p><span className="country__card__title">Capital: </span>Brussels</p>
            </article>
            <article className="country__card__info">
              <p><span className="country__card__title">Top level Domain: </span>.be</p>
              <p><span className="country__card__title">Currencies: </span>Euros</p>
              <p><span className="country__card__title">Languages: </span>French, Dutch, German</p>
            </article>
          </section>
          <div className="border__countries">
            <span className="country__card__title">Border Countries: </span>
            <button>France</button>
            <button>Germany</button>
            <button>Netherlands</button>
          </div>
        </aside>
      </div>
    </section>
  )
}
