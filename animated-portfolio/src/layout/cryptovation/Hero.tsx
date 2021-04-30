
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import Container from 'react-bootstrap/Container';

import 'aos/dist/aos.css';
import '../customAos.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Hero: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Row>
      <Container>
        <Col className="horizontal-container">
          <div className="content-container-hero">
            <h1>Cryptovation</h1>
          </div>
        </Col>
      </Container>
    </Row>
  );
};
