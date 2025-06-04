import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <h2>{country.name.common}</h2>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <NavLink to={`/countries/${country.cca3}`} >
      <button className="details">More Details</button>
      </NavLink>
    </div>
  );
}