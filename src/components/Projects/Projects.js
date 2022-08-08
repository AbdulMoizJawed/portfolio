import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forensicsInn from "../../Assets/Projects/forensicsInn.png";
import hpexpress from "../../Assets/Projects/hpexpress.png";
import comingSoon from "../../Assets/comingSoon.jpg";


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
              imgPath={forensicsInn}
              isBlog={false}
              title="ForensicsInn"
              description="Forensics Inn is a Forensics Data Bank. This WebApp scraps the data about the most common digital forensics tool from the most authentic sources and displays at all one place. The Forensics tools included are Computer Forensics, Cloud Forensics, Mobile Forensics, OS Forensics and much more."
              link="http://forensics-inn.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hpexpress}
              isBlog={false}
              title="HP Express"
              description="HP Express Shop is a E Commerce Store based on Amazon, which sells products in the domain of clothing, Home Improvement and pet Supplies"
              link="https://hpexpressshop.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Coming Soon"
              description="Everything Takes time. Be patient"
              link="https://github.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
