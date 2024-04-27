import CountryCard from "./CountryCard";
import CountryListFallback from "./CountryListFallback";
import FilterSelect from "./FilterSelect";
import Search from "./Search";

const possibleStatus = {
  'pending': 'pending',
  'resolved': 'resolved',
  'rejected': 'rejected',
}

export default function Homepage() {
  const status = 'rejected';

  let countriesOutput;
  if (status === possibleStatus.pending) {
    countriesOutput = <CountryListFallback countryCount={6} />
  } else if (status === possibleStatus.resolved) {
    countriesOutput = (<CountryCard
      name="United States of America"
      population="8, 000, 000"
      region="Europe"
      capital="New York"
      imageURL="loading-gif.gif"
    />)
  } else {
    countriesOutput = "I'll handle errors later"
  }

  return (
    <>
      <section>
        <section id="search__and__filter">
          <Search />
          <FilterSelect />
        </section>

        <section id="countries__list">
          {countriesOutput}
        </section>
      </section>
    </>
  )
}
