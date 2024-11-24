
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Projectsgallery/Projectgalery.css';

const Projectgalery = () => {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch properties from the Django backend using the correct path
    axios.get('http://127.0.0.1:8000/api/accounts/api/gallery/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  return (
    <div className="property-container-gallery">
      {properties.map(property => (
        <div className="property-card-gallery" key={property.id}>
          {/* Adjusting image source URL to use the full path from the backend */}
          <img 
            src={`http://localhost:8000/${property.image}`} 
            alt={property.title} 
            onError={(e) => e.target.src = 'default-image-path.jpg'} 
          />

          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: ${property.price}</p>
          <p>Location: {property.location}</p>
          <button 
            className={favorites.includes(property.id) ? 'favorited' : 'add-to-favorites'}
          >
           Add to Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projectgalery;
