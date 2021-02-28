import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Content } from '../layout/typecase/Content'
import { Hero } from '../layout/typecase/Hero'

  const Typecase: React.FC = () => {
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

  export default Typecase
