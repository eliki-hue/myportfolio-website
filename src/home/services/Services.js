import React from 'react'
import ServicesCard from './ServicesCard'
import "./Services.css"

function Services() {
  return (
    <div className='services'>
        <h1 >Services</h1>
        <div className='services-cards'>
        <ServicesCard icon={require("../../images/web-designing-big.png")} tag='Web Design' description=''/>
        <ServicesCard icon={require("../../images/web-development-icon2-removebg-preview.png")} tag='Web Development' description=''/>
        <ServicesCard icon={require("../../images/graphic-design-removebg-preview.png")} tag='Graphic Design' description=''/>
   
        </div>
        
    </div>
  )
}

export default Services
