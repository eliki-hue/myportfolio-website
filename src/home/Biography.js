import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
import myimage from '../images/my-clear-image.png'

function Biography() {
  return (
    <div>
         <Container fluid className="bio-fluid ">
        
        <Row className="bio" >
          <Col xs={3} className=''>
          <h2>Biography</h2>
          <Card style={{margin: '10px',width: '15rem'}}>
            <Card.Img variant="top" src={myimage} />
          </Card><br/>
          <h4>Name : Elijah Kiragu</h4>
          <h4>Phone: 0717277631</h4>
          <h4>Email:<small>kiraguelijah@yahoo.com</small> </h4>
          <br/>
          <a href="https://docs.google.com/document/d/1z2LOzZhwOm_dCcmvKuRVf83Soab0tvoLlzmgfq8bnAg/edit" target="blank"><Button resume-btn >My Resume</Button></a>
          <br/><br/>
          </Col>  
          <Col xs={9} className='bioinfo' >
            <row>
              <Col >
                <br/><br/>
                <p>I am a graduate of Egerton University, where I did Bachelor of Science degree (Physics, Chemistry and Mathematics combination) for two years then majored in Physics with a minor in Mathematics. </p>
                <p>I then joined teaching as Physics and Chemistry teacher where I gained invaluable skills such as:<span className="bio-soft-skills"> effective communication, leardership, presentation, imaginative thinking and organization </span> among others. </p>
                <p>I then left teaching and joined Moringa School where I did Software Development. I graduated as a full-stack web developer.</p>
                <p>I am skilled in <span className="bio-skills">React, JavaScript, Angular, Typescript, Python/Flask, Python/Django, SQL databases and Solidity/web3</span>.</p><br/>
              </Col>
            </row>
           
            <row className='bio-histo'>
              <Col > 2014<br/><br/><div className="dot"></div><div className="line"></div><p>High school certificate</p></Col>
              <Col  >2019<br/><br/><div className="dot"></div><div className="line"></div><p>Graduated with Bachelor of Science degree ( Physics and  Mathematics) </p></Col>
              <Col  >2020<br/><br/><div className="dot"></div><div className="line"></div><p>Started working as Physics and Chemistry high school teacher</p></Col>
              <Col  >2021<br/><br/><div className="dot"></div><div className="line"></div><p>Left teaching and joined Moringa School</p></Col>
              <Col  >2022<br/><br/><div className="dot"></div><div className="line"></div><p>Graduated with Software Development certificate </p></Col>
              
            </row>
            <br/>
            </Col> 
        </Row>
        
    </Container>
    </div>
  )
}

export default Biography