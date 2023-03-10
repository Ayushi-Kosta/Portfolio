import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl-working-on-laptop-cropped.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home2() {
  AOS.init({
    duration: 1200,
  })
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 data-aos="fade-right" data-aos-delay="100" style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p data-aos="fade-right" data-aos-delay="300" className="home-about-body">
              I am currently a 3rd year student pursuing my Bachelors in Computer Science from Jabalpur Engineering College, Jabalpur. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue"> C++, Javascript, Solidity and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="blue">
                  Web3 and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="blue"> Blockchain, Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Next.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" data-aos="fade-left" data-aos-delay="100">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="flip-left" data-aos-delay="200">FIND <span className="blue">ME</span> ON</h1>
            {/* <p>
              Feel free to <span className="blue">connect </span>with me
            </p> */}
            <ul className="home-about-social-links" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
              <li className="social-icons">
                <a
                  href="https://github.com/Ayushi-Kosta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AyushiKosta_27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayushi-kosta-473aa8208/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kostaayushi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
