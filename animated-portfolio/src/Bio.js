import * as React from 'react';
import './Bio.css';
import './structural-styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function Bio() {
  return (
    <Row className="Bio">
      <Col className="horizontal-container">
        <div className="cream">
          <a href="/">
            <div className="content-container">
              <h2>Bio</h2>
              <p>Read what I have discovered since I started this journey</p>
            </div>
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default Bio;
