import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css';
import cryptovation from './cryptovation.png'

export const CryptovationContent: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As a lead UX in this start-up company Cryptovation. co, a start-up company that arbitrage cryptocurrencies between Thailand and Singapore. The start-up company aims to be a financial services company. However, they also wanted to start by providing the background information about arbitraging and turned their marketing website into an arbitraging calculator.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>I ran quantitative research with various groups of potential customers to understand their needs. Early entry customers required to know what arbitraging means. Customers who are interested in arbitraging but not sure what to do are looking for an investment service. Experienced users want to use the calculation is that is provided.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>At the same time, I had to understand the logic, the currencies and the calculation of the arbitraging so I can translate them into a simpler UI.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <Image src={cryptovation} fluid />
          </div>
        </Col>
      </Row>
    </>
  );
};
