import React from 'react';
import '../App.css';

function Header() {
  return(
    <nav id="navbar">
      <ul>
        <li><a className="navlink" href="#contact">Resume</a></li>
        <li><a className="navlink" href="#projects">Portfolio</a></li>
        <li><a className="navlink" href="home">Home</a></li>
      </ul>
    </nav>
  );
}

export default Header;
