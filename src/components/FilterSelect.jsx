import { useSubmit } from "react-router-dom"
import PropTypes from "prop-types";

export default function FilterSelect({ regions, region = "" }) {
  const submit = useSubmit()
  return (
    <select
      className="select__region feint__shadow curved__border"
      name="region"
      id="region__filter"
      onChange={(e) => submit(e.target.form)}
      defaultValue={region}
    >
      <option value="">Filter by Region</option>
      {regions.map(region => {
        return <option key={`region-${region}`} value={`${region}`}>{region}</option>
      })}
    </select >
  )
}

FilterSelect.propTypes = {
  regions: PropTypes.array.isRequired,
  region: PropTypes.string,
}
