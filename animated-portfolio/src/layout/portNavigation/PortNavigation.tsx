import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './portNavigation.scss';

export const PortNavigation: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar-dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Pop Phurita</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/curriculumvitae">CV</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/pop-phurita/">LinkedIn</Nav.Link>
          <Nav.Link href="mailto:phurita.sainonsee@gmail.com">Email</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortNavigation;
