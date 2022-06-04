import { useEffect, useState } from "react";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Available Countries: {countries.length}</h3>
      <div className="countries-container">
        {countries.map((country) => (
          /* this will works also 
          <h2>{country?.name}</h2> 
          */
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
}
export default App;
