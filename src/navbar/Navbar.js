import React from "react"
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(){
  return (
    <>
     
      
      
      <Navbar bg="primarjy" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Elijah</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#biography">About me</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      
    </>
  );
}

;

