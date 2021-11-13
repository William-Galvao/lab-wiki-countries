import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList />
        <CountryDetails />
      </div>
      <Routes>
        <Route path="/:cca3" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
