import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Hero } from '../layout/nutririce/Hero'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { WebAppDesignBodyContent } from '../layout/WebAppDesignBodyContent'

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
          <WebAppDesignBodyContent />
        </Container>
      </Row>
    </>
    )
  }

  export default NutriRice
