import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form, Button} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#" className='text-dark font-weight-bold'>Sound Sync Distribution</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">
              Products
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="#action4">
              Brands
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="#action5">
              Manufacturers
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Contact Us
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;