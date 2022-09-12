import React from 'react'
import './Portfolio.css'
import Card from 'react-bootstrap/Card';

function PortfolioCard({icon, tag, description}) {
  return (
    <div className='card-parent' >
         <Card className='card' >
            <div style={{width:'12rem', margin:'2rem',border:'none'}}><Card.Img className='img' variant="top" src={icon} /></div>
        
        <h3>{tag}</h3>
        {/* <Card.Footer>
          <li className="text-muted">{description}</li>
        </Card.Footer> */}
      </Card>
    </div>
  )
}

export default PortfolioCard;