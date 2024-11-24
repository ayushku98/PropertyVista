
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../components/Propertycard.css";

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/accounts/api/properties/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleAddToWishlist = (property) => {
    if (!wishlist.find((item) => item.id === property.id)) {
      setWishlist([...wishlist, property]);
      alert(`${property.title} has been added to your wishlist!`);
    } else {
      alert(`${property.title} is already in your wishlist.`);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>Error loading properties: {error}</div>;

  return (
    <div>
      <div className="heading-container">
        <h2 className="heading-title">
          Find Better Places to Live, Work, and Wonder...
        </h2>
        <div className="underline"></div>
      </div>
      <Slider {...sliderSettings} className="property-cards-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card" >
            <div className="imgBox">
              <img
                src={`http://127.0.0.1:8000${property.image}`}
                alt={property.title}
                className="property-image"
              />
            </div>
            <h3>{property.title}</h3>
            <p className="cardDis">{property.description}</p>
            <p>
              <strong>Price:</strong> ${property.price}
            </p>
            <p>
              <strong>Location:</strong> {property.location}
            </p>
            <div className="action-buttons">
          
             <button
                className="wishlist-button"
                onClick={() => handleAddToWishlist(property)}
              >
                Add to Wishlist
              </button>
              <label class="ui-like">
    <input type="checkbox"/>
    <div class="like">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
       </div>
  </label>
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;
