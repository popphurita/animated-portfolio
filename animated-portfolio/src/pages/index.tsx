import * as React from 'react';
import { Hero } from '../layout/Hero';
import { Bio } from '../layout/Bio';
// import WorkDeck from './WorkDeck';
import PortNavigation from '../layout/PortNavigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.scss';

const Index: React.FunctionComponent<{}> = () => {
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
          {/* <WorkDeck /> */}
          <Bio />
        </Container>
      </Row>
    </>
  );
};

export default Index;
