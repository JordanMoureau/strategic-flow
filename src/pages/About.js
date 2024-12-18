import "./about.css";
import Navbar from "../components/Navbar";

import HelmetWrapper from "../components/Helmet";

import joe from "../media/wiseguy.jpg";

export default function About() {
  return (
    <div>
      <HelmetWrapper
        title="Strategic Flow | About Joe Wallace"
        description="Discover Joe Wallace's journey from Force Recon Marine to trusted leadership coach. Learn how his battle-tested strategies are helping businesses scale and thrive."
        keywords="Joe Wallace, Leadership Coach, Force Recon Marine, Business Strategy, Leadership Consulting"
        image="https://strategicflow.org/about-hero-image.jpg"
        url="https://strategicflow.org/about"
      >
        {" "}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Joe Wallace",
          "jobTitle": "Leadership Coach & Business Strategist",
          "description": "Joe Wallace is a former Force Recon Marine turned leadership coach, offering military-based strategies to scale businesses and empower teams.",
          "url": "https://strategicflow.org/about",
          "sameAs": [
            "https://www.linkedin.com/in/joewallace",
            "https://strategicflow.org"
          ],
          "image": "https://strategicflow.org/about-hero-image.jpg"
        }
      `}
        </script>
      </HelmetWrapper>

      <div class="about-us">
        <Navbar
          textColor="#000" // White text on black background
          buttonBgColor="#000000" // Black background for button
          buttonTextColor="#ffffff" // White text on button
        />
        <div className="bounder">
          <div className="about-head">
            <h1 className="visually-hidden">
              About Joe Wallace | Strategic Flow
            </h1>
            <h1>Our Mission</h1>
            <p>
              We bring proven strategies and resilience-building techniques
              honed through years of service to businesses of all sizes. Every
              team deserves the tools to thrive, build trust, and achieve growth
              through immersive experiences that go beyond conventional
              consulting.
            </p>
          </div>

          <div className="about-cowboy">
            <img
              src={joe}
              alt="Joe Wallace, Force Recon Marine turned leadership and business coach"
            />

            <div className="right-side">
              <h2>The Cowboy</h2>
              <p>
                Joe “Cowboy” Wallace combines his leadership coaching skills
                with decades of experience in elite units like the Force Recon
                Marines. At Strategic Flow Consulting, Joe applies his expertise
                in business strategy to help teams overcome challenges,
                strengthen leadership, and implement scalable systems.
                <br />
                <br />
                Joe earned his call sign while serving as a Force Reconnaissance
                Marine, deploying to Afghanistan, Mexico, Colombia, and
                Southeast Asia during nearly a decade in the Marine Corps. After
                his military service, Cowboy embarked on a successful career in
                business, founding a tourism cooperative in Southern California
                and later serving as a team leader, sniper, and training
                coordinator on a regional SWAT team.
              </p>
            </div>
            <div className="bottom">
              <h3>Taking Battlefield Resilliance to Business Mastery</h3>
              <p>
                After a diagnosis related to traumatic brain injuries ended his
                career abruptly, Cowboy found new purpose in charitable
                missions, directing a travel documentary, and providing military
                consulting overseas. His journey led him to work with an
                international business consulting company, advising Fortune 500
                executives and global corporations. This experience sparked the
                idea for Strategic Flow, a method blending military tactics and
                human psychology to empower teams and enhance operational
                excellence.
                <br />
                <br />
                With Strategic Flow Consulting, Cowboy aims to break through the
                typical corporate jargon and deliver real, impactful change. His
                goal is to bring the strategies and leadership practices once
                reserved for elite units and major corporations to small and
                medium businesses, enabling them to thrive with strong
                leadership and minimal management.
              </p>
            </div>
          </div>

          <div className="about-bottom">
            <div className="bottom-container">
              <h2>
                "I’ve had the privilege of working with some of the highest
                performing teams in the world. What I’ve seen across every arena
                is that true leadership is what drives success, no matter the
                mission or industry. But today, we’re facing a crisis of
                leadership. My mission is to help change that, one team at a
                time.”
              </h2>
              <p>-Joe "Cowboy" Wallace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
