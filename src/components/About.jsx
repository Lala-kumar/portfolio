import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutImg from "../assets/img/about.svg";

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <h1>
              About <span>Me</span>
            </h1>
            <h2>Frontend Developer</h2>
            <p>
              Hello I'm <span>Lala kumar</span> , a frontend developer with a
              love for React. I thrive on crafting elegant interfaces and
              delivering exceptional user experiences. I continuously seek new
              knowledge, staying updated with the latest trends and
              technologies. With a strong foundation in HTML, CSS, and
              JavaScript, I specialize in React and its ecosystem.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={AboutImg} alt="About Image" width={500} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
