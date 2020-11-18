import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/logo.jpg";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Nav>
          <NavLink to="/">
            <img src={Logo} className="nav__logo" alt="MiNutri Care" />
          </NavLink>
        </Nav>

        <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
            <a
              href="http://minutri.in/Undisputed.html"
              className="nav-link header__link"
            >
              Undisputed
            </a>

            <NavLink className="nav-link" href="#projects" to="/products">
              Products
            </NavLink>
            <a className="nav-link" href="#contact">
              Get in Touch
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
