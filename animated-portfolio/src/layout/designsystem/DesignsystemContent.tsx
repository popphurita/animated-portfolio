import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import userneeds from './userneeds.png'
import wireframe from './wireframe.png'

import 'bootstrap/dist/css/bootstrap.min.css';

export const DesignsystemContent: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As we would like our digital branding to be more consistent, we have decided that we need to create a design system that holds all the necessary information regarding our styling.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>However, we also want to make sure we can use the tool in the future too. As a result, we decided to investigate how to implement it in-house with our existing publisher. We also know there will be many stakeholders and a group of audience, therefore, we spent some time looking into their specific needs and pain point with the existing design library.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <Image src={userneeds} fluid />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As a result, of the discovery, we have agreed upon a new implementation with the following wireframes.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <Image src={wireframe} fluid />
          </div>
        </Col>
      </Row>
    </>
  );
};
