import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import software from './software.png';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Content: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As a solo UX/UI designer, I sat down with the client to clarify their needs and what they would like to convey to their audiences. After rounds of wireframe and discussion, we achieved a new worthwhile marketing website.</p>
          </div>
          <div className="content-container-body">
          <Image src={software} fluid />
          </div>
        </Col>
      </Row>
    </>
  );
};
