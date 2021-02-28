import * as React from 'react';
import { Hero } from '../layout/hero/Hero';
import { Bio } from '../layout/bio/Bio';
import { Content } from '../layout/content/Content';
// import WorkDeck from './WorkDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './index.scss';

const Index: React.FunctionComponent<{}> = () => {
  return (
    <Row>
      <Container>
        <Hero />
        {/* <WorkDeck /> */}
        <Content />
        <Bio />
      </Container>
    </Row>
  );
};

export default Index;
