import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import HelmetWrapper from "../components/Helmet";

import "./contact.css";
import Navbar from "../components/Navbar";

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form was submitted

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot check: Abort if honeypot is filled
    const honeypotValue = form.current.honeypot.value;
    if (honeypotValue) {
      console.log("Bot detected, aborting submission.");
      return;
    }

    emailjs
      .sendForm(
        "service_m48jv7r", // Replace with your EmailJS Service ID
        "template_mwmb37m", // Replace with your EmailJS Template ID
        form.current,
        "p7oN8NqSYov4ZfxyP" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          setIsSubmitted(true); // Hide the form
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <HelmetWrapper
        title="Strategic Flow | Get in Touch"
        description="Contact Strategic Flow to schedule your free leadership strategy session. Empower your team, reduce burnout, and scale your business with proven systems."
        keywords="Contact Strategic Flow, Leadership Strategy Session, Business Consultation, Joe Wallace"
        image="https://strategicflow.org/contact-hero-image.jpg"
        url="https://strategicflow.org/contact"
      />

      <Navbar
        textColor="#000"
        buttonBgColor="#C4061B"
        buttonTextColor="#ffffff"
      />
      <div className="main-center">
        <div className="contact-us">
          <div className="contact-header">
            <h1>Start your journey with Strategic Flow</h1>
            <p>
              We're here to get your teams in flow. Contact us today and let's
              get started.
            </p>
          </div>

          {!isSubmitted ? (
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {/* Honeypot field */}
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

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
                placeholder="What’s your interest in working with Joe?"
                required
              ></textarea>

              <button type="submit">Submit</button>
              {statusMessage && (
                <p className="status-message">{statusMessage}</p>
              )}
            </form>
          ) : (
            <div className="contact-form">
              <h3>Thanks for contacting Joe!</h3>
              <p>
                Your message has been sent successfully. Joe will get back to
                you soon to kick off this exciting journey. Whether it's
                improving team collaboration, building innovative strategies, or
                tackling new challenges, the adventure starts here. Get ready to
                experience a transformation that will empower you and your team
                for success.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
