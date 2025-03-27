import React from "react";
import Card from "react-bootstrap/Card";
import { ImMagicWand, ImPacman } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yasinthon Siwarat </span>
            from <span className="purple"> Bankok, Thailand.</span>
            <br /> You can call me <span className="purple">Yew.</span> I was born in 2003. I am 22 year old. I live in Bankok.
            <br />
            I am studying Electronics Technology at <span className="purple">King Mongkut's University of Technology North Bangkok.</span>
            About my family, I am the only child. I really enjoy exercising and cooking.
            <br />
            <br />
          </p>
          <ul>
          <p style={{ textAlign: "justify" }}><strong className="purple"><ImMagicWand />   Hobby</strong></p>
            <li className="about-activity">
              <ImPacman /> Playing Football<span className="purple">  (Team: Raoseian)</span>
            </li>
            <li className="about-activity">
              <ImPacman /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPacman /> I like to do gardening around my house.
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
