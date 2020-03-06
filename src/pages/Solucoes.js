import React, { Component } from "react";


//components
import whoareimg from "../components/image/a-empresa.jpg";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FeaturesHome from "../components/features/FeaturesHome";

class Solucoes extends Component {
  render() {
    return (
      <>
        <Header />

        <img className="imgwhoare" src={whoareimg} alt="Logotipo Enfoque" />
        <FeaturesHome />

        <Footer />
      </>
    );
  }
}

export default Solucoes;

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))*/
