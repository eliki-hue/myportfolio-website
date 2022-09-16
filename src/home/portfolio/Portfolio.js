import React from 'react'
import './Portfolio.css'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>
        <div className='portfolio-cards'>
        <PortfolioCard icon={require("../../images/portfolio/safari.png")} tag='Safiri' description=''/>
        <PortfolioCard icon={require("../../images/portfolio/akan.png")} tag='akan name' description=''/>
        <PortfolioCard icon={require("../../images/portfolio/neighbourhood.png")} tag='neighbourhood' description=''/>
        <PortfolioCard icon={require("../../images/portfolio/news-express.png")} tag='news-express' description=''/>
        <PortfolioCard icon={require("../../images/web-development-icon2-removebg-preview.png")} tag='Web Development' description=''/>
        <PortfolioCard icon={require("../../images/graphic-design-removebg-preview.png")} tag='Graphic Design' description=''/>
        <PortfolioCard icon={require("../../images/web-designing-big.png")} tag='Web Design' description=''/>
        <PortfolioCard icon={require("../../images/web-development-icon2-removebg-preview.png")} tag='Web Development' description=''/>
        
        </div>

    </div>
  )
}

export default Portfolio