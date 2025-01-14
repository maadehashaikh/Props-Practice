// src/Services.js
import React from "react";
import "./Services.css";
// Assuming you'll have a separate CSS file for styling

const Services = () => {
  return (
    <div className="services-page">
      <h2 className="services-title">Our Travel Services</h2>
      <p className="services-description">
        We provide a wide range of travel services to make your journey
        unforgettable. Explore our offerings below:
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Customized Travel Packages</h3>
          <p>
            Tailored itineraries to match your interests, whether you're seeking
            adventure, relaxation, or cultural immersion.
          </p>
        </div>

        <div className="service-card">
          <h3>Hotel and Accommodation Booking</h3>
          <p>
            We offer hotel bookings across the globe, ensuring comfort and
            convenience wherever you stay.
          </p>
        </div>

        <div className="service-card">
          <h3>Guided Tours</h3>
          <p>
            Discover the best of each destination with our expert local guides
            leading the way.
          </p>
        </div>

        <div className="service-card">
          <h3>Visa Assistance</h3>
          <p>
            We assist with the visa application process to ensure your travel
            documents are ready.
          </p>
        </div>

        <div className="service-card">
          <h3>Local Experiences</h3>
          <p>
            Engage in unique, local experiences that allow you to connect with
            the culture of your destination.
          </p>
        </div>

        <div className="service-card">
          <h3>24/7 Customer Support</h3>
          <p>
            Our support team is always available to assist you with your travel
            needs, ensuring peace of mind throughout your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
