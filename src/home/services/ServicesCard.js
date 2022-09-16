import React from "react";
import Card from "react-bootstrap/Card";
import "./Services.css";

function ServicesCard({ icon, tag, description }) {
  return (
    <div className="card-parent">
      <div className="card border-0">
        <img className="img" variant="top" src={icon} />

        <h3>{tag}</h3>
        {/* <Card.Footer>
          <li className="text-muted">{description}</li>
        </Card.Footer> */}
      </div>
    </div>
  );
}

export default ServicesCard;
