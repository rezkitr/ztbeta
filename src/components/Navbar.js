import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/img/logoZT.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <img src={logo} alt="Logo ZT" width="40" style={{ marginRight: 15 }} />
          <NavLink to="/" className="navbar-brand">Zona Tamasya</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/opentrip" activeClassName="chosen" className="nav-link">Open Trip</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" activeClassName="chosen" className="nav-link">Galeri</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/download" activeClassName="chosen" className="nav-link">Download</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
