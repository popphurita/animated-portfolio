import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Content: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>Since I joined the University of Bath, I got the privilege to learn how to code alongside my UX and UI job. I started with HTML, SCSS then, later on, started to learn JQuery and React. </p>
          </div>

          <div className="content-container-body">
            <p>This site was started as a part of Hacktoberfest 2020 at first. You can see activities in my <a href="https://github.com/popphurita/animated-portfolio"><strong> Animated-Portfolio Github repo</strong></a> for more detail. I later changed the style of the page and turn it into my official portfolio.</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
