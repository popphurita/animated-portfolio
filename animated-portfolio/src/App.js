import React from 'react';
import Hero from './Hero';
import Bio from './Bio';
import WorkDeck from './WorkDeck';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Row>
      <Container>
        <Hero />
        <WorkDeck />
        <Bio />
      </Container>
    </Row>
  );
}

export default App;
