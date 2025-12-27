import React from 'react';
import { Link } from 'react-router-dom';
import carIcon from '../assets/car.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={carIcon} alt="Car Icon" className="car-icon" />
          Waah Drive
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/how-to-book" className="navbar-link">
            How to Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;