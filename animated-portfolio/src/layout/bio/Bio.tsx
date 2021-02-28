import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Bio.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Bio: React.FC = () => {
  return (
    <>
      <Row className="Bio">
        <Col className="horizontal-container">
          <div>
            <div className="content-container bio">
              <h2>A little about me</h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="Bio" xs={1} md={2}>
        <Col className="horizontal-container">
          <div>
            <div className="content-container bio">
              <h3>UX UI Design</h3>
              <p>
                I enjoy making a user-friendly website and application. I always make sure the design is functional,
                useful, responsive and stand out.
              </p>
            </div>
          </div>
        </Col>
        <Col className="horizontal-container">
          <div>
            <div className="content-container bio">
              <a href="/dev"><h3>Front-end development</h3></a>
              <p>
                I learned coding alongside my work since 2019. It's been a continuous journey, but I am comfortable to
                use Git, and code with HTML, SCSS, and CSS. I am reasonably confident with React and JQuery.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="Bio" xs={1} md={2}>
        <Col className="horizontal-container">
          <div>
            <div className="content-container bio">
              <h3>Accessibility</h3>
              <p>
                Digital accessibility is a legal obligation for the higher education sector, a significant part of my
                job is to make sure what we design is usable by the widest possible audience.
              </p>
            </div>
          </div>
        </Col>
        <Col className="horizontal-container">
          <div className="content-container bio">
            <h3>I have a lot of pets</h3>
            <p>
              Apart from work I also enjoy spending time with my puppy, cat, bearded dragon and renovating furniture{' '}
              <span role="img" aria-label="image">
                😊
              </span>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="Bio" xs={1} md={2}>
        <Col className="horizontal-container">
          <div>
            <a href="/curriculumvitae">
              <div className="content-container bio">
                  <h3>Read my full CV</h3>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};
