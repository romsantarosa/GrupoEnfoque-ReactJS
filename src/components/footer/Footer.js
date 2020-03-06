import React from "react";
import { Nav } from "react-bootstrap";
import Link from "react-router-dom/Link";
import "./Footer.css";

export default function Footer() {
  const y = new Date();
  return (
    <>
      <section className="flex-container">
        <div className="reserved">
          <p>
            © {y.getFullYear()} Grupo Enfoque - Todos os direitos reservados.
          </p>
        </div>

        <Nav className="navcenter-footer">
          <Link className="linkroutes" to="/">
            Home
          </Link>
          <Link className="linkroutes" to="/quemsomos">
            Quem Somos
          </Link>
          <Link className="linkroutes" to="/solucoes">
            Soluções
          </Link>
          <Link className="linkroutes" to="/contato">
            Contato
          </Link>
        </Nav>
        <div className="namecompany">
          <h6>
            Design and developed by <a className="devname" href="https://www.linkedin.com/in/romilson-santa-rosa-b086a056/" target="_blank"
              rel="noopener noreferrer"> Rom Santa Rosa</a>
          </h6>
        </div>
      </section>
    </>
  );
}
