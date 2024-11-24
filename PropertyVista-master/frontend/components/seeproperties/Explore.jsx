import React from "react";
import { Link } from "react-router-dom";


const ExplorePropertyCard = ({ property }) => {
  return (
    <div className="property-card-explore">
      <img
        src={`http://127.0.0.1:8000${property.image}`}
        alt={property.title}
        className="property-image-explore"
      />
      <h3>{property.title}</h3>
      <p className="desc-explore">{property.description}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Owner:</strong> {property.owner_name}</p>
      <p><strong>Contact:</strong> {property.owner_contact}</p>

      {/* Buttons for interaction */}
      <div className="buttons-explore">
        <Link to={`/property/${property.id}`} className="btn-explore">
          View Details
        </Link>
        <Link to={`tel:${property.owner_contact}`} className="btn-explore">
          Contact Owner
        </Link>
      </div>
    </div>
  );
};

export default ExplorePropertyCard;

