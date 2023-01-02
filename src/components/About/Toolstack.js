import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJupyter,
  SiGithub,
  SiTensorflow
} from "react-icons/si";
import AOS from "aos";
import 'aos/dist/aos.css';

function Toolstack() {
  AOS.init({
    duration: 1200,
  })
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} data-aos="zoom-in" data-aos-delay="300">
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>

    </Row>
  );
}

export default Toolstack;
