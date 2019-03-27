import React, { Component } from "react";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/NavBar";
import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import HeroBody from "./components/HeroBody";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIgloo,
  faFile,
  faLaptopCode,
  faPencilRuler,
  faCode
} from "@fortawesome/free-solid-svg-icons";
library.add(faIgloo);
library.add(faFile);
library.add(faLaptopCode);
library.add(faPencilRuler);
library.add(faCode);

class App extends Component {
  render() {
    return (
      <main className="container-fluid pl-0 pr-0">
        <NavBar />
        <HeroHeader />
        <HeroBody />
      </main>
    );
  }
}

export default App;
