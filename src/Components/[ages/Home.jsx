import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="img">
        <img src="https://images.squarespace-cdn.com/content/v1/59b037304c0dbfb092fbe894/1534800747937-8HOJHE3S2GZAI9LZUV0D/blue_marble_rotating_globe.gif" alt="" />
      </div>
      <div className="info">
        <h1 className="atlas-title">World Atlas</h1>
        <p className="atlas-subtitle">Explore our planet's geography, cultures, and natural wonders</p>
        <NavLink to="/countries" className="search-button">
          <button>
            Explore
          </button>
        </NavLink>
      </div>
    </div>
  );
}