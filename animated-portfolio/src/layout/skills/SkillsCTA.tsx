import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './SkillsCTA.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Icon } from '@iconify/react';
import outlineAccountTree from '@iconify/icons-ic/outline-account-tree';
export const SkillsCTA: React.FC = () => {
  return (
    <>
      <Row className="skills-cta-section" xs={3} md={5}>
        <Col>
          <div className="btn">
            <Button href="/allprojects" className="btn-secondary">
              View other projects
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
