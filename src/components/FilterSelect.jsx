export default function FilterSelect() {
  return (

    <select className="select__region feint__shadow curved__border" name="region__filter" id="region__filter">
      <option>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
    </select>
  )
}
