import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { TypecaseContent } from '../layout/typecase/TypecaseContent'
import { Hero } from '../layout/typecase/Hero'
import { Content } from '../layout/content/Content';
import { Cta } from '../layout/cta/Cta';

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
          <TypecaseContent />
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

  export default Typecase
