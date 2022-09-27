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
import Biography from "./biograph/Biography";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";
import Navigation from "../navbar/Navbar";
import SingleProject from "./SingleProject/SingleProject";

export default function Home() {
  return (
    <>
      <Container fluid className="parent">
        <div className="text-light">
          {" "}
          <Navigation />
        </div>
        <div className=" container-fluid mr-0 ml-0  intro">
          <div className="row">
             </div>

          
        </div>
      </Container>
      <div className="container-fluid outer-parent">
        <div className="container outer-parent ">
          <div className="biography-section">
            <h1 className="text-center mt-4">About Me</h1>
            <Biography />
          </div>
          <Services />
          <Portfolio />
        </div>
        <SingleProject img1={require("../images/web-designing-big.png")} img2={require("../images/web-development-icon2-removebg-preview.png")} img3={require("../images/graphic-design-removebg-preview.png")} category="website" client="Elijah" date="tyui" url="www.url.com" description="lorhuyyyy yyyyyyyy yyyyyyy ggg nnn yrrnm jnfj kkklk irk yyyyy"/>
         
      </div>
      <Footer />
    </>
  );
}
