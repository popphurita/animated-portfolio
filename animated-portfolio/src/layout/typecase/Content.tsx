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
            <p>At the University of Bath, we implement and maintain our own CMS called Typecase. We make sure to stay on top of the accessibility and usability by constantly auditing it.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>For accessibility testing, I proceed with both automatic and manual testing. I regularly use Lighthouse on Chrome to automatically test the accessibility. This tool is a good first step to check the colour contrast, aria-labels and labels issues.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>The next step is to manually test the site with the keyboard tab and assistive technology. I make sure the logical tab order is in place. The navigation is not trapped in any particular area. Focus highlights every link/ button as I tab through. I regularly use VoiceOver to test the page and make sure all the labels are correctly assigned and named when it reads aloud.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As a leader of the usability testing session, I wrote the usability testing plan. In the document, I make sure to include the objectives, goals, participant recruitment, testing methodology, tasks, usability metrics and problem severity. These help us prioritise recommendations base on the combination of two factors - the impact of the problem and the frequency of users experiencing the problem during the evaluation.</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
