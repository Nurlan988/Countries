import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from "./components/Main";


function App() {
  const [countries, setCountries] = useState([]);

  return (
      <BrowserRouter>
        <Header/>
        <Main countries={countries} setCountries={setCountries} />
      </BrowserRouter>
  );
}

export default App;
