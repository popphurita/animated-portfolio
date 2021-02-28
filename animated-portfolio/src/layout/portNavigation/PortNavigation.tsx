import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './portNavigation.scss';

export const PortNavigation: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Back to projects</Nav.Link>
        </Nav>
        <Nav>
          {/* <Nav.Link href="/webAndAppDesign">Web & App Design</Nav.Link>
          <Nav.Link href="/illustration">Illustrations</Nav.Link>
          <Nav.Link href="/research">Research</Nav.Link> */}
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortNavigation;
