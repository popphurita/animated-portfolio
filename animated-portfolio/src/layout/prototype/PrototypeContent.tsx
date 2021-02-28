import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../canva-style.scss';


export const PrototypeContent: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>Designing a beautiful UI is more than just a static appearance but the interaction that users get when interacting with the interface is very powerful too. As a keen UX/UI designer, I love learning new tools and tricks to keep my work outstanding and interesting.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h3>Trail</h3>
            <p>Fancy going out for a walk? Trail gives you all the information you need including the expected time spent, length, steepness and weather.</p>
            <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXblAE5Ho&#x2F;view?embed">
              </iframe>
            </div>
            {/* Canva: trail */}
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXblAE5Ho&#x2F;view?utm_content=DAEXblAE5Ho&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h3>Cafe</h3>
            <p>The inspirations to make a local restaurant more appealing and more straightforward to access have led me to design this simple cafe website.</p>
            <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXbqqvUXk&#x2F;view?embed">
              </iframe>
            </div>
             {/* Canva: cafe */}
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXbqqvUXk&#x2F;view?utm_content=DAEXbqqvUXk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
          </div>
        </Col>
      </Row>
    </>
  );
};
