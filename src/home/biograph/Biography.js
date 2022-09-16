import React from 'react'
import './Biograph.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
import myimage from '../../images/my-clear-image.png'

function Biography() {
  return (
    <div>
         <Container fluid className="bio-fluid ">
        
        <Row className="bio mt=4" >
          <div  className='col-sm-3 col-md-3' >
            <div className='row'>
            
              <div className='bio-image-div'>
                <img src={myimage} className="bio-image " />
                           
            </div>
            
            <h4>Name : Elijah Kiragu</h4>
          <h4>Phone: 0717277631</h4>
          <h4>Email:<small>kiraguelijah@yahoo.com</small> </h4>
            
            </div>
            
          
          
          <a href="https://docs.google.com/document/d/1z2LOzZhwOm_dCcmvKuRVf83Soab0tvoLlzmgfq8bnAg/edit" target="blank"><Button resume-btn >My Resume</Button></a>
          <br/><br/>
          </div>  
          <div  className='col-sm-9 col-md-9 bioinfo' >
            <row>
              <div >
                <br/><br/>
                           <p>I am skilled in <span className="bio-skills">React, JavaScript, Angular, Typescript, Python/Flask, Python/Django, SQL databases and Solidity/web3</span>.</p><br/>
              </div>
            </row>
           
            <row className='bio-histo'>
              <Col > 2014<br/><br/><div className="dot"></div><div className="line"></div><p>High school certificate</p></Col>
              <Col  >2019<br/><br/><div className="dot"></div><div className="line"></div><p>Graduated with Bachelor of Science degree ( Physics and  Mathematics) </p></Col>
              <Col  >2020<br/><br/><div className="dot"></div><div className="line"></div><p>Started working as Physics and Chemistry high school teacher</p></Col>
              <Col  >2021<br/><br/><div className="dot"></div><div className="line"></div><p>Left teaching and joined Moringa School</p></Col>
              <Col  >2022<br/><br/><div className="dot"></div><div className="line"></div><p>Graduated with Software Development certificate </p></Col>
              
            </row>
            <br/>
            </div> 
        </Row>
        
    </Container>
    </div>
  )
}

export default Biography