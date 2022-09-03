import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css';
import cryptovation from './cryptovation.png'
import { Container } from 'react-bootstrap';

export const CryptovationContent: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="horizontal-container">
            <div className="content-container-body">
              <h2>Background</h2>
              <p>Cryptovation.co is a Fintechstart-up company with expertise in arbitraging cryptocurrencies. It is located in Bangkok, Thailand. Their business goal is to become the first Thai cryptocurrency Hedge funds. </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="horizontal-container">
            <div className="content-container-body">
              <h2>The challenges</h2>
              <p>In 2017, not everyone knows what cryptocurrency is and what the term "arbitraging" means. However, the company would like to enter the market by establishing a good trust and provide educational information for those who may not familiar with the concept. </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="horizontal-container">
            <div className="content-container-body">
              <h2>The solution</h2>
              <p>I was asked to carry out market research to find various needs from a different group of users - new entry-level, interested in trading but may not know where to start and the experienced users. We decided that for us to establish trust with all types of potential clients we need to provide a useful insight that would allow them to know how much what cryptocurrency is, how it works, what arbitraging means and how much value would they get from arbitraging.

              In conclusion, we published a marketing site that provides all the useful information regarding cryptocurrencies and arbitraging and where to start.

I also designed a UI for the investment calculation. The UI allows clients to input their investment, the backend of the calculation will pull the price data of each coin from different markets around the world and calculate how much profit they would make.</p>
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
      </Container>
    </>
  );
};
