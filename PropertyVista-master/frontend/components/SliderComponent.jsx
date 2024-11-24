// import React, { useState, useEffect } from "react";
// import ReactStars from "react-stars"; // For rating
// import axios from "axios";
// import "../components/card.css" // For API requests

// const SliderCardComponent = () => {
//   const [slides, setSlides] = useState([]); // State to store slide data
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetch slider data
//   useEffect(() => {
//     const fetchSliderData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/accounts/api/slider/"); // Replace with your backend API URL
//         setSlides(response.data); // Store data in state
//       } catch (error) {
//         console.error("Error fetching slider data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSliderData();
//   }, []);

//   // Handle rating change
//   const handleRatingChange = (newRating, slideId) => {
//     console.log(`New rating for slide ${slideId}: ${newRating}`);
//     // Add logic to update the rating in the backend (optional)
//   };

//   // Handle add to wishlist click
//   const handleAddToWishlist = (slideId) => {
//     console.log(`Added slide ${slideId} to wishlist`);
//     alert(`Added to wishlist`)
//     // Add logic for adding to wishlist (optional)
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading message
//   }

//   return (
//     <div className="slider-card-container">
//       <div class="heading-container">
//   <h2 class="heading-title">Rate Our Properties</h2>
//   <div class="underline"></div>
// </div>

//       <div className="card-grid">

//         {slides.map((slide) => (
//           <div key={slide.id} className="card">
//             <img
//               src={slide.image_url}
//               alt={slide.title}
//               className="card-image"
//             />
//             <div className="card-content">
//               <h2 className="card-title">{slide.title}</h2>
//               {slide.description && <p className="card-description">{slide.description}</p>}
//               {slide.link && (
//                 <a
//                   href={slide.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="card-link"
//                 >
//                   View more
//                 </a>
//               )}
//               <div className="rating-container">
//                 <ReactStars
//                   count={5}
//                   value={slide.rating}
//                   size={24}
//                   color2={"#ffd700"}
//                   onChange={(newRating) => handleRatingChange(newRating, slide.id)}
//                   className="rating"
//                 />
                
//                 <button
//                   onClick={() => handleAddToWishlist(slide.id)}
//                   className="wishlist-button"
//                 >
//                   Add to Wishlist
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderCardComponent;
import React, { useState, useEffect } from "react";
import ReactStars from "react-stars"; // For rating
import axios from "axios";
import "../components/card.css"; // For API requests

const SliderCardComponent = () => {
  const [slides, setSlides] = useState([]); // State to store slide data
  const [loading, setLoading] = useState(true); // Loading state
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide index

  // Fetch slider data
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/accounts/api/slider/"); // Replace with your backend API URL
        setSlides(response.data); // Store data in state
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  // Handle rating change
  const handleRatingChange = (newRating, slideId) => {
    console.log(`New rating for slide ${slideId}: ${newRating}`);
    // Add logic to update the rating in the backend (optional)
  };

  // Handle add to wishlist click
  const handleAddToWishlist = (slideId) => {
    console.log(`Added slide ${slideId} to wishlist`);
    alert(`Added to wishlist`);
    // Add logic for adding to wishlist (optional)
  };

  // Handle previous slide
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? slides.length - 4 : prevIndex - 4
    );
  };

  // Handle next slide
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= slides.length ? 0 : prevIndex + 4
    );
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message
  }

  return (
    <div className="slider-card-container">
      <div className="heading-container">
        <h2 className="heading-title">Rate Our Properties</h2>
        <div className="underline"></div>
      </div>

      <div className="carousel-container">
        <button onClick={handlePrevSlide} className="carousel-button prev-button">
          &lt;
        </button>

        <div className="card-grid">
          {slides.slice(currentIndex, currentIndex + 4).map((slide) => (
            <div key={slide.id} className="card">
              <img
                src={slide.image_url}
                alt={slide.title}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-title">{slide.title}</h2>
                {slide.description && (
                  <p className="card-description">{slide.description}</p>
                )}
                {slide.link && (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    View more
                  </a>
                )}
                <div className="rating-container">
                  <ReactStars
                    count={5}
                    value={slide.rating}
                    size={24}
                    color2={"#ffd700"}
                    onChange={(newRating) =>
                      handleRatingChange(newRating, slide.id)
                    }
                    className="rating"
                  />

                  <button
                    onClick={() => handleAddToWishlist(slide.id)}
                    className="wishlist-button"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleNextSlide} className="carousel-button next-button">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderCardComponent;
