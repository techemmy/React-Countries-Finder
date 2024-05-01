import Header from './components/Header';
import './index.css';
import { Outlet, useNavigation } from 'react-router-dom';

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />

      <main
        className={
          navigation.state === "loading"
            ? "container loading"
            : "container"}
      >
        <div className="lds-ripple"><div></div><div></div></div>
        <Outlet />
      </main>
    </>
  )
}

export default App
