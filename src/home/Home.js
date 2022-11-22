// import { from } from "@apollo/client";
import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Button from "react-bootstrap/Button";
// import bus from './static/media/bus.jpg'
import CardGroup from "react-bootstrap/CardGroup";
import myimage from "../images/my-clear-image.png";
import python from "../images/python-logo.png";
import JS from "../images/js-logo.png";
import html from "../images/html-logo.png";
import carditem from "./CardItems";
import CardItems from "./CardItems";
import Biography from "./biograph/Biography";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";
import Navigation from "../navbar/Navbar";
import SingleProject from "./SingleProject/SingleProject";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {
  return (
    <>
    <Navbar bg="primarjy" id="nav" className="sticky-top" variant="dark">
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
      <Container fluid className="parent">
        <div className="text-light">
          {" "}
          {/* <div id="nav" className="sticky-top"><Navigation /></div> */}
        </div>
        <div className=" container-fluid mr-0 ml-0  intro">
          <div className="row">
             </div>

          
        </div>
      </Container>
      <div className="container-fluid outer-parent">
        <div className="container outer-parent ">
          <div className="biography-section" id="biography">
            <h1 className="text-center mt-4">About Me</h1>
            <Biography />
          </div>
          <div id="services"><Services /></div>
          <div id="portfolio"><Portfolio /></div>
         
        </div>
        
      </div>
      <div id="contact"><Footer /></div>
    </>
  );
}
