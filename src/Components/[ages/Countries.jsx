import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const handleApiDada = async () => {
    const api = fetch("https://restcountries.com/v3.1/all")
    const response = await api;
    const data = await response.json();
    setCountries(data);
    setLoading(false);
    setAllCountries(data);
  };
  useEffect(() => {
    handleApiDada();
  }, []);

  const handleCountryCatagories = (e) => {
    const selectCategory = e.target.value.toLowerCase();
    console.log(selectCategory);
    if (selectCategory === "All") {
      // setAllCountries(countries);
      setCountries(allCountries);
    } else {
      const filterCategory = allCountries.filter((catCountry) => {
        return catCountry.region.toLowerCase() === selectCategory.toLowerCase();
      })
      setCountries(filterCategory);
    }

  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="countries-container">
      <h1 className="page-title">Browse Countries</h1>
      <div className="cat-section">
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="catagories">
          <select name="catagories" onChange={handleCountryCatagories}>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="countries-grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};
