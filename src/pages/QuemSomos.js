import React, { Component } from "react"
import whoareimg from "../components/image/a-empresa.jpg"

import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

import "./QuemSomos.css"

import ConteudoEmpresa from "./json/ConteudoEmpresa"

export default class QuemSomos extends Component {
  state = {
    ConteudoEmpresa: ConteudoEmpresa
  }

  render() {
    return (
      <>
        <Header />

 

        <img className="imgwhoare" src={whoareimg} alt="Logotipo Enfoque" />
        
        <section className="whoare">
          <article className="about container">
            <h1 className="about">Quem Somos</h1>

            {this.state.ConteudoEmpresa.map(e => (
              <>
              
                <h1 key={e.id} className="titlepress">{e.name} </h1>
                <p className="about">{e.description}</p>
                
              </>
            ))}

            <br />
          </article>
        </section>
        <Footer />
      </>
    )
  }
}
