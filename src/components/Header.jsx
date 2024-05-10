import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container feint__shadow">
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>

        <div type="button" id="mode__toggler" className="curved__border">
          <input id="color__scheme" type="checkbox" />
          <label htmlFor="color__scheme">Dark Mode</label>
        </div>
      </nav>
    </header >
  )
}
