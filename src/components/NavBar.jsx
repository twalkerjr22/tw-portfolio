import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Hover from "hover.css";
import logo from '../imgs/code-128.png';

const navbar = {
    backgroundColor: "#8C43FF",
    boxShadow: "2px 2px 2px #dadada"
};

class NavBar extends Component {
  render() {
    return (
      <nav style={navbar} className="navbar navbar-expand-lg">
        <img
          className="ml-3 mr-3"
          width="60"
          src={logo}
        />
        <h2>Troy Walker</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="nav-links ml-auto mr-5" id="navbarNavAltMarkup">
          <ul className="navbar-nav float-right">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Languages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <button className="btn ml-4 cta-btn hvr-grow">Get In Touch</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
