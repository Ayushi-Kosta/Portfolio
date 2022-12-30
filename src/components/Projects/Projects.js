import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import movie from "../../Assets/Projects/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A full-fledged Netflix clone built using react and redux. Uses redux to asynchronously fetch trending movie data from TMDB API, showing favourites, add to watch later and remove from watch later built using redux. The movie detail page showing the trailer, similar movies and search functionality."
              ghLink="https://github.com/Ayushi-Kosta/Netflix_Clone"
              demoLink="https://netflix-clone-omega-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation App"
              description="A Content Based Recommender System which recommends movies similar to the movie user likes and analyses the sentiments on the reviews given by the user for that movie."
              ghLink="https://github.com/Ayushi-Kosta/Microsoft_Engage_Project"
              demoLink="https://youtu.be/_JUreOM93VQ"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
