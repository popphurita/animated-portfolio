import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/nutririce/Hero'
import { NutriRiceContent } from '../layout/nutririce/NutriRiceContent'

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
    </>
    )
  }

  export default NutriRice
