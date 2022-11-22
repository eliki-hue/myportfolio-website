import React from "react";
import Card from "react-bootstrap/Card";
import "./Services.css";

function ServicesCard({ icon, tag, description }) {
  return (
    <div className="card-parent-services">
      <div className="card-services border-0">
        <img className="img-service" variant="top" src={icon} />

        <h3>{tag}</h3>
        <div>
          <div className="text-muted">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
