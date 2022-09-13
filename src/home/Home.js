import { from } from "@apollo/client";
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
import Biography from "./Biography";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
      <Container fluid className="parent">
        <Container className="intro">
          <Row className="intro-row">
            <Col xs={8} className="intro-text">
              <div>
                {/* <h1>Hi!</h1> */}
                <h3 className="text-mut.ed">
                  I am <span className="myname">Elijah Kiragu</span>
                </h3>
                <h4 className="text-mutned">Full-stack web developer </h4>
                <ul>
                  <li>
                    <h4>React</h4>
                  </li>
                  <li>
                    <h4>Python</h4>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={4} className="myimagecol">
              <div className="itro-image-parent">
                <br />
                <br />
                <br />
                <img className="myimage" src={myimage} />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="container outer-parent">
        <Biography />
        <Services />
        <Portfolio />
       
        
        


      </div>
      <Footer/>
    </>
  );
}
