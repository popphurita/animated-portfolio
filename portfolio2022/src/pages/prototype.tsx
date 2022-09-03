import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/prototype/Hero'
import { PrototypeContent } from '../layout/prototype/PrototypeContent'

  const Prototype: React.FC = () => {
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
          <PrototypeContent />
        </Container>
      </Row>
    </>
    )
  }

  export default Prototype
