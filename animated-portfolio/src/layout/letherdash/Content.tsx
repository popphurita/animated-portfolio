import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Content: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>A React project that my husband and I worked together to track our home maintenance. It helps us track things that need to be done with the house and the pets yearly or monthly.  Colour status helps to warn us when it's getting close to the due date.</p>
            <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXb2MMuWo&#x2F;view?embed">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXb2MMuWo&#x2F;view?utm_content=DAEXb2MMuWo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
          </div>
        </Col>
      </Row>
    </>
  );
};
