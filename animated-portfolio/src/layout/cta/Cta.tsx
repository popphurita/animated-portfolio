import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Cta.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cta: React.FC = () => {
  return (
    <>
      <Row className="cta-header-section">
        <Col>
          <div className="cta-header-container">
            <h2>Interested in my work?</h2>
            <p>Feel free to reach out to me if you feel like I can be a good hand for you. Always happy to help.</p>
            <div className="btn">
              <Button href="/allproject" className="btn-secondary">
                Send an email
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
