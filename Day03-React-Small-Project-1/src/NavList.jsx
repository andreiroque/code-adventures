import React from "react";

const NavList = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <ul className="navbar nav">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
