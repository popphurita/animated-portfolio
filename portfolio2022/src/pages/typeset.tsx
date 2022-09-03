import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/typeset/Hero'
import { Content } from '../layout/typeset/Content'

  const Typeset: React.FC = () => {
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
          <Content />
        </Container>
      </Row>
    </>
    )
  }

  export default Typeset
