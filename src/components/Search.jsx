import { useSubmit } from "react-router-dom"

export default function Search({ q }) {
  const submit = useSubmit()

  return (
    <input
      id="search__input"
      type="text"
      name="q"
      className="feint__shadow curved__border"
      placeholder="Search for a country..."
      defaultValue={q}
      onChange={(e) => submit(e.target.form)}
    />
  )
}
