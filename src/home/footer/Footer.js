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
            <p>Phone: 0717277631</p>
            <p>Email: kiraguelijah@yahoo.com</p><br/>
            <h3>Connect</h3>
            <div className="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p class="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span class="mx-2">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>{" "}
                   </p>
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