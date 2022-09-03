import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/neuroai/Hero'
import { NeuroaiContent } from '../layout/neuroai/NeuroaiContent'
import { Content } from '../layout/content/Content';
import { Cta } from '../layout/cta/Cta';


  const NueroAi: React.FC = () => {
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
          <NeuroaiContent />
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

  export default NueroAi
