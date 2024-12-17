import React from "react";
import Navbar from "../components/Navbar";
import "./events.css";

import EventHighlights from "../components/EventHighlights";

import Testimonials from "../components/Testimonials";
import CtaContact from "../components/CtaContact";
import HelmetWrapper from "../components/Helmet";

export default function Events() {
  return (
    <>
      <HelmetWrapper
        title="Strategic Flow | Leadership Workshops & Events"
        description="Join our leadership workshops and events to learn proven military strategies that empower teams, improve collaboration, and help businesses scale efficiently."
        keywords="Leadership Events, Workshops, Team Training, Business Leadership, Scaling Teams"
        image="https://strategicflow.org/events-hero-image.jpg"
        url="https://strategicflow.org/events"
      >
        {" "}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Leadership Workshops & Team-Building Events",
          "startDate": "2024-01-15T09:00:00-08:00", /* Replace with actual date */
          "endDate": "2024-01-15T17:00:00-08:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Strategic Flow Venue",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Leadership Way",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90001",
              "addressCountry": "US"
            }
          },
          "description": "Join our leadership workshops to build stronger teams, improve communication, and develop trust. Empower your team with proven military strategies.",
          "image": [
            "https://strategicflow.org/events-hero-image.jpg"
          ],
          "organizer": {
            "@type": "Organization",
            "name": "Strategic Flow",
            "url": "https://strategicflow.org"
          }
        }
      `}
        </script>{" "}
      </HelmetWrapper>

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
            <h1 className="visually-hidden">
              Leadership Workshops & Team Building Events | Strategic Flow
            </h1>{" "}
            {/* Hidden header */}
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
