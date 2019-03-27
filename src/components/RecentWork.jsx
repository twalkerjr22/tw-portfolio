import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Hover from "hover.css";
import Typed from "react-typed";
import HeroImg from "../imgs/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RecentWork extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row m-auto">
          <div className="col-md-6 m-auto text-center">
            <h2 className="purple-text">My Recent Work</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecentWork;
