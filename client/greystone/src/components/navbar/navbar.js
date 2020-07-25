import React, { Component } from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component () {
render() {
  return (
      <nav>
          <ul className="nav-options">
              <Link to="/"><li>Home</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/reviews"><li>Reviews</li></Link>
              <Link to="/signup"><li>Signup</li></Link>
              <Link to="/login"><li>Login</li></Link>
          </ul>
      </nav>
  );
  }
};

export default Navbar;