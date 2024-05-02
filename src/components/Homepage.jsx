import { Form, useLoaderData, useNavigation } from "react-router-dom";
import CountryCardList from "./CountryCardList";
import FilterSelect from "./FilterSelect";
import Search from "./Search";


export default function Homepage() {
  const { countries, regions, q, region } = useLoaderData();
  let response;

  if (countries.length > 0) {
    response = <CountryCardList countries={countries} />
  } else {
    response = 'No Results Found or Check your connection'
  }

  return (
    <>
      <section>
        <Form id="search__and__filter">
          <Search q={q} />
          <FilterSelect regions={regions} region={region} />
        </Form>

        <section id="countries__list">
          <CountryCardList countries={response} />
        </section>

      </section>
    </>
  )
}