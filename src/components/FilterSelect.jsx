import { useSubmit } from "react-router-dom"

export default function FilterSelect() {
  const submit = useSubmit()

  return (
    <select
      className="select__region feint__shadow curved__border"
      name="region"
      id="region__filter"
      onChange={(e) => submit(e.target.form)}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
    </select>
  )
}
