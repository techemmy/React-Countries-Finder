import { Form, useLoaderData } from "react-router-dom";
import CountryCardList from "./CountryCardList";
import FilterSelect from "./FilterSelect";
import Search from "./Search";
import React from "react";


export default function Homepage() {
  const { countries, regions, q, region: filter } = useLoaderData();
  let response;

  if (countries.length > 0) {
    response = <CountryCardList countries={countries} />
  } else {
    response = 'No Results Found or Check your connection'
  }

  React.useEffect(() => {
    document.getElementById('search__input').value = q;
  }, [q])

  return (
    <>
      <aside>
        <Form id="search__and__filter">
          <Search q={q} />
          <FilterSelect regions={regions} filter={filter} />
        </Form>

        <div id="countries__list">
          <CountryCardList countries={response} />
        </div>

      </aside>
    </>
  )
}
