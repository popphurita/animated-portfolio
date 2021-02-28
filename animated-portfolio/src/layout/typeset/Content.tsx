import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import issues from './issues.png';
import newtypeset from './newtypeset.png';
import beforeafterone from './beforeafterone.png';
import beforeaftertwo from './beforeaftertwo.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Content: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>The former typeset was excessively large. It caused various issues with the users' experiences. Editors were often confused about where to use H1 with H2 which was against our accessibility practice. </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <Image src={issues} fluid />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>I researched and set a new typeset making the text more readable and making sure there is no unnecessary style that could be confusing for editors. </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <Image src={newtypeset} fluid />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <Image src={beforeafterone} fluid />
            <Image src={beforeaftertwo} fluid />
          </div>
        </Col>
      </Row>
    </>
  );
};
