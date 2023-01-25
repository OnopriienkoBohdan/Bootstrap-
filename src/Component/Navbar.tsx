import { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formyla } from "./Form";

export function NavBar() {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        className="px-3"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>Alfa</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <div className="mt-1"></div>
              <Button variant="primary" className="" onClick={handleShow}>
                Log in
              </Button>
              <div className="mt-3 me-3"></div>
              <Button variant="primary" onClick={handleShow}>
                Sing out
              </Button>
              <div className="mb-2"></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Formyla show={show} hide={handleClose} />
    </>
  );
}
