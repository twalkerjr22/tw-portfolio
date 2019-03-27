import React, { Component } from 'react';
import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/NavBar"
import NavBar from './components/NavBar';
import HeroHeader from './components/HeroHeader'
class App extends Component {

  render() {
    return (
      <main className="container-fluid pl-0 pr-0">
        <NavBar/>
        <HeroHeader/>
      </main>
    );
  }
}

export default App;
