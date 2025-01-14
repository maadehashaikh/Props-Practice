import React from "react";
import "./Destination.css";

const destinationsData = [
  {
    name: "Paris, France",
    description: "The City of Lights, known for its art, fashion, and culture.",
    image:
      "https://i.pinimg.com/736x/e8/d9/6e/e8d96e881df4785334b2ac2445e27af1.jpg",
  },
  {
    name: "Tokyo, Japan",
    description: "A vibrant blend of tradition and modernity.",
    image:
      "https://i.pinimg.com/736x/62/1a/82/621a82642ec4cd3f9c7158e131431c2d.jpg",
  },
  {
    name: "Santorini, Greece",
    description: "Famous for its stunning sunsets and white-washed buildings.",
    image:
      "https://i.pinimg.com/736x/cc/92/67/cc926732acd183df5c712953cbb27de1.jpg",
  },
  {
    name: "New York, USA",
    description: "The city that never sleeps, with iconic landmarks.",
    image:
      "https://i.pinimg.com/736x/fd/d0/93/fdd0938b400865b2afd2ae5573d9f8b8.jpg",
  },
  {
    name: "Sydney, Australia",
    description: "Home to the iconic Sydney Opera House and beautiful beaches.",
    image:
      "https://i.pinimg.com/736x/57/06/6c/57066c3d3e73cd653586d5f2235e813a.jpg",
  },
  {
    name: "Cape Town, South Africa",
    description: "Known for its stunning landscapes and Table Mountain.",
    image:
      "https://i.pinimg.com/736x/6b/03/d9/6b03d92864d41bc1fceb0876834ddef0.jpg",
  },
];

const Destinations = () => {
  return (
    <div className="destinations-page">
      <h2 className="destinations-title">Our Destinations</h2>
      <p className="destinations-subtitle">
        Explore beautiful destinations around the world.
      </p>
      <div className="destinations-grid">
        {destinationsData.map((destination, index) => (
          <div key={index} className="destination-card">
            <img
              src={destination.image}
              alt={destination.name}
              className="destination-image"
            />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
