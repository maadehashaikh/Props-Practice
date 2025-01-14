// src/LandingPage.js
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content-left">
        <h1>Welcome to TravelSite</h1>
        <p>
          Your journey starts here. Explore beautiful destinations and create
          unforgettable memories.
        </p>
        <button className="cta-button">Explore Now</button>
      </div>
      <div className="content-right">
        <img
          src="https://i.pinimg.com/736x/2f/2b/86/2f2b8603eb6bd04abfc8ee4fb89bc326.jpg"
          alt="Travel Destination"
          className="landing-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;
