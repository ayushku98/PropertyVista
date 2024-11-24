
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";  // Ensure component name is consistent
import "./Searchbar.css";
import "./Exploreproperties.css";
import Explore from "./Explore";


const ExploreProperties = () => {
  const [properties, setProperties] = useState([]);

  // Fetch all properties on initial render
  const fetchProperties = async (category = "", search = "") => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/accounts/exploreproperties/", {
        params: { category, search },  // Sending parameters if needed for filtering
      });
      setProperties(response.data.properties || []);  // Ensure response.data contains properties
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();  // Fetch properties on initial load
  }, []);

  return (
    <>
    <div className="property-list-heading">
        <h2 className="property-list-title">
          Explore Featured Properties 
        </h2>
        <div className="property-list-underline"></div>
      </div>
    <div className="properties-container-explore">
      {/* Pass fetchProperties to SearchBar to handle filtering */}
      <Searchbar onSearch={fetchProperties} />

      <div className="property-cards-explore">
        {properties.length > 0 ? (
          properties.map((property) => (
            <Explore key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ExploreProperties;

