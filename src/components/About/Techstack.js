import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
} from "react-icons/si";
import AOS from "aos";
import 'aos/dist/aos.css';

function Techstack() {
  AOS.init({
    duration: 1200,
  })
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} data-aos="zoom-in" data-aos-delay="300">
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <h6>Solidity</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>Mongo DB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h6>Next JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySQL</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
