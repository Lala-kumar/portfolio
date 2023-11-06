import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
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
      items: 2,
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
                <p>Skills that i have a grasp knowledge</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skills-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>React JS</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>javscript</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>Bootstrap</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>Tailwind</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>HTML</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>CSS</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>Git</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>GitHub</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h4>Redux</h4>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
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
