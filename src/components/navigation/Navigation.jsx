import React from "react";
import logo from "../../images/logo1.png"
import "./Navigation.css"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
  return (
    <>
       <div>
       <Navbar expand="lg" className="theNav">
      <Container id="theCon">
        <Navbar.Brand href="#home">
          <img src={logo} alt=""  id="theImg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  id="toggle"/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto theNavs">
            <Link to="/" id="myLink">Home</Link>
            <Link to="/services" id="myLink">Services</Link>
            <Link to="/about" id="myLink">About</Link>
            <Link to="/skills" id="myLink">Skills</Link>
            <Link to="/portfolio" id="myLink">Portfolio</Link>
            <Link to="/blog" id="myLink">Blog</Link>
            <Link to="/contact" id="myLink">Contact</Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

       </div>
    </>
  );
};

export default Navigation;
