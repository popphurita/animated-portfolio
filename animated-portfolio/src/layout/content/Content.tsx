import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import laptopCode from '@iconify/icons-la/laptop-code';
import paintBrush from '@iconify/icons-la/paint-brush';
import usersIcon from '@iconify/icons-la/users';
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
        <Col className="horizontal-container" data-aos="fade-up-medium">
          <a href="/webAndAppDesign">
            <div>
              <div className="content-container">
                <h2>Nutri Rice</h2>
                <div className="icon">
                  <Icon icon={laptopCode} />
                </div>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container" data-aos="fade-up">
          <a href="/illustration">
            <div>
              <div className="content-container">
                <h2>Cryptovation</h2>
                <div className="icon">
                  <Icon icon={paintBrush} />
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container" data-aos="fade-up-medium">
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Typecase CMS</h2>
                <div className="icon">
                  <Icon icon={usersIcon} />
                </div>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container" data-aos="fade-up">
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Figma + Principle interaction design</h2>
                <div className="icon">
                  <Icon icon={usersIcon} />
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className="horizontal-container" data-aos="fade-up-medium">
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Dev</h2>
                <div className="icon">
                  <Icon icon={usersIcon} />
                </div>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container" data-aos="fade-up">
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Design System</h2>
                <div className="icon">
                  <Icon icon={usersIcon} />
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
};
