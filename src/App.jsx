import Homepage from './components/Homepage';
import Header from './components/Header';
import CountryPage from './components/CountryPage'
import './index.css';

function App() {

  return (
    <>
      <Header />

      <main className="container">
        <Homepage />
        {/* <CountryPage /> */}
      </main>
    </>
  )
}

export default App
