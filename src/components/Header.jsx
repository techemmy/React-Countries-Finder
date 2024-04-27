export default function Header() {
  return (
    <header className="container feint__shadow">
      <nav>
        <a href="index.html">
          <h1>Where in the world?</h1>
        </a>
        <button type="button" className="curved__border" id="mode__toggler">Dark Mode</button>
      </nav>
    </header>
  )
}
