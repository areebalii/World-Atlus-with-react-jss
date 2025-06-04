import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>World Atlus</h1>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/countries">Countries</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}