import * as React from 'react';
import './Bio.css';
import './structural-styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function Bio() {
  return (
    <>
      <Row className="Bio">
        <Col className="horizontal-container" data-aos='fade-up-highest'>
          <div>
            <a href="/">
              <div className="content-container bio">
                <h2>A little about me</h2>
              </div>
            </a>
          </div>
        </Col>
      </Row>
      <Row className="Bio">
        <Col className="horizontal-container" data-aos='fade-up-highest'>
          <div>
            <a href="/">
              <div className="content-container bio">
                <h3>UX UI Design</h3>
                <p>I enjoy making a user-friendly website and application. I always make sure the design is functional, useful, responsive and stand out.</p>
              </div>
            </a>
          </div>
        </Col>
        <Col className="horizontal-container" data-aos='fade-up-highest'>
          <div>
            <a href="/">
              <div className="content-container bio">
                <h3>Front-end development</h3>
                <p>I learned coding alongside my work since 2019. It's been a continuous journey, but I am comfortable to use Git, and code with HTML, SCSS, and CSS. I am reasonably confident with React and JQuery.</p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
      <Row className="Bio">
        <Col className="horizontal-container" data-aos='fade-up-highest'>
          <div>
            <a href="/">
              <div className="content-container bio">
                <h3>Accessibility</h3>
                <p>Digital accessibility is a legal obligation for the higher education sector, a significant part of my job is to make sure what we design is usable by the widest possible audience.</p>
              </div>
            </a>
          </div>
        </Col>
        <Col className="horizontal-container" data-aos='fade-up-highest'>
          <div>
            <a href="/">
              <div className="content-container bio">
                <h3>I have a lot of pets</h3>
                <p>Apart from work I also enjoy spending time with my puppy, cat, bearded dragon and renovating furniture <span role="img" aria-label="image" alt="smile emoji">😊</span></p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Bio;
