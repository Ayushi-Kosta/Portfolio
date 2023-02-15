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
import { FaHardHat } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';

function Toolstack() {
  AOS.init({
    duration: 1200,
  })
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} data-aos="zoom-in" data-aos-delay="300">
      <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
        <h6>Hardhat</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h6>Vercel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/>
        <h6>Jupyter Notebook</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h6>Github</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h6>Tensorflow</h6>
      </Col>

    </Row>
  );
}

export default Toolstack;
