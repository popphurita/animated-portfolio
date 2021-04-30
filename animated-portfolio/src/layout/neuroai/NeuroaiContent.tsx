import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NueroaiContent.scss';

export const NeuroaiContent: React.FC = () => {
  return (
    <>
      <Row className="neuro-ai-section">
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As a solo UX/UI designer, I sat down with the client to clarify their needs and what they would like to convey to their audiences. After rounds of wireframe and discussion, we achieved a new worthwhile marketing website.</p>
          </div>
          <div className="">
            <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEdJJxLqpY&#x2F;view?embed">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEdJJxLqpY&#x2F;view?utm_content=DAEdJJxLqpY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
          </div>
        </Col>
      </Row>
    </>
  );
};
