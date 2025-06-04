import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { countryCode } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCountryDetails = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      const data = await response.json();
      setCountryDetails(data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  }
  useEffect(() => {
    getCountryDetails();
  }, [countryCode]);

  if (loading) return <div className="loading">Loading country details...</div>;
  if (!countryDetails) return <div className="notFound">Country not found</div>;

return (
  <>
    <div className="country-details">
  <h1>{countryDetails.name.common}</h1>
  <img src={countryDetails.flags.svg} alt={`Flag of ${countryDetails.name.common}`} />

  <div className="country-grid">
    <p><strong>Official Name:</strong> {countryDetails.name.official}</p>
    <p><strong>Capital:</strong> {countryDetails.capital?.[0]}</p>
    <p><strong>Region:</strong> {countryDetails.region}</p>
    <p><strong>Subregion:</strong> {countryDetails.subregion}</p>
    <p><strong>Population:</strong> {countryDetails.population.toLocaleString()}</p>
    <p><strong>Area:</strong> {countryDetails.area.toLocaleString()} km²</p>
    <p><strong>Languages:</strong> {countryDetails.languages && Object.values(countryDetails.languages).join(', ')}</p>
    <p><strong>Currencies:</strong> {
      countryDetails.currencies &&
      Object.values(countryDetails.currencies)
        .map(cur => `${cur.name} (${cur.symbol})`)
        .join(', ')
    }</p>
    <p><strong>Timezones:</strong> {countryDetails.timezones.join(', ')}</p>
    <p><strong>Continents:</strong> {countryDetails.continents.join(', ')}</p>
    <p><strong>Driving Side:</strong> {countryDetails.car?.side}</p>
    <p><strong>Start of the Week:</strong> {countryDetails.startOfWeek}</p>
    <p><strong>UN Member:</strong> {countryDetails.unMember ? "Yes" : "No"}</p>
    {countryDetails.borders && (
      <p><strong>Bordering Countries:</strong> {countryDetails.borders.join(', ')}</p>
    )}
    <p>
      <strong>Location:</strong>{" "}
      <a 
        href={countryDetails.maps.googleMaps} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
    </p>
  </div>
</div>

  </>
);

}