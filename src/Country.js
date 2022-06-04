export default function Country({ country }) {
  console.log(country.name);
  return (
    <div style={{background:'salmon',padding:'10px', margin:'20px', borderRadius:'5px'}}>
      <h2>{country?.name}</h2>
      <p>Capital: {country?.capital}</p>
      <p>Population: {country?.population}</p>
    </div>
  );
}
