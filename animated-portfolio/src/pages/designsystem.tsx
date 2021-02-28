import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/designsystem/Hero'
import { Content } from '../layout/designsystem/Content'


  const DesignSystem: React.FC = () => {
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

  export default DesignSystem
