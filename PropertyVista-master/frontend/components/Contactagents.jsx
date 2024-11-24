// import React, { useState, useEffect } from "react";
// import "../components/Contactagent.css";

// const AgentCards = () => {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAgents = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/api/accounts/api/agents/");
//         if (!response.ok) {
//           throw new Error("Error fetching agents data");
//         }
//         const data = await response.json();
//         setAgents(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAgents();
//   }, []);

//   if (loading) return <div>Loading agents...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="heading-container">
//     <h2 class="heading-title">Contact Property Agents From Your Area</h2>
//     <div class="underline"></div>
//     <div className="agent-cards-container">
//       {agents.length === 0 ? (
//         <p>No agents found</p>
//       ) : (
//         agents.map((agent) => (
//           <div key={agent.email} className="agent-card">
//            <img
//   src={`http://127.0.0.1:8000/${agent.property_image}`} // Assuming the backend returns the relative image path
//   alt={agent.name}
//   className="agent-image"
// />
//             <div className="agent-info">
//               <h3>{agent.name}</h3>
//               <p>{agent.property_location}</p>
//               <p>{agent.property_description}</p>
//               <div className="agent-rating">
//                 <span>Rating: {agent.rating || "N/A"}</span>
//               </div>
//               <div className="contact-info">
//                 <p><strong>Email:</strong> {agent.email}</p>
//                 <p><strong>Phone:</strong> {agent.phone_number}</p>
//               </div>
//               <button className="contact-button">Contact Agent</button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
// </div>
//   );
// };

// export default AgentCards;
import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import the Slider component
import "../components/Contactagent.css";

const AgentCards = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/accounts/api/agents/");
        if (!response.ok) {
          throw new Error("Error fetching agents data");
        }
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) return <div>Loading agents...</div>;
  if (error) return <div>Error: {error}</div>;

  // Slider settings
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop of slides
    speed: 500, // Speed of slide transition
    slidesToShow: 3, // Number of slides shown at once
    slidesToScroll: 1, // Number of slides scrolled at once
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens (mobiles)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="heading-container">
      <h2 className="heading-title">Contact Property Agents From Your Area</h2>
      <div className="underline"></div>
      <Slider {...sliderSettings} className="agent-slider">
        {agents.length === 0 ? (
          <p>No agents found</p>
        ) : (
          agents.map((agent) => (
            <div key={agent.email} className="agent-card">
              <img
                src={`http://127.0.0.1:8000/${agent.property_image}`} // Assuming the backend returns the relative image path
                alt={agent.name}
                className="agent-image"
              />
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <p>{agent.property_location}</p>
                <p>{agent.property_description}</p>
                <div className="agent-rating">
                  <span>Rating: {agent.rating || "N/A"}</span>
                </div>
                <div className="contact-info">
                  <p><strong>Email:</strong> {agent.email}</p>
                  <p><strong>Phone:</strong> {agent.phone_number}</p>
                </div>
                <button className="contact-button">Contact Agent</button>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default AgentCards;
