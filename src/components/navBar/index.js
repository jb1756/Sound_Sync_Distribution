import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Form, Button } from 'react-bootstrap';

function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const buttonData = [
    { id: "splashpage", label: "", to: "/" },
    { id: "products", label: "Products", to: "/products" },
    { id: "newarrivals", label: "New Arrivals", to: "/newarrivals" },
    { id: "about", label: "About", to: "/about" },
    { id: "contact", label: "Contact", to: "/contact" },
    { id: "support", label: "Support", to: "/support" },
  ];

  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const currentButton = buttonData.find(
      (button) => location.pathname === button.to
    );
    if (currentButton) {
      setActiveButton(currentButton.id);
    } else {
      setActiveButton("splashpage");
      navigate("/");
    }
  }, [location.pathname]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='text-dark font-weight-bold'>Sound Sync Distribution</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {buttonData.map((button) => (
              <Nav.Link
                key={button.id}
                as={Link}
                to={button.to}
                className={`nav-link ${activeButton === button.id ? "active" : ""}`}
              >
                {button.label}
              </Nav.Link>
            ))}
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
  );
}

export default NavBar;