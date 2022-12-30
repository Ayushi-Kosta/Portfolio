import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Ayushi Kosta </span>
            from <span className="blue"> Bhopal, India.</span>
            <br />I am a junior pursuing Btech in Computer Science from Jabalpur Engineering College, Jabalpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing 
            </li>
          </ul>

          <p style={{ color: "#2b95aa" }}>
            "Keep learning and trying new things!"{" "}
          </p>
          <footer className="blockquote-footer">Ayushi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
