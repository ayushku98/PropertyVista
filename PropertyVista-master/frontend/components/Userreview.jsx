import React from 'react';

import Reviewcard from './Reviewcard';
import "../components/Review.css"

const Userreview = () => {
  const reviews = [
    {
      reviewerName: "Alice",
      reviewText: "Fantastic experience, will definitely visit again.",
      rating: 4,
      propertyName: "Ocean View Resort",
      propertyLocation: "California, USA",
      reviewerImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      reviewerName: "Bob",
      reviewText: "The property was okay, but the service needs improvement.",
      rating: 2,
      propertyName: "Mountain Retreat",
      propertyLocation: "Colorado, USA",
      reviewerImage: "https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg",
    },
    {
      reviewerName: "Charlie",
      reviewText: "Beautiful location, perfect for a family vacation!",
      rating: 5,
      propertyName: "Sunny Beach Resort",
      propertyLocation: "Miami, Florida",
      reviewerImage: "https://img.freepik.com/premium-photo/american-woman-real-estate-agent-stands-confidently-generative-ai_722401-51602.jpg?semt=ais_hybrid",
    },
    
      {
        reviewerName: "Emma Williams",
        reviewText: "I found the perfect bungalow for my family in Austin. It's a cozy home with a nice backyard, ideal for my kids.",
        rating: 4,
        propertyName: "Downtown, New York City, NY",
        propertyLocation: "Austin, TX",
        reviewerImage: "https://img.freepik.com/premium-photo/cheerful-curly-guy-showing-thumbs-up-winking-smiling-support-your-decision-standing-white-background_176420-49512.jpg",
      },
      {
        reviewerName: "Sophia Brown",
        reviewText: "I moved into a beautiful loft in the Arts District of LA. The space is huge, and I love the industrial look.",
        rating: 3.2,
        propertyName: "Chicago, IL",
        propertyLocation: "Lakeside View, Chicago, IL",
        reviewerImage: "https://media.istockphoto.com/id/531552368/photo/portrait-of-thinking-young-man-over-white-background.jpg?s=612x612&w=0&k=20&c=mwAf9wQ5p4C5MVt3MU2nc5fa96L79_jAb6H_bquitsU=",
      },
      {
        reviewerName: "Michael Thompson",
        reviewText: "My family and I recently rented a modern apartment near the beach in Miami, and it was a great choice. ",
        rating: 4,
        propertyName: " Oceanfront, Miami, FL",
        propertyLocation: "Miami, FL",
        reviewerImage: "https://media.istockphoto.com/id/656673940/photo/hat-and-specs.jpg?s=612x612&w=0&k=20&c=ffFBfR_uZp-jud-Kitd7kcEC4B6WcDWNTZBrib9D6VY=",
    },
      {
        reviewerName: "James Wilson",
        reviewText: "I rented a studio apartment in the city center of Boston. While the location is unbeatable for work, ",
        rating: 4.2,
        propertyName: " City Center, Boston, MA",
        propertyLocation: " Boston, MA",
        reviewerImage: "https://www.shutterstock.com/image-photo/close-side-profile-photo-funky-260nw-1359165476.jpg",
      },
      {
        reviewerName: "Ethan Davis",
        reviewText: "I bought a beautifully renovated historic home in Philadelphia's historic district. T ",
        rating: 4.2,
        propertyName: " Historic District, Philadelphia, PA",
        propertyLocation: "Philadelphia, PA",
        reviewerImage: "https://www.shutterstock.com/image-photo/young-man-daydreaming-portrait-short-260nw-2429279269.jpg",
      },

  ];

  return (
    <div>
    <div className="heading-container">
       <h2 class="heading-title">Dont Trust Us Trust Them</h2>
       <h3>USER REVIEWS</h3>
       <div class="underline"></div>
    
     <div className="reviews-list">
    
        {reviews.map((review, index) => (
          <Reviewcard key={index} review={review} />
        ))}
    
   
      </div>
    </div>
    </div>
  );
};

export default Userreview;

