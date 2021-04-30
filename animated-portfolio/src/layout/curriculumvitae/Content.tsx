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

import './Content.scss';
import './Hero.scss';

export const Content: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="work-content-container">
            <Image src={WorkImage} />
            <div className="work-content">
              <h2>2019 - Present </h2>
              <p>User Experience Designer   |   University of Bath, UK</p>
              <ul>
                <li>Designed new University of Bath pages and components</li>
                <li>Ran remote usability testing for in-house content management system (CMS)</li>
                <li>Improve the experience of the CMS</li>
                <li>Carried out accessibility audit both manually and automatically to make sure all components are in WCAG AA standard</li>
                <li>Discuss with the product owner, developers and users to find the right solutions</li>
                <li>Implemented responsive components, sections, pages (using HTML/SCSS)</li>
                <li>Enhanced and kept the cooperate identity consistant through out all the digital touchpoints</li>
                <li>Useed Google Analytics data for analysis</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <div className="other work-content-container">
            <Image src={OtherWorkImageShort} />
            <div className="work-content">
              <h2>2018 - April 2019</h2>
              <p>Waitress and supervisor | Thaikhun, UK (8 months - while studying MSc.)</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="other work-content-container">
            <Image src={OtherWorkImage} />
            <div className="work-content">
              <h2>Apr 2017 – Sep 2017</h2>
              <p>UX UI Designer and Consultant   |   Cryptovation.co, TH</p>
              <ul>
                <li>Conducted user research to establish critical touchpoints and barriers for customers to reach the platform</li>
                <li>Created a customer journey map</li>
                <li>Performed usability testing on the website with Invision tool</li>
                <li>Created static prototype with Sketch</li>
                <li>Design an e-commerce website for a CCTV product company</li>
                <li>Design a system to collect online data from local service providers which allows the manager to see and allocate the service provider within the customer's area. This helps decreasing the cost of travelling.</li>
                <li>Provided comments, suggestions and tools to create new creative marketing approach, which suitable for the target group.</li>
                <li>Lead the workshop discussion on how to enhance our ability to reach our goals and missions sustainable and successfully.</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="other work-content-container">
            <Image src={OtherWorkImageMedium} />
            <div className="work-content">
              <a href="https://jacobjensendesign.com/"><h2>Jun 2106 - Sep 2016</h2></a>
              <p>Product designer (Intern) | Jacob Jensen Design Studio, TH</p>
              <ul>
                <li>Developed Product Design skills through Jacob Jensen designing tools and procedures</li>
                <li>Designed an innovative family robot for a partner company in China</li>
                <li>Developed a new service and interior decoration for a café in Bangkok.</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="other work-content-container">
            <Image src={LastWorkImage} />
            <div className="work-content">
              <h2>Jul 2106 - Sep 2016</h2>
              <p>Event Art Director  |  King Mongkut's University of Technology Thonburi</p>
              <ul>
                <li>Conducted user interview to find out drawbacks from previous events</li>
                <li>Defined the character and amount of our target audiences to determine, theme, activities, procedures, decoration and layout of the event.</li>
                <li>Invited a well-known online fashion magazine, Lookbook to held Photo-shooting and Photo-editing Workshop for our staff roughly around 100 persons.</li>
                <li>Designed stages, shirts, decorations, lightings, and every digital media promotion.</li>
                <li>4,000 participants in the event.</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
