import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Hover from "hover.css";
import Typed from "react-typed";
import HeroImg from "../imgs/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeroBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row hero-intro m-auto">
          <div className="col-md-8 m-auto">
            <h1 className="mb-3">Hi, I’m Troy. Nice to meet you.</h1>
            <p>
              Since beginning my journey as a developer nearly 8 years ago, I've
              studied computer science, worked for agencies, started my own
              companies, developed & designed mobile games, consulted for
              startups, and collaborated with talented people to create digital
              products for both business and consumer use. I'm quietly
              confident, naturally curious, and perpetually working on improving
              my skills one coding problem at a time.
            </p>
          </div>
        </div>
        <div row className="row hero-skills p-5">
          <div className="col-md-6 skill-col-left m-auto text-center">
            <FontAwesomeIcon icon="code" className="text-center purple-icon" />

            <h2 className="text-center pb-3">Developer</h2>
            <p className="text-center pb-5">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h5 className="text-center skill-title">Coding:</h5>
            <p className="pb-3">
              HTML
              <br />
              CSS
              <br />
              Javascript
              <br />
              jQuery
              <br />
              PHP
              <br />
              React
              <br />
              Java
              <br />
              Python
              <br />
              Wordpress
            </p>
            <h5 className="text-center skill-title">Dev I've worked with: </h5>
            <p>Github, Terminal, Atom, VSCode, Brackets, Eclipse, AWS</p>
          </div>
          <div className="col-md-6 skill-col-right m-auto text-center">
            <FontAwesomeIcon
              icon="pencil-ruler"
              className="text-center purple-icon"
            />
            <h2 className="text-center pb-3">Designer</h2>
            <p className="text-center pb-5">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h5 className="text-center skill-title">Things I've Designed:</h5>
            <p className="pb-3">
              Websites and Web Apps
              <br />
              Wordpress Themes
              <br />
              Mobile Games
            </p>
            <h5 className="text-center skill-title">
              Design tools i've worked with:
            </h5>
            <p className="pb-3">
              Adobe XD (Mockup Design)
              <br />
              Photohop
              <br />
              Premiere Pro
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroBody;
