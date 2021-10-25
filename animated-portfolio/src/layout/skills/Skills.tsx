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
      <Row className="skills-section" xs={2} md={4}>
        {/* <Col>
          <div className="skills-container">
            <div className="skills-icons">
              <Icon icon={outlineAccountTree} />
            </div>
            <p>Wireframe</p>
          </div>
        </Col> */}
        <Col>
          <div className="skills-container">
            <div className="skills-icons">
              <Icon icon={roundDevicesOther} />
            </div>
              <p>User Interface Design</p>
          </div>
        </Col>
        <Col>
          <div className="skills-container">
            <div className="skills-icons">
              <Icon icon={outlineAssignmentInd} />
            </div>
            <p>User Research</p>
          </div>
        </Col>
        <Col>
          <div className="skills-container">
            <div className="skills-icons">
              <Icon icon={baselineAnimation} />
            </div>
            <p>Interaction Design</p>
          </div>
        </Col>
        <Col>
          <div className="skills-container">
            <div className="skills-icons">
              <Icon icon={baselineDeveloperMode} />
            </div>
            <p>Front-end development</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
