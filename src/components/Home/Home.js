import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/pic-1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {
  AOS.init({
    duration: 1200,
})
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 data-aos="fade-right" style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" data-aos="fade-right" data-aos-delay="100">
                My name is
                <strong className="main-name"> AYUSHI KOSTA</strong>
              </h1>
              <h1 className="heading-name" data-aos="fade-right" data-aos-delay="100">
                  I'm a
              </h1>
              <div style={{ paddingBottom: 50, paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}  data-aos="fade-left"data-aos-delay="100">
            <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", height:"450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
