import * as React from 'react';
import './Hero.css';
import './structural-styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Icon } from '@iconify/react';
import laptopCode from '@iconify/icons-la/laptop-code';
import paintBrush from '@iconify/icons-la/paint-brush';
import usersIcon from '@iconify/icons-la/users';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom-aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    })
  },[])

  return (
    <>
      <Row className="hero">
        <Col className="horizontal-container" data-aos='fade-up-highest'>
          <h1 className="invisible">Phurita Letheren's portfolio</h1>
          <div>
            <div className="content-container hero">
              <h2>Phurita (Pop)</h2>
              <h2>Letheren</h2>
              <p>UX/UI Designer & a bit of front-end dev <span role="img" aria-label="image" alt="winking emoji">😉</span></p>
              <ul>
                <li><a href="https://www.linkedin.com/in/pop-phurita/">Connect with me in LinkedIn</a></li>
                <li><a href="mailto:phurita.sainonsee@gmail.com">Email me</a></li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container" data-aos='fade-up-medium'>
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Web & App design</h2>
                <div className="icon">
                  <Icon icon={laptopCode} />
                </div>
              </div>
            </div>
          </a>
        </Col>
        <Col className="horizontal-container" data-aos='fade-up'>
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Illustrations</h2>
                <div className="icon">
                  <Icon icon={paintBrush} />
                </div>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container" data-aos='fade-up-medium'>
          <a href="/">
            <div>
              <div className="content-container">
                <h2>Research</h2>
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
}

export default Hero;
