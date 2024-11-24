

import React from 'react';
import "../components/Userreview"
import "../components/Review.css"
// Utility function to render star ratings
const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
  ));
};

const ReviewCard = ({ review }) => {
  const { reviewerName, reviewText, rating, propertyName, propertyLocation, reviewerImage } = review;

  return (

    <div className="main">
     
         <div className="review-card">
            <div className="review-header">
                <img src={reviewerImage} alt={reviewerName} className="reviewer-image" />
                <div className="reviewer-info">
                <h3>{reviewerName}</h3>
                <p className="property-name">{propertyName}</p>
                <p className="property-location">{propertyLocation}</p>
                </div>
            

                <div className="review-body">
                    <p>{reviewText}</p>
                    <div className="rating">{renderStars(rating)}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ReviewCard;
