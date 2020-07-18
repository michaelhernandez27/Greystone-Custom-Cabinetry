import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar () {
  return (
      <nav>
          <ul className="nav-options">
              <Link to="/"><li>Home</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/reviews"><li>Reviews</li></Link>
          </ul>
      </nav>
  );

};

export default Navbar;