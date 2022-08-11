import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => (
  <div className="navbar">
    <h1> MATH MAGICIANS</h1>
    <ul className="holder">
      <li>
        <Link to="/" className="link">Home</Link>
      </li>
      <li>
        <Link to="/calculator" className="link">Calculator</Link>
      </li>
      <li>
        <Link to="/quote" className="link">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
