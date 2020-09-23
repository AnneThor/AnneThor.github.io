import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Header() {
  return(
    <nav id="navbar">
      <ul>

        <li><Link to="/Resume">Resume</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
