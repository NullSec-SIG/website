import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    console.log(process.env.PUBLIC_URL + "/assets/logo.jpg");
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-black">
        <NavLink className="navbar-brand" to="/">
          <img
            className="logo-img"
            src={process.env.PUBLIC_URL + "/assets/logo.jpg"}
            alt=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/blog">
              Blog
            </NavLink>
            <span className="nav-item nav-link d-sm-flex d-none">|</span>
            <NavLink className="nav-item nav-link" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
