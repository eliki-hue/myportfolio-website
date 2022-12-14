import React from 'react'
import "./Footer.css"
import ContactUs from "./Contact";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <div className='container-fluid footer '>
        <div className='row footer-sub '>
          
            <div className='col '>
            <h2 className="">Send Message</h2>
                <ContactUs/><br/>
            </div>
            <div className='col'>
            
              <div className='footer-in-touch'>
              <h2 style={{marginLeft:"3rem",marginBottom:"14px"}}>Get in Touch</h2>
              <div className='footer-in-touch-inner'>
              <p>Phone: 0717277631</p>
            <p>Email: kiraguelijah@yahoo.com</p><br/>
            <h3>Connect</h3>
            <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p className="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span className="mx-2">
                      <a href='' target='blank'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      
                    </span>{" "}
                    <span className="mx-2">
                      <a href='https://www.linkedin.com/in/elijah-kiragu-366720227/' target="blank"> <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                     
                    </span>{" "}
                    <span className="mx-2">
                    <a href='' target="blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                      
                    </span>{" "}
                    <span className="mx-2">
                    <a href='' target="blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      
                    </span>{" "}
                   </p>
                </div>  
                
            
            </div> 

            <Nav className="me-auto">
            <Nav.Link href="#biography">About me</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
              </div>
            
              </div>
            
            </div>
            
           <br/>
           
        </div>
        <div className='container-fluid footer-bottom'>
            <h5>All Rights Reserved</h5>
            <h5>Designed by Elijah Kiragu</h5>
        </div>

    </div>
  )
}

export default Footer