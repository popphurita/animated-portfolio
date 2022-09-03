import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/nutririce/Hero'
import { NutriRiceContent } from '../layout/nutririce/NutriRiceContent'
import { Content } from '../layout/content/Content';
import { Cta } from '../layout/cta/Cta';

  const NutriRice: React.FC = () => {
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
          <NutriRiceContent />
        </Container>
      </Row>
      <Row className="main-content">
        <Col className="main-content">
          <Content />
          <Cta />
        </Col>
      </Row>
    </>
    )
  }

  export default NutriRice
