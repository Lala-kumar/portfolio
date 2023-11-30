import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import react from "../assets/img/react.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import tailwind from "../assets/img/tailwind.svg";
import js from "../assets/img/javascript.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import firebase from "../assets/img/firebase.svg";
import git from "../assets/img/git.svg";
import redux from "../assets/img/redux.svg";
import github from "../assets/img/nav-icon4.svg";

import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skills-bx">
                <h2>Skills</h2>
                <br />
                <br />
                <br />
                <br />
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skills-slider"
                >
                  <div className="item">
                    <img src={react} alt="react" />
                    <h4>React JS</h4>
                  </div>
                  <div className="item">
                    <img src={js} alt="js" />
                    <h4>javscript</h4>
                  </div>
                  <div className="item">
                    <img src={bootstrap} alt="bootstrap" />
                    <h4>Bootstrap</h4>
                  </div>
                  <div className="item">
                    <img src={tailwind} alt="tailwind" />
                    <h4>Tailwind</h4>
                  </div>
                  <div className="item">
                    <img src={html} alt="html" />
                    <h4>HTML</h4>
                  </div>
                  <div className="item">
                    <img src={css} alt="css" />
                    <h4>CSS</h4>
                  </div>
                  <div className="item">
                    <img src={git} alt="git" />
                    <h4>Git</h4>
                  </div>
                  <div className="item">
                    <img src={github} alt="github" />
                    <h4>GitHub</h4>
                  </div>
                  <div className="item">
                    <img src={redux} alt="redux" />
                    <h4>Redux</h4>
                  </div>
                  <div className="item">
                    <img src={firebase} alt="firebase" />
                    <h4>Firebase</h4>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} alt="" className="background-image-left" />
      </section>
    </Fragment>
  );
};

export default Skills;
