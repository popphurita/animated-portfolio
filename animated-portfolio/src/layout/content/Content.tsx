import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../customAos.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Content: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <a href="/prototype">
            <div>
              <div className="content-container">
                <h2>Figma + Principle interaction design</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/designsystem">
            <div>
              <div className="content-container">
                <h2>Design System</h2>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <a href="/nutririce">
            <div>
              <div className="content-container">
                <h2>Nutri Rice</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/cryptovation">
            <div>
              <div className="content-container">
                <h2>Cryptovation</h2>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <a href="/letherdash">
            <div>
              <div className="content-container">
                <h2>LetherDash</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/typecase">
            <div>
              <div className="content-container">
                <h2>Typecase CMS</h2>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <a href="/nueroai">
            <div>
              <div className="content-container">
                <h2>Nuero AI</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/responsivedesign">
            <div>
              <div className="content-container">
                <h2>Responsive Design</h2>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container">
          <a href="/typeset">
            <div>
              <div className="content-container">
                <h2>Responsive typography setting</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container">
          <a href="/otherprojects">
            <div>
              <div className="content-container">
                <h2>Other Projects</h2>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
};
