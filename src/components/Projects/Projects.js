import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import movie from "../../Assets/Projects/movie.png";
import d from "../../Assets/Projects/d.png";

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
              imgPath={d}
              isBlog={false}
              title="3d object viewer"
              description="Online 3d model viewer made using Three Js library of Javascript."
              ghLink="https://github.com/Ayushi-Kosta/Fabrik"
              demoLink="https://lustrous-monstera-b7d840.netlify.app/"              
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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
