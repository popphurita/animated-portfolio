import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../customAos.scss';
import './Hero.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Hero: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Row className="hero">
        <Col className="horizontal-container" data-aos="fade-up-highest">
          <h1 className="invisible">Phurita Letheren's portfolio</h1>
          <div>
            <div className="content-container hero">
              <h2>Phurita (Pop)</h2>
              <h2>Letheren</h2>
              <p>
                UX/UI Designer & a bit of front-end dev{' '}
                <span role="img" aria-label="image">
                  😉
                </span>
              </p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/pop-phurita/">Connect with me in LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:phurita.sainonsee@gmail.com">Email me</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
