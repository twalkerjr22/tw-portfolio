import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Hover from "hover.css";

class HeroHeader extends Component {
  render() {
    return (
      <div className="row hero-header">
        <div className="col-md-12 text-center m-auto">
          <h1>Front-end Developer X Designer</h1>
        </div>
      </div>
    );
  }
}

export default HeroHeader;
