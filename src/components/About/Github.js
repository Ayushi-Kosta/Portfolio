import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import AOS from "aos";
import 'aos/dist/aos.css';

function Github() {
  AOS.init({
    duration: 1200,
  })
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} data-aos="zoom-in" data-aos-delay="300">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="blue">Code</strong>
      </h1>
      <GitHubCalendar
        username="Ayushi-Kosta"
        blockSize={15}
        blockMargin={5}
        color="#00B4D8"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
