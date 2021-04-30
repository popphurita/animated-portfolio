import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Skills.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Icon } from '@iconify/react';
import outlineAccountTree from '@iconify/icons-ic/outline-account-tree';
import roundDevicesOther from '@iconify/icons-ic/round-devices-other';
import outlineAssignmentInd from '@iconify/icons-ic/outline-assignment-ind';
import baselineAnimation from '@iconify/icons-ic/baseline-animation';
import baselineDeveloperMode from '@iconify/icons-ic/baseline-developer-mode';

export const Skills: React.FC = () => {
  return (
    <>
      <Row className="skills-header-section">
        <Col>
          <div className="skills-header-container">
            <h2>Skills</h2>
          </div>
        </Col>
      </Row>
      <Row className="skills-section" xs={3} md={5}>
        <Col>
          <div className="skills-icons">
            <Icon icon={outlineAccountTree} />
          </div>
        </Col>
        <Col>
          <div className="skills-icons">
            <Icon icon={roundDevicesOther} />
          </div>
        </Col>
        <Col>
          <div className="skills-icons">
            <Icon icon={outlineAssignmentInd} />
          </div>
        </Col>
        <Col>
          <div className="skills-icons">
            <Icon icon={baselineAnimation} />
          </div>
        </Col>
        <Col>
          <div className="skills-icons">
            <Icon icon={baselineDeveloperMode} />
          </div>
        </Col>
      </Row>
    </>
  );
};
