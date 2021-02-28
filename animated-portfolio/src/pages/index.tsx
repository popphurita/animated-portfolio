import * as React from 'react';
import { Hero } from '../layout/hero/Hero';
import { Bio } from '../layout/bio/Bio';
import { Content } from '../layout/content/Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.scss';
import PortNavigation from '../layout/portNavigation/PortNavigation';

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
          <Content />
          <Bio />
        </Container>
      </Row>
    </>
  );
};

export default Index;
