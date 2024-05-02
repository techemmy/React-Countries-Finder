import Header from './components/Header';
import './index.css';
import { Outlet, useNavigation } from 'react-router-dom';

function App() {
  const navigation = useNavigation();
  const loader = (
    <div className="lds-ripple"><div></div><div></div></div>
  )
  return (
    <>
      {navigation.state === "loading" ? loader : null}
      <Header />

      <main
        className={
          navigation.state === "loading"
            ? "container loading"
            : "container"}
      >
        <Outlet />
      </main>
    </>
  )
}

export default App
