import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Tools.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import webflowIcon from '@iconify/icons-simple-icons/webflow';
import figmaIcon from '@iconify/icons-simple-icons/figma';;
import adobexdIcon from '@iconify/icons-simple-icons/adobexd';
import sketchIcon from '@iconify/icons-simple-icons/sketch';
import visualstudiocodeIcon from '@iconify/icons-simple-icons/visualstudiocode';

export const Tools: React.FC = () => {
  return (
    <>
      <Row className="tools-header-section">
        <Col>
          <div className="tools-header-container">
            <h2>Tools</h2>
          </div>
        </Col>
      </Row>

      <Row className="tools-section" xs={3} md={5}>
        <Col>
          <div className="tools-icons">
            <Icon icon={figmaIcon} />
          </div>
        </Col>
        <Col>
          <div className="tools-icons">
            <Icon icon={webflowIcon} />
          </div>
        </Col>
        <Col>
          <div className="tools-icons">
            <Icon icon={sketchIcon} />
          </div>
        </Col>
        <Col>
          <div className="tools-icons">
            <Icon icon={visualstudiocodeIcon} />
          </div>
        </Col>
        <Col>
          <div className="tools-icons">
            <Icon icon={adobexdIcon} />
          </div>
        </Col>
      </Row>

    </>
  );
};
