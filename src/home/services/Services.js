import React from 'react'
import "./Services.css"
import ServicesCard from './ServicesCard'


function Services() {
  return (
    <div className='services'>
        <h1 >Services</h1>
        <div className='services-cards'>
        <ServicesCard icon={require("../../images/web-designing-big.png")} tag='Web Design' description='fghjklskjhjdk lorem10bccccccccccccccccccccc ccccccccccccc ccccccccccccccc'/>
        <ServicesCard icon={require("../../images/web-development-icon2-removebg-preview.png")} tag='Web Development' description='ghdjh kkl;rlkdf khjdfh'/>
        <ServicesCard icon={require("../../images/graphic-design-removebg-preview.png")} tag='UI/UX Design' description='oiuytrew pouytre loiuyhgf'/>
        
        </div>
        
    </div>
  )
}

export default Services
