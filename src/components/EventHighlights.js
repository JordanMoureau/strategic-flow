import React from "react";
import "./eventhighlights.css";
import immersiveImage from "../media/mud.jpeg"; // Replace with actual paths
import trustImage from "../media/trust.jpg";
import lastingImpactImage from "../media/lastingimpact.jpg";

const EventHighlights = () => {
  const highlights = [
    {
      image: immersiveImage,
      heading: "Immersive, Real World Experiences",
      text: "These aren’t typical team-building exercises; they simulate real-life scenarios that test and build communication, leadership, and problem-solving skills.",
    },
    {
      image: trustImage,
      heading: "Trust and Bonding",
      text: "Strengthen trust and create unbreakable bonds, making teams more cohesive and effective.",
    },
    {
      image: lastingImpactImage,
      heading: "Lasting Impact",
      text: "Lessons that last, strengthening teamwork, resilience, and decision-making back at work.",
    },
  ];

  return (
    <div className="event-highlights">
      {highlights.map((highlight, index) => (
        <div className="highlight-card" key={index}>
          <img
            src={highlight.image}
            alt={highlight.heading}
            className="highlight-image"
          />
          <div className="highlight-text">
            <h3>{highlight.heading}</h3>
            <p>{highlight.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventHighlights;
