import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./ctacontact.css";

export default function CtaContact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot check
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
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="form-text">
        <h2>ARE YOU READY?</h2>
        <p>
          Get in touch with us to start your journey to a higher-functioning
          team, smarter, easier processes, and a better work experience for you
          and your entire team.
        </p>
      </div>

      {!isSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="contact-form-cta">
          {/* Honeypot Field */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email Address"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="The Company Name"
            required
          />
          <textarea
            name="message"
            placeholder="What's your interest in working with Joe?"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      ) : (
        <div className="align">
          <h3>Thanks for reaching out!</h3>
          <p>
            Your message has been sent successfully. Joe will review your
            submission and get back to you soon. We’re excited to help you
            transform your team dynamics and processes into something that truly
            works. Your journey toward smarter solutions and better
            collaboration begins now. Stay tuned—adventure awaits!
          </p>
        </div>
      )}
    </div>
  );
}
