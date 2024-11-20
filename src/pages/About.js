import "./about.css";
import Navbar from "../components/Navbar";

import joe from "../media/wiseguy.jpg";

export default function About() {
  return (
    <div>
      <div class="about-us">
        <Navbar
          textColor="#000" // White text on black background
          buttonBgColor="#000000" // Black background for button
          buttonTextColor="#ffffff" // White text on button
        />
        <div className="bounder">
          <div className="about-head">
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
            <img src={joe} alt="concierge military style consulting services" />
            <div className="right-side">
              <h2>The Cowboy</h2>
              <p>
                Joe “Cowboy” Wallace earned his call sign while serving as a
                Force Reconnaissance Marine, deploying to Afghanistan, Mexico,
                Colombia, and Southeast Asia during nearly a decade in the
                Marine Corps. After his military service, Cowboy embarked on a
                successful career in business, founding a tourism cooperative in
                Southern California and later serving as a team leader, sniper,
                and training coordinator on a regional SWAT team. His public
                service included working undercover on a task force to combat
                drug and human trafficking, rescuing countless victims and
                dismantling criminal organizations.
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
            <h2>
              "In my career and life, I've discovered that teamwork is the most
              rewarding pursuit, both professionally and personally. My mission
              is to share that pursuit with as many people as possible
              throughout my lifetime."
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
