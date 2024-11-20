import React from "react";
import "./ctacontact.css";

export default function CtaContact() {
  return (
    <div className="contact-form-container">
      <div className="form-text">
        <h2>ARE YOU READY?</h2>
        <p>
          Get in touch with us to start your journey to a higher functioning
          team, smarter, easier processes, and a better work experience for you
          and your entire team.
        </p>
      </div>
      <form className="contact-form-cta">
        <input
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
        />
        <input
          type="text"
          name="companyName"
          placeholder="The Company Name"
          required
        />
        <textarea
          name="interest"
          placeholder="What's your interest in working with Joe?"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
