import React from 'react';
import Hero from './Hero';
import Bio from './Bio';
import WorkDeck from './WorkDeck';
import PortNavigation from './PortNavigation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Row>
        <Col>
          <PortNavigation />
        </Col>
      </Row>
      <Row>
        
        <Container>
          <Hero />
          <WorkDeck />
          <Bio />
        </Container>
    </Row>
    </>
  );
}

export default App;
