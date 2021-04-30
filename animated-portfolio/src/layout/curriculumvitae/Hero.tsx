
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../customAos.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Hero.scss';

export const Hero: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Container>
      <Row xs={1} md={2}>
        <Col>
          <div>
            <h1>Work experience</h1>
            {/* <p>Scroll down to see some of the coolest things I have done before :) </p> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
