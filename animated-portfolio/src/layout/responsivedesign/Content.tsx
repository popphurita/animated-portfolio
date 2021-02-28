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
            <p>This project was handed over to me with only a static desktop version. I designed the appearance of the small and medium breakpoints.</p>
            <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXbypHJgc&#x2F;view?embed">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXbypHJgc&#x2F;view?utm_content=DAEXbypHJgc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
          </div>
        </Col>
      </Row>
    </>
  );
};
