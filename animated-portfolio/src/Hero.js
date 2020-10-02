import * as React from 'react';
import './Hero.css';
import './structural-styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <>
      <Row className="hero">
        <Col className="horizontal-container">
          <h1 className="invisible">Phurita Letheren's portfolio</h1>
          <div className="cream">
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
            <div className="half-left green">
              <div className="content-container">
                <h2>Projects</h2>
                <p>Read what I have discovered since I started this journey</p>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/">
            <div className="half-right blue">
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
