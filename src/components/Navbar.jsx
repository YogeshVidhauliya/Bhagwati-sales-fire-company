import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure CSS is imported

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Bhagwati Logo" className="navbar-logo" />
        <h2 className="logo">Bhagwati Sales & Fire Company</h2>
      </div>

      {/* Hamburger for mobile */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
        <li><NavLink to="/enquiry" className={({ isActive }) => isActive ? "active" : ""}>Enquiry</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        <li><NavLink to="/training" className={({ isActive }) => isActive ? "active" : ""}>Training</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
