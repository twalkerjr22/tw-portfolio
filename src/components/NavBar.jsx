import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Hover from "hover.css";

const navbar = {
    backgroundColor: "#8C43FF",
    boxShadow: "2px 2px 2px #dadada"
};

class NavBar extends Component {
  render() {
    return (
      <nav style={navbar} class="navbar navbar-expand-lg">
        <img
          class="ml-3 mr-3"
          width="60"
          src="../../public/imgs/code-128.png"
        />
        <h2>Troy Walker</h2>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="nav-links ml-auto mr-5" id="navbarNavAltMarkup">
          <ul class="navbar-nav float-right">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Languages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <button class="btn ml-4 cta-btn hvr-pulse">Get In Touch</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
