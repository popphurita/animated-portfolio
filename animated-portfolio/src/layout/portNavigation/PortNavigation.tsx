import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './portNavigation.scss';

import { Icon, InlineIcon } from '@iconify/react';
import bxMenuAltLeft from '@iconify/icons-bx/bx-menu-alt-left';
import bxHomeAlt from '@iconify/icons-bx/bx-home-alt';

export const PortNavigation: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="port-navigation-section navbar-light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"><Icon icon={bxHomeAlt} /></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/curriculumvitae">Curriculum Vitae</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/pop-phurita/">
            <div className="btn">
              <Button className="btn-secondary">
                See portfolio
            </Button>
            </div>
          </Nav.Link>
          <Nav.Link href="mailto:phurita.sainonsee@gmail.com">
            <div className="btn">
              <Button className="btn-primary">
                Get in touch
              </Button>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortNavigation;
