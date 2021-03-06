import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AOS from 'aos';

import './Content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Icon } from '@iconify/react';
import cashStack from '@iconify/icons-bi/cash-stack';
import shopIcon from '@iconify/icons-bi/shop';
import cardHeading from '@iconify/icons-bi/card-heading';
import calendar4Range from '@iconify/icons-bi/calendar4-range';
import cpuIcon from '@iconify/icons-bi/cpu';
import paletteIcon from '@iconify/icons-bi/palette';

export const Content: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Row className="project-header-section">
        <Col>
          <div className="project-header-container">
            <h2>Design and implement website and application</h2>
            <p>Delivering a wide range of projects from a single page marketing site to a e-commerce online shop.</p>
          </div>
        </Col>
      </Row>
      <Row className="project-section" xs={1} lg={3}>
        <Col >
          <a href="/cryptovation">
            <div className="project-card">
              <div className="card-content">
                <h3>Cryptovation</h3>
                <Icon icon={cashStack} />

              </div>
            </div>
          </a>

        </Col>
        <Col>
          <a href="/nutririce">
            <div className="project-card">
              <div className="card-content">
                <h3>Nutri Rice</h3>
                <Icon icon={shopIcon} />

              </div>
            </div>
          </a>
        </Col>
        <Col>
          <a href="/typecase">
            <div className="project-card">
              <div className="card-content">
                <h3>Typecase CMS</h3>
                <Icon icon={cardHeading} />
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row className="project-section" xs={1} md={3}>
        <Col>
          <a href="/letherdash">
            <div className="project-card">
              <div className="card-content">
                <h3>House jobs management</h3>
                <Icon icon={calendar4Range} />
              </div>
            </div>
          </a>
        </Col>
        <Col>
          <a href="/nueroai">
            <div className="project-card">
              <div className="card-content">
                <h3>Nuero AI</h3>
                <Icon icon={cpuIcon} />
              </div>
            </div>
          </a>

        </Col>
        <Col>
          <a href="/designsystem">
            <div className="project-card">
              <div className="card-content">
                <h3>Design System</h3>
                <Icon icon={paletteIcon} />
              </div>
            </div>
          </a>
        </Col>
      </Row>

      {/* <Row xs={1} md={2}>
        <Col>
          <a href="/nueroai">
            <div className="project-card">
              <h3>Nuero AI</h3>
            </div>
          </a>
        </Col>
        <Col>
          <a href="/responsivedesign">
            <div>
              <div className="project-card">
                <h3>Responsive Design</h3>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>
          <a href="/typeset">
            <div>
              <div className="project-card">
                <h3>Rota management</h3>
              </div>
            </div>
          </a>
        </Col>
        <Col>
          <a href="/otherprojects">
            <div>
              <div className="project-card">
                <h3>Other Projects</h3>
              </div>
            </div>
          </a>
        </Col>
      </Row> */}
      {/* <a href="/prototype">
            <div className="project-card">
              <div className="card-content">
                <h3>Figma Principle interaction design</h3>
                <Icon icon={cashStack} />
              </div>
            </div>
          </a> */}
      {/* <a href="/letherdash">
            <div className="project-card">
              <div className="card-content">
                <h3>LetherDash</h3>
                <Icon icon={cpuIcon} />
              </div>
            </div>
          </a> */}

    </>
  );
};
