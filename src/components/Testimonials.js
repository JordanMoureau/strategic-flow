import React, { useState, useEffect } from "react";
import "./testimonials.css";
import { motion } from "framer-motion"; // Import Framer Motion

import { MdArrowBackIosNew } from "react-icons/md";

const testimonials = [
  {
    quote:
      "Cowboy was exactly what we needed as we started breaking into new markets. He helped us cut through the noise, and focus on what mattered. His practical advice and steady guidance gave us the confidence to move forward. If you’re a small business looking to level up, Cowboy’s the guy to call.",
    author: "Martin Zihlo, SORUDO, Project Manager",
  },
  {
    quote:
      "Cowboy’s leadership style is like nothing I have seen before—straightforward, disciplined, and built on real-world experience. He has a way of simplifying complex challenges and inspiring people to step up and take ownership. His approach isn’t about giving you all the answers; it’s about teaching you how to lead with confidence and purpose. But most importantly his methods get results.",
    author: "Mike Weaver, Refine Media LLC, Owner",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Automatically switch testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  return (
    <div className="testimonials">
      <div className="test-interior">
        <div className="arrow" onClick={prevTestimonial}>
          <MdArrowBackIosNew size={34} /> {/* Left arrow */}
        </div>
        <motion.div
          className="quote-container"
          key={currentIndex} // Ensure Framer Motion re-renders on index change
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out
          transition={{ duration: 3 }} // Smooth fade-in duration
        >
          <div className="quote">
            <h3>"{testimonials[currentIndex].quote}"</h3>
            <p>- {testimonials[currentIndex].author}</p>
          </div>
        </motion.div>

        <div className="arrow" onClick={nextTestimonial}>
          {" "}
          <MdArrowBackIosNew
            size={34}
            style={{ transform: "rotate(180deg)" }} // Flip for right arrow
          />
        </div>
      </div>
    </div>
  );
}
