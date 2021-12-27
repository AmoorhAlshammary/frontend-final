import React from 'react'
import { Link } from "react-router-dom";


import './Navbar.css';

export default function Navbar(props) {
  const { token, setToken, toggleMenu, showMenu } = props;
  

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <Link to="/" className="brand">Amirah<strong>Decorations</strong></Link>
          <div onClick={toggleMenu} className={showMenu ? 'menu-button active' : 'menu-button'}><span />
          </div>
        </div>
      </nav>
    </>
  );

}

