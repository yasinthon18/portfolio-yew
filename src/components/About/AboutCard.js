import React from "react";
import Card from "react-bootstrap/Card";
import { ImPacman, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yasinthon Siwarat </span>
            from <span className="purple"> Bankok, Thailand.</span>
            <br /> You can call me Yew. I was born in 2003. I am 22 year old. I live in Bankok.
            <br />
            I am studying Electronics Technology at King Mongkut's University of Technology North Bangkok.
            About my family, I am the only child. I really enjoy exercising and cooking.
            <br />
            <br />
          </p>
          <ul>
          <p style={{ textAlign: "justify" }}><strong className="purple">Hobby</strong></p>
            <li className="about-activity">
              <ImPacman /> Playing Football (Team: Raoseian)
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
