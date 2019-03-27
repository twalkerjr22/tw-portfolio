import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Hover from "hover.css";
import Typed from "react-typed";
import HeroImg from "../imgs/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeroHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row hero-header">
          <div className="col-md-12 text-center m-auto">
            <h1 className="m-auto">
              {" "}
              <Typed
                strings={["Front-end Developer X Designer"]}
                typeSpeed={50}
              />
            </h1>
            <h5>
              {" "}
              <Typed
                strings={[
                  "I design and code beautifully simple things, and I love what I do."
                ]}
                typeSpeed={40}
                startDelay={2000}
              />
            </h5>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-6 text-center m-auto">
            <a className="btn ml-4 hero-btn hvr-grow" target="_blank" href="">
              <FontAwesomeIcon icon="file" /> View Resume
            </a>
            <a
              className="btn ml-4 hero-btn hvr-grow"
              target="_blank"
              href="https://github.com/twalkerjr22"
            >
              <FontAwesomeIcon icon="laptop-code" /> View Github
            </a>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-12 m-auto text-center">
            <img width="80%" src={HeroImg} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroHeader;
