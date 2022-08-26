import { from } from "@apollo/client";
import React from "react";
import './home.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
import bus from './static/media/bus.jpg'
import CardGroup from 'react-bootstrap/CardGroup';
import myimage from '../images/my-clear-image.png'
import python from '../images/python-logo.png'
import JS from '../images/js-logo.png'
import html from '../images/html-logo.png'


export default function Home(){
    
    return(

    
      <>
      
      <Container fluid className="parent">
         <Container className="intro">
          <Row className="intro-row">
            
         <Col  xs={8} className="intro-text"><div>
        

        {/* <h1>Hi!</h1> */}
        <h3 className="text-mut.ed">I am <span className="myname">Elijah Kiragu</span></h3>
        <h4 className="text-mutned">Full-stack web developer </h4>
        <ul>
          
          <li><h4>React</h4></li>
          <span><li><h4>JavaScript</h4></li></span>
          <li><h4>Python</h4></li>
          
          
        
        </ul>
          </div> 
        </Col>
        <Col   xs={4} className="myimagecol"><div className="itro-image-parent"><br/><br/><br/>
            <img className="myimage" src={myimage}/></div></Col>
       
       
      </Row>
      </Container>
      
      </Container>
      <div className="container outer-parent">
      
     
     
     
      <Container fluid className="bio-fluid ">
        
          <Row className="bio" >
            <Col xs={3} className=''>
            <h3>Biography</h3>
            <h4>Name : Elijah Kiragu</h4>
            <h4>Email:<small>kiraguelijah@yahoo.com</small> </h4>
            <h4>Phone: 0717277631</h4>
            <br/>
            <a href="https://docs.google.com/document/d/1nBZ3nlXS5tX8mvWsfc4-VKTbznFEU5FgLt-Nn4W7cpg/edit?usp=sharing" target="blank"><Button resume-btn >My Resume</Button></a>
            <br/><br/>
            </Col>  
            <Col xs={9} className='bioinfo' >
              <row>
                <Col xs={12}>
                  <p>I am graduate of Egerton University, where I did Bachelor of Science degree (Physics, Chemistry and Mathematics combination) for two years then majored in Physics with a minor in Mathematics. I then joined teaching as Physics and Chemistry teacher where I gained invaluable skills such as: effective communication, leardership, presentation, imaginative thinking and organization among others. </p>
                  <p>I then left teaching and joined Moringa School where I did Software Development. I graduated as a full-stack web developer.</p>
                  <p>I am skilled in React, JavaScript, Angular, Typescript, Python/Flask, Python/Django, SQL databases and Solidity/web3.</p><br/>
                </Col>
              </row>
              <row className='bio-histo '>
                
                <Col >
                  2014<br/><br/>
                  <div className="dot"></div><div className="line"></div></Col>
                <Col >2019<br/><br/><div className="dot"></div><div className="line"></div></Col>
                <Col >2020<br/><br/><div className="dot"></div><div className="line"></div></Col>
                <Col >2021<br/><br/><div className="dot"></div><div className="line"></div></Col>
                <Col >2022<br/><br/><div className="dot"></div><div className="line"></div></Col>
              </row>
              <row className='bio-histo'>
              <Col > <p>High school certificate</p></Col>
                <Col ><p>Graduated with Bachelor of Science degree ( Physics and  Mathematics) </p></Col>
                <Col ><p>Started working as Physics and Chemistry high school teacher</p></Col>
                <Col ><p>Left teaching and joined Moringa School</p></Col>
                <Col ><p>Graduated with Software Development certificate </p></Col>
              </row>
              
              </Col> 
          </Row>
          
      </Container>

      <Container className="">
        <Row>
          <Col xs={12}>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
            
              <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={myimage} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card> 
            </div>
            <div className="flip-box-back">
            <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={bus} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card>
            
            </div>
          </div>
        </div>
        </Col>
        </Row>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
{/* 
      <Row >
      <Col>
      <Card style={{margin: '10px',width: '18rem'}}>
        <Card.Img variant="top" src={bus} />
        
        <Card.Footer>
          <li className="text-muted">Frontend sAFIRI</li>
        </Card.Footer>
      </Card>
      
        </Col>
      <Col>
      <Card style={{margin: '10px',width: '18rem'}}>
        <Card.Img variant="top" src={bus} />
        
        <Card.Footer>
          <li className="text-muted">Frontend sAFIRI</li>
        </Card.Footer>
      </Card>
      
        </Col>
      <Col xs={12} xl={4}>
      <Card style={{margin: '10px',width: '18rem'}}>
        <Card.Img variant="top" src={bus} />
        
        <Card.Footer>
          <li className="text-muted">Frontend sAFIRI</li>
        </Card.Footer>
      </Card> */}
      
        {/* </Col>
      </Row> */}

      <Row >
        <div className="col-md-3 col-sm-12 text-center  justify-content-center card-section">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
            
              <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={myimage} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card> 
            </div>
            <div className="flip-box-back">
            <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={bus} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card>
            
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3 col-sm-12 text-center  justify-content-center card-section">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
            
              <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={myimage} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card> 
            </div>
            <div className="flip-box-back">
            <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={bus} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card>
            
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3 col-sm-12 text-center  justify-content-center m-15px ">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
            
              <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={myimage} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card> 
            </div>
            <div className="flip-box-back">
            <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={bus} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card>
            
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3 col-sm-12 text-center  justify-content-center m-15px ">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
            
              <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={myimage} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card> 
            </div>
            <div className="flip-box-back">
            <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={bus} />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card>
            
            </div>
          </div>
        </div>
        </div>
      </Row>
        </Container>  
        </div>
      </>
        


          
    
        

    )

};