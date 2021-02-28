
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import laptopCode from '@iconify/icons-la/laptop-code';
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
      <Col className="horizontal-container" data-aos="fade-up-highest">
        <div className="content-container">
          <h2>NutriRice</h2>
          <div className="icon">
            <Icon icon={laptopCode} />
          </div>
        </div>
      </Col>
    </Row>
  );
};
