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
        <Col className="horizontal-container" data-aos="fade-up">
          <h1 className="invisible">Phurita Letheren's portfolio</h1>
          <div>
            <div className="content-container hero">
              <h1>Phurita (Pop)</h1>
              <h1>Letheren</h1>
              <p>
                UX/UI Designer & a bit of front-end dev{' '}
                <span role="img" aria-label="image">
                  😉
                </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
