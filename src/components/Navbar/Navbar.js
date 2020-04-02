import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../logo.svg";
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/home">
              home
          </NavLink>
          </li>
          <li>
            <a href="/" className="nav-link active">
              tours
          </a>
          </li>
        </ul>
      </nav>
    );
  }
}