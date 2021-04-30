import * as React from 'react';
import { Hero } from '../layout/hero/Hero';
import { Bio } from '../layout/bio/Bio';
import { Content } from '../layout/content/Content';
import { Skills } from '../layout/skills/Skills';
import { Tools } from '../layout/tools/Tools';
import { Cta } from '../layout/cta/Cta';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';

import './index.scss';
import PortNavigation from '../layout/portNavigation/PortNavigation';

const Index: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Helmet>
        <title>Pop Phurita</title>
      </Helmet>
      <Row>
        <Col>
          <PortNavigation />
        </Col>
      </Row>
      <Row className="main-content">
        <Col className="main-content">
          <Hero />
          <Content />
          <Bio />
          <Tools />
          <Skills />
          <Cta />
        </Col>
      </Row>
    </>
  );
};

export default Index;
