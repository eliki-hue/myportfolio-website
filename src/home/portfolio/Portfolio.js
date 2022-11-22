import React from 'react'
import { useEffect, useState } from 'react'
import './Portfolio.css'
import PortfolioCard from './PortfolioCard'
import SingleProject from '../SingleProject/SingleProject'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Portfolio() {

  const[projectDetails, setProjectDetails] = useState('')
  const[isShown, setIsShown] = useState(false)
  const handleClick = event => {
    setIsShown(current => !current)
    
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const updating=(e) => {
    
    console.log( e)
    
    setProjectDetails(e)
    console.log("setting project details to:" + e)
    
    
  }
  console.log("state= "+ projectDetails)

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
    
    <div className='portfolio'>

        <h1>Portfolio</h1>
        <div className='portfolio-cards'>
        <a href='/singleproject1' > <PortfolioCard icon={require("../../images/portfolio/safari.png")} tag='Safiri'
         category="website" client="Elijah" date="tyui" url="www.url.com" description="lorhuyyyy yyyyyyyy yyyyyyy ggg nnn yrrnm jnfj kkklk irk yyyyy"/></a>
      
        
      <a href='/singleproject2' > <PortfolioCard icon={require("../../images/singleProject/safiri-home.png")} 
      tag='Safiri' 
        description="lorhuyyyy yyyyyyyy yyyyyyy ggg nnn yrrnm jnfj kkklk irk yyyyy"/></a>     
              
      <a href='/singleproject3' >
      <PortfolioCard icon={require("../../images/portfolio/akan.png")}
        tag='akan name' description=''/></a>
          
          
          <a href='/singleproject4' > <PortfolioCard icon={require("../../images/portfolio/neighbourhood.png")} tag='neighbourhood' description=''/></a>
          <a href='/singleproject5' > <PortfolioCard icon={require("../../images/portfolio/news-express.png")} tag='news-express' description=''/></a>
          <a href='/singleproject6' ><PortfolioCard icon={require("../../images/web-development-icon2-removebg-preview.png")} tag='Pizza-inn' description=''/></a>
          {/* <a href='/singleproject7' > <PortfolioCard icon={require("../../images/graphic-design-removebg-preview.png")} tag='eliki blog' description=''/></a> */}
        {/* <PortfolioCard icon={require("../../images/web-designing-big.png")} tag='Web Design' description=''/> */}
        {/* <PortfolioCard icon={require("../../images/web-development-icon2-removebg-preview.png")} tag='Web Development' description=''/> */}
        
        </div>

    </div>
    
  </>
  )
}

export default Portfolio;