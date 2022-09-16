import React from 'react'
import './Portfolio.css'
import Card from 'react-bootstrap/Card';

function PortfolioCard({icon, tag, description}) {
  return (
    <div className="card-parent">
      <div className="card mb-4 mt-4 border-0">
        <img className="img" variant="top" src={icon} />

        <h3>{tag}</h3>
        {/* <Card.Footer>
          <li className="text-muted">{description}</li>
        </Card.Footer> */}
      </div>
    </div>
  )
}

export default PortfolioCard;