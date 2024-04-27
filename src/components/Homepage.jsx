import CountryCardList from "./CountryCardList";
import FilterSelect from "./FilterSelect";
import Search from "./Search";

export default function Homepage() {
  return (
    <>
      <section>
        <section id="search__and__filter">
          <Search />
          <FilterSelect />
        </section>
        <section id="countries__list">
          {<CountryCardList />}
        </section>
      </section>
    </>
  )
}
