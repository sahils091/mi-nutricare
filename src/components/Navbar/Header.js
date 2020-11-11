import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import Logo from "../../assets/logo.jpg"
import {Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Nav><NavLink to="/">
          <img src={Logo} className="nav__logo" alt="MiNutri Care"/>
         </NavLink></Nav>
        
        <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <NavLink className="nav-link" href="#about" to="/about">
              About 
            </NavLink>
            <NavLink className="nav-link" href="#about" to="/services">
              Services 
            </NavLink>

            <NavLink className="nav-link" href="#projects" to="/products">
             Products
            </NavLink>
            <NavLink className="nav-link" href="#contact" to="/contact">
             Get in Touch
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </Container>
    );
};  

export default Header;