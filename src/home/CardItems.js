import React from 'react'

import './home.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
import bus from './static/media/bus.jpg'
import CardGroup from 'react-bootstrap/CardGroup';

function CardItems({myimage,bus, description}) {
  return (
    <div className="col-md-3 coltext-center  justify-content-center m-15px ">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
            
              <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={myimage} loading="lazy" />
              
              <Card.Footer>
                <li className="text-muted">Frontend sAFIRI</li>
              </Card.Footer>
            </Card> 
            </div>
            <div className="flip-box-back">
            <Card style={{margin: '10px',width: '18rem'}}>
              <Card.Img variant="top" src={bus} loading="lazy"/>
              
              <Card.Footer>
                <li className="text-muted">{description}</li>
              </Card.Footer>
            </Card>
            
            </div>
          </div>
        </div>
        </div>
  )
}

export default CardItems;