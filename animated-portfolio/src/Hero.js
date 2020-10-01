import React from 'react';
import './Hero.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <h1 className="invisible">Phurita Letheren's portfolio</h1>
          <div className="red">
            <a href="/">
              <div className="content-container">
                <h2>Blog</h2>
                <p>Read what I have discovered since I started this journey</p>
              </div>
            </a>
          </div>
          
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
        <a href="/">
            <div className="green">
              <div className="content-container">
                <h2>Projects</h2>
                <p>Read what I have discovered since I started this journey</p>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/">
            <div className="blue">
              <div className="content-container">
                <h2>Process</h2>
                <p>Read what I have discovered since I started this journey</p>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default Hero;
