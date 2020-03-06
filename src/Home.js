import React, { Component } from "react"

import "./index"

//components

import Header from "./components/header/Header"
import LogoCentral from "./components/LogoCentral"
import Footer from "./components/footer/Footer"

class Home extends Component {
  
  render() {
      
    return (
      <>
        <Header/>
        <LogoCentral  />
        <Footer/>
      </>
    );
  }
}

export default Home;
