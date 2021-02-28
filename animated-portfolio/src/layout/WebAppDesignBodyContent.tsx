import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

export const WebAppDesignBodyContent: React.FC = () => {
  return (
    <>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <div className="content-container">
            <h3>Online Bistro</h3>
            <p>The inspirations to make a local restaurant more appealing and more straightforward to access have led me to design this simple cafe website.</p>
          </div>
        </Col>
        <Col className="horizontal-container">
          <div className="content-container">
            <h3>Trail</h3>
            <p>Fancy going out for a walk? Trail gives you all the information you need including the expected time spent, length, steepness and weather.</p>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <div className="content-container">
            <h3>CMS improvements</h3>
            <p>Having an internal CMS allow us to fine-tune it to our websites. Nevertheless, it is frequently the touchpoint which gets neglected the most. I performed qualitative research where I sat down with my interviewees in their environments to understand what the issues were. The deliverable is a wireframe. Half of the proposed solutions have been implemented.</p>
          </div>
        </Col>
        <Col className="horizontal-container">
          <div className="content-container">
            <h3>Responsiveness design</h3>
            <p>This project was handed over to me with only a static desktop version. I designed the appearance of the small and medium breakpoints.</p>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <div className="content-container">
            <h3>Floating in-page navigation</h3>
            <p>It is quite common for universities' course pages to be lengthy due to all the information that needs to be available for prospective students. Adding floating in-page navigation allow users to navigate straight to sections that most relevant to them.</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
