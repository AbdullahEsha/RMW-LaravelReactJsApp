import React from 'react';
import './../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar} from 'react-bootstrap';

const MainNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home" style={{paddingLeft: "20px"}}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" style={{paddingRight: "20px"}}>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#deets">More details</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                      Good stuff
                  </Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};
  
export default MainNav