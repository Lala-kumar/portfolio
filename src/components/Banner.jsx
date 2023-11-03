import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Web Developer", "Web Designer"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta(period);
    }

    if (!isDeleting && updateText == fullText) {
      setisDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText == "") {
      setisDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hii I'm Lala Kumar"} <span className="wrap">{text}</span>
            </h1>
            <Button>
              Let's Connect <ArrowRightCircle size={20} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Image" width={550} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
