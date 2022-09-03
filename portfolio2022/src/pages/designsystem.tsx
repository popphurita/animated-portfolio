import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/designsystem/Hero'
import { DesignsystemContent } from '../layout/designsystem/DesignsystemContent'
import { Content } from '../layout/content/Content';
import { Cta } from '../layout/cta/Cta';


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
          <DesignsystemContent />
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

  export default DesignSystem
