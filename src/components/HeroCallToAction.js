import React from "react";
import "./herocalltoaction.css";
import backgroundImage from "../media/widebw.jpg"; // Replace with the actual image path

export default function HeroCallToAction() {
  return (
    <section
      className="hero-call-to-action"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h2>
          These coaching strategies have formerly been reserved for massive
          companies making millions in revenue
        </h2>
        <p>Joe's purpose is to make them available to you.</p>
        <button className="cta-button">Get Your Strategy Session</button>
      </div>
    </section>
  );
}
