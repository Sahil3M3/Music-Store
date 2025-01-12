import React from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return  (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container fluid>
        <Navbar.Collapse>
          <Nav className="me-auto justify-content-center w-100">
            <Nav.Link href="#home" style={{ color: "white" }}>
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              <h4>Store</h4>
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              <h4>About</h4>
            </Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end">
            <Button variant="dark" style={{ color: "white" }}>
              <h6>Cart</h6>
            </Button>
            <h6>
              <Badge bg="secondary">{0}</Badge>
            </h6>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar