import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const AdminNav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/admin/index">All Item</Nav.Link>
              <Nav.Link href="/admin/upload">Upload Item</Nav.Link>
              <Nav.Link href="/admin/bookings">Bookings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNav;
