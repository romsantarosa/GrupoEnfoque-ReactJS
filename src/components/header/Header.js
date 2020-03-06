import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "react-router-dom/Link";

import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <section className="toparea">
          <div className="phone" title="Telefone">
            <i className="fa fa-phone"></i> (13) 3326-0509
          </div>

          <div className="email">contato@enfoquecom.com.br</div>

          <div className="icons">
            <div className="facemidia" title="Facebook">
              <a
                href="https://www.facebook.com/enfoquecom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="instamidia" title="Instagram">
              <a
                href="https://www.instagram.com/enfoquecom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="twittermidia" title="Twitter">
              <a
                href="https://www.twitter.com/enfoquecom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="whatsappmidia" title="13991245874">
              <a
                href="https://api.whatsapp.com/send?phone=5513991232141"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </section>



        <Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="navcenter">
              <Link className="linkroutes" to="/">
                HOME
              </Link>
              <Link className="linkroutes" to="/quemsomos">
                QUEM SOMOS
              </Link>
              <Link className="linkroutes" to="/solucoes">
                SOLUÇÕES
              </Link>

              <Link className="linkroutes" to="/contato">
                CONTATO
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}


