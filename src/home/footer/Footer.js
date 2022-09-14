import React from 'react'
import "./Footer.css"
import ContactUs from "./Contact";

const Footer = () => {
  return (
    <div className='container-fluid footer'>
        <div className='row footer-sub'>
          
            <div className='col'>
            <h2>Send Message</h2>
                <ContactUs/>
            </div>
            <div className='col'>
            <h2>Get in Touch</h2>
            
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