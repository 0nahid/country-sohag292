import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [countries, setCountries]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> {
      setCountries(data);
      console.log(data);
      const names = data.map(conuntry => conuntry.name);
      console.log(names)
    })
  }, [])
  return (
    <div className="App">
      <h1>country loadded: {countries.length}</h1>
      <ul> 
          {
            countries.map(conuntry => conuntry.name)
          } 
    </ul>   
    </div>
  );
}
export default App;
