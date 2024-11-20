import React from "react";
import "./signsyouneed.css";

const cards = [
  {
    title: "Team Morale is Low",
    description:
      "You’re struggling to connect with a younger generation workforce. It’s not just the lingo that’s getting missed. You need to be able to rely on your team members to make good choices even if you aren’t there.",
    buttonText: "GET CONNECTED",
  },
  {
    title: "You haven’t had a Vacation in Years",
    description:
      "You’re struggling to connect with a younger generation workforce. It’s not just the lingo that’s getting missed. You need to be able to rely on your team members to make good choices even if you aren’t there.",
    buttonText: "GET PEACE OF MIND",
  },
  {
    title: "The Acronyms Aren’t Cutting it",
    description:
      "You’ve tried team builds and programs that are all fluff and no real skills training. You need something significant and meaningful to change about what you’re doing.",
    buttonText: "GET PROGRESS",
  },
];

export default function SignsYouNeed() {
  return (
    <section className="signs-you-need">
      <h2>Three Signs You Might Need the Cowboy</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>{card.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
