import { NavLink } from 'react-router-dom';

export const About = () => {
  return (
    <div className="world-atlas-container">
      <header className="atlas-header about-header">
        <div className="header-content">
          <h1 className="atlas-title">About World Atlas</h1>
        </div>
      </header>

      <main className="atlas-main">
        <section className="about-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              World Atlas is dedicated to providing comprehensive, accurate, and engaging 
              geographical information to curious minds around the globe.
            </p>

            <h2>Our Team</h2>
            <p>
              A team of geographers, data scientists, and travel enthusiasts, united to make
              geography engaging and accessible.
            </p>

            <h2>Data Sources</h2>
            <p>
              We use verified data from the United Nations, World Bank, and other leading sources
              to ensure you receive trustworthy facts.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">195</div>
              <div className="stat-label">Countries Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Cities Database</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Natural Wonders</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
