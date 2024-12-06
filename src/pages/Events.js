import React from "react";
import Navbar from "../components/Navbar";
import "./events.css";

import EventHighlights from "../components/EventHighlights";

import Testimonials from "../components/Testimonials";
import CtaContact from "../components/CtaContact";

export default function Events() {
  return (
    <>
      <div className="events-page">
        <Navbar textColor="#fff" buttonBgColor="#fff" buttonTextColor="#333" />
        <div className="bounder">
          <video
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={require("../media/eventsvid.mp4")} type="video/mp4" />
          </video>
          <div className="content-overlay">
            <h1>Team Building Like no Other</h1>
            <p>
              Strengthen communication, problem-solving skills, and camaraderie
              in an unforgettable, dynamic setting that translates to success
              both on and off the field.
            </p>
          </div>
        </div>
      </div>

      <div className="bounder">
        <div className="main-events">
          <h2>
            Forge unbreakable bonds, master resilience, and transform your team.
          </h2>
          <p>
            Joe's team-building events bring people together in a way that's
            fun, challenging, and genuinely rewarding. Teams get pushed out of
            their comfort zones and learn to lean on each other for support.
            This isn't just about getting through a course—it’s about building
            trust, finding better ways to communicate, and discovering how to
            solve problems as a group.
            <br />
            <br />
            These activities create real moments of learning how to stay calm
            and think clearly when the pressure’s on, skills that come in handy
            when real-life challenges pop up. By tackling these challenges
            together, teams walk away stronger, more connected, and ready to
            take on whatever comes their way, both at work and beyond.
          </p>
        </div>
        <EventHighlights />

        <div className="main-events">
          <h2>Experience the Change</h2>
          <p>
            Experience the transformative impact firsthand. Joe’s team-building
            events have empowered countless teams to overcome challenges, bond
            under pressure, and bring lasting improvement back to their
            workplace. Give your team the boost they need to thrive, connect,
            and grow.”
          </p>
        </div>

        <Testimonials />

        <CtaContact />
      </div>
    </>
  );
}
