import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortNavigation from '../layout/portNavigation/PortNavigation'
import { Hero } from '../layout/curriculumvitae/Hero'
import { Content } from '../layout/curriculumvitae/Content'
import { EducationContent } from '../layout/curriculumvitae/EducationContent'
import { Tools } from '../layout/tools/Tools'
import { Skills } from '../layout/skills/Skills'
import { Cta } from '../layout/cta/Cta'

import '../layout/curriculumvitae/Content.scss';

  const CurriculumVitae: React.FC = () => {
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
        </Container>
      </Row>
      <Row>
        <Container>
          <Content />
        </Container>
      </Row>
      <Row className="education-section">
        <Container>
          <EducationContent />
        </Container>
      </Row>
      <Row className="main-content">
        <Col className="main-content">

          <Tools />
          <Skills />
          <Cta />
          </Col>
      </Row>
    </>
    )
  }

  export default CurriculumVitae
