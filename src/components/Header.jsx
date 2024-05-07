import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container feint__shadow">
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>

        <button type="button" id="mode__toggler" className="curved__border">
          <input id="color__scheme" type="checkbox" />
          <span>Dark Mode</span>
        </button>
      </nav>
    </header >
  )
}
