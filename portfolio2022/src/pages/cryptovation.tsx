import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { CryptovationContent } from '../layout/cryptovation/CryptovationContent'
import { Hero } from '../layout/cryptovation/Hero'
import { Content } from '../layout/content/Content';
import { Cta } from '../layout/cta/Cta';

const Cryptovation: React.FC = () => {
  return (
    <>
      <Row>
        <Col>
          <PortNavigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Hero />
          <CryptovationContent />
        </Col>
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

  export default Cryptovation
