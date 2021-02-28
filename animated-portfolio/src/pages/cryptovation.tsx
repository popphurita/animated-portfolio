import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { CryptovationContent } from '../layout/cryptovation/CryptovationContent'
import { Hero } from '../layout/cryptovation/Hero'

  const Cryptovation: React.FC = () => {
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
          <CryptovationContent />
        </Container>
      </Row>
    </>
    )
  }

  export default Cryptovation
