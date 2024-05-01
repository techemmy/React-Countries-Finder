import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container feint__shadow">
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button type="button" className="curved__border" id="mode__toggler">Dark Mode</button>
      </nav>
    </header>
  )
}
