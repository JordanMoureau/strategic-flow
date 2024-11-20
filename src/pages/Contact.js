import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
import Navbar from "../components/Navbar";

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        form.current,
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div>
      <Navbar
        textColor="#000" // White text on black background
        buttonBgColor="#C4061B" // Black background for button
        buttonTextColor="#ffffff" // White text on button
      />
      <div className="main-center">
        <div className="contact-us">
          <div className="contact-header">
            <h1>Start your journey with Strategic Flow</h1>
            <p>
              We're here to get your teams in flow. Contact us today and lets
              get started.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email Address"
              name="from_email"
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="What’s your interest in working 
with Joe?"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
}
