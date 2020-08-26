import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import Menu from "../../Images/menu.png";

function Header({}) {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="header-nav-container">
        <div className="logo-container">
          <img src={Logo} />
          <h4>Dinemate</h4>
        </div>
        <div className="explore-container">
          <ul className="header-navbar web-nav">
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
          </ul>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="menu-button"
          >
            <img src={Menu} />
          </button>
        </div>
      </div>
      <div
        className={`header-nav-container ${toggle ? "" : "hide-nav-container"}`}
      >
        <ul className="header-navbar">
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
