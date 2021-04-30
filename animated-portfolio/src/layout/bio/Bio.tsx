import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import './Bio.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Icon } from '@iconify/react';
import menuButtonWide from '@iconify/icons-bi/menu-button-wide';
import chatSquareQuote from '@iconify/icons-bi/chat-square-quote';
import megaphoneIcon from '@iconify/icons-bi/megaphone';
import terminalIcon from '@iconify/icons-bi/terminal';

export const Bio: React.FC = () => {
  return (
    <>
      <Row className="bio-header-section">
        <Col>
          <div className="bio-header-container">
            <h2>A bit about me</h2>
          </div>
        </Col>
      </Row>
      <Row className="bio-section">
        <Col>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col lg={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link id="first" eventKey="first">
                      <Icon icon={menuButtonWide} />
                      Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Icon icon={chatSquareQuote} />
                      Research
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Icon icon={megaphoneIcon} />
                      Accessibility
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="forth">
                      <Icon icon={terminalIcon} />
                      Development
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col className="bio-content" lg={{ span: 7, offset: 1 }}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <p>I enjoy making a user-friendly website and application. I always make sure the design is functional, useful, responsive and stand out.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Digital accessibility is a legal obligation for the higher education sector, a significant part of my job is to make sure what we design is usable by the widest possible audience.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    <p>I learned coding alongside my work since 2019. It's been a continuous journey, but I am comfortable to use Git, and develop with HTML, SCSS, React and JQuery.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </>
  );
};
