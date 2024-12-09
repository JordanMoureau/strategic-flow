import "./home.css";
import Navbar from "../components/Navbar.js";
import Testimonials from "../components/Testimonials.js";

import CtaContact from "../components/CtaContact";
import HeroCallToAction from "../components/HeroCallToAction.js";
import SignsYouNeed from "../components/SignsYouNeed.js";

import HelmetWrapper from "../components/Helmet.js";

import joe from "../media/wiseguy.jpg";

export default function Home() {
  return (
    <div>
      <HelmetWrapper
        title="Strategic Flow | Leadership That Speaks"
        description="Empowering small teams with proven military leadership strategies to scale businesses, improve team dynamics, and reduce executive burnout."
        keywords="Leadership, Scaling, Business Strategy, Team Building"
        image="https://strategicflow.org/home-hero-image.jpg"
        url="https://strategicflow.org"
      />
      <div className="hero">
        <Navbar textColor="#fff" buttonBgColor="#fff" buttonTextColor="#333" />
        <div className="hero-heading">
          <h1>What's the secret to leading a fortune 500 company</h1>
          <p>
            We teach the same strategies for leadership used by Elite Units of
            the US Military to make your business systems stronger, more
            efficient and easier to maintain.
          </p>
          <a
            href="https://calendly.com/jwallace-strategicflow"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            aria-label="Schedule a leadership strategy session with Joe Wallace"
          >
            <button>
              <span>Lets Talk</span>
            </button>
          </a>
        </div>
      </div>

      <div className="bounder">
        <div className="home-section-one">
          <h2>Your Time Isn’t Scalable—But Delegation Is.</h2>

          <div className="row">
            <div className="col-one">
              <h3>
                Your business won't function without you? Delegating feels like
                more work than it's worth?
              </h3>
            </div>

            <div className="col-two">
              <p>
                Drawing on proven military methodologies, Strategic Flow teaches
                teams to operate with precision and resilience, handling
                day-to-day operations confidently. You’ll gain the space to
                focus on high-level strategy and growth, knowing your team is in
                the flow and equipped to succeed. This approach not only
                strengthens your business but also fosters a culture of
                accountability and continuous improvement.
              </p>
            </div>
          </div>
        </div>
        <Testimonials />
        <div className="about-cowboy">
          <img
            src={joe}
            alt="Joe Wallace offering military-style leadership consulting services"
            loading="lazy"
          />
          <div className="right-side">
            <h2>The Cowboy</h2>
            <p>
              Joe “Cowboy” Wallace earned his call sign while serving as a Force
              Reconnaissance Marine, deploying to Afghanistan, Mexico, Colombia,
              and Southeast Asia during nearly a decade in the Marine Corps.
              After his military service, Cowboy embarked on a successful career
              in business, founding a tourism cooperative in Southern California
              and later serving as a team leader, sniper, and training
              coordinator on a regional SWAT team. His public service included
              working undercover on a task force to combat drug and human
              trafficking, rescuing countless victims and dismantling criminal
              organizations.
            </p>
          </div>
        </div>
        <SignsYouNeed />
        <CtaContact />
        <HeroCallToAction />
      </div>
    </div>
  );
}
