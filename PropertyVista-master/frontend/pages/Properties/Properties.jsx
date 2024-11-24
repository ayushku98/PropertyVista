
import "../Properties/Properties.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]); // Stores all properties
  const [filteredProperties, setFilteredProperties] = useState([]); // Stores filtered properties for search
  const [searchQuery, setSearchQuery] = useState(""); // Tracks user input for search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch properties from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/accounts/api/rentalproperties/")
      .then((response) => {
        setProperties(response.data);
        setFilteredProperties(response.data); // Initially, filtered properties are the same as all properties
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching properties.");
        setLoading(false);
      });
  }, []);

  // Handles search input and filters properties
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = properties.filter((property) => {
      return (
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query)
      );
    });

    setFilteredProperties(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="property-list-heading">
        <h2 className="property-list-title">
          Search for the Best Rental Properties or Buy Properties and More...
        </h2>
        <div className="property-list-underline"></div>
      </div>

      {/* Search Bar */}


      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title, location, or description..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="property-cards-container-whole">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="property-card-whole">
              <img
                src={`http://localhost:8000${property.image}`}
                alt={property.title}
                className="property-card-img-whole"
              />
              <div className="property-card-details-whole">
                <h3 className="property-card-title-whole">{property.title}</h3>
                <p className="property-card-description-whole">{property.description}</p>
                <p className="property-card-location-whole">{property.location}</p>
                <p className="property-card-price-whole">
                  Price: ${property.price}/Month
                </p>
                <p className="property-card-owner-whole">
                  Contact: {property.owner_name}
                </p>
                <a
                  href={`tel:${property.owner_contact}`}
                  className="property-card-btn-whole"
                >
                  Contact Owner
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No properties match your search criteria.</div>
        )}
      </div>
    </>
  );
};

export default PropertyList;
