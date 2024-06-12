import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">L || F</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className='nav-item'>
                <NavLink className="nav-link active"  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
