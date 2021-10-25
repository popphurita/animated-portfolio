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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
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
