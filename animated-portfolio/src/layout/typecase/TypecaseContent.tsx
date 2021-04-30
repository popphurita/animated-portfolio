import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

export const TypecaseContent: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h2>Background</h2>
            <p>At the University of Bath, we implement and maintain our content management system. This platform is used by all university staff who has got access to produce content that is relevant to students, staffs, businesses and alumni. </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h2>The challenges</h2>
            <p>When introducing new components we need to make sure we test with users to make sure all the functions are reachable as we expected. As a part of the higher education sector, we also make sure all our components are implemented with WCAG AA standard.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h2>The solution</h2>
            <p>I ran a remote usability testing session recently in April 2021 to understand how users are finding the CMS. Please, refer to the slide below for more information. Please, note that I was not allowed to show any more confidential images. </p>
            <p>I also proceed with both automatic and manual accessibility testing. I regularly use Lighthouse on Chrome to automatically test the accessibility. This tool is a good first step to check the colour contrast, aria-labels and labels issues.</p>
          </div>
          <div className="responsive-div">
            <iframe className="responsive-iframe"
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEdDkAsi4s&#x2F;view?embed">
            </iframe>
          </div>
          <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEdDkAsi4s&#x2F;view?utm_content=DAEdDkAsi4s&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
        </Col>
      </Row>
    </>
  );
};
