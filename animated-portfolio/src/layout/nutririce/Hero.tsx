
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';

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
      <Col className="horizontal-container">
        <div className="content-container-hero">
          <h2>NutriRice</h2>
        </div>
      </Col>
    </Row>
  );
};
