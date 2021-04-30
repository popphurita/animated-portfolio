import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';
import WorkImage from './first-work.png';
import OtherWorkImage from './other-work.png';
import OtherWorkImageShort from './other-work-short.png';
import OtherWorkImageMedium from './other-work-medium.png';
import LastWorkImage from './last-work.png';

import EducationImage from './first-education.png';

import './EducationContent.scss';
import './Content.scss';
import './Hero.scss';

export const EducationContent: React.FC = () => {
  return (
    <>
      <Row className="work-header-section">
        <Col className="horizontal-container">
          <div>
            <h1>Education</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="work-content-container">
            <Image src={EducationImage} />
            <div className="work-content">
              <h2>University of Bath, UK</h2>
              <p className="sub-header">M.Sc. Innovation and Technology Management (Merit) 2017 – 2018</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="other work-content-container">
            <Image src={OtherWorkImageShort} />
            <div className="work-content">
              <h2>University of Connecticut, USA</h2>
              <p className="sub-header">Social Enterprise short course sponsored by USA Embassy March 2017 - April 2017</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="other work-content-container">
            <Image src={OtherWorkImageShort} />
            <div className="work-content">
              <h2>King Mongkut's University of Technology Thonburi, TH</h2>
              <p className="sub-header">B.F.A. Industrial and Product Design (Honor) 2013 – 2016</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="other work-content-container">
            <Image src={LastWorkImage} />
            <div className="work-content">
              <h2>Yerington High School, USA</h2>
              <p className="sub-header">Exhange year sponsored by IES program 2011 – 2012</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
