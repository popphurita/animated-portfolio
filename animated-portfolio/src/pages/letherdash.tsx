import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/letherdash/Hero'
import { LetherdashContent } from '../layout/letherdash/LetherdashContent'
import { Content } from '../layout/content/Content';
import { Cta } from '../layout/cta/Cta';

  const LetherDash: React.FC = () => {
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
          <LetherdashContent />
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

  export default LetherDash
