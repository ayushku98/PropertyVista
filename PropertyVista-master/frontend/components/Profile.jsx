import React, { useEffect, useState } from "react";

function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.log("No token found");
      return;
    }

    fetch("http://127.0.0.1:8000/api/accounts/profile/", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.username) {
          setProfile(data);
        } else {
          console.log("Failed to fetch profile");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h1 style={{background:"red",
        height:"100px",
        width:"100%",
        color:"yellow",
        margin:"150px 2px"
      }}>Vishaal </h1>
      {profile ? (
        <div>
          <h1>Welcome, {profile.username}!</h1>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default UserProfile;
