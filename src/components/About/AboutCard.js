import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <WhatsAppWidget style={{ zIndex: 100 }} phoneNumber="03312355121" />
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdul Moiz Jawed </span>
            from <span className="purple"> Pakistan.</span>

            <br />I am a Software developer pursuing Bachelors in Computer Science from NED University.
            <br />
            <br />

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Discovering New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ABDUL MOIZ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
