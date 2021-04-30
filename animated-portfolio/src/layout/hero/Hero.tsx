import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeroImage from './uxuiunicorn101.png';
import './Hero.scss';


export const Hero: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Container>
        <Row className="hero-header-section" xs={1} md={2}>
          <Col>
            <div className="hero-header-container">
              <h1>Phurita Letheren</h1>
              <p>Female UX UI (Unicorn) Designer</p>
            </div>
            <div className="hero-cta-container">
              <div className="btn">
                <Button href="mailto:phurita.sainonsee@gmail.com" className="btn-primary">
                  Get in touch
                </Button>
                <Button href="/allprojects" className="btn-secondary">
                  See portfolio
              </Button>
              </div>
            </div>
          </Col>
          <Col>
            <Image src={HeroImage} alt="A female character riding a unicorn" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};
