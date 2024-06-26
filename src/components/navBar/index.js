import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import "./index.css";

function NavBar(props) {

  // react hooks for navigating and locating pages.
  const navigate = useNavigate();
  const location = useLocation();

  // nav button data
  const buttonData = [
    { id: "splashpage", label: "Showroom", to: "/" },
    { id: "products", label: "Products", to: "/products" },
    { id: "newarrivals", label: "New Arrivals", to: "/newarrivals" },
    { id: "about", label: "About", to: "/about" },
    { id: "contact", label: "Contact", to: "/contact" },
    { id: "support", label: "Support", to: "/support" },
  ];

  //
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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='goldtext font-weight-bold'>Sound Sync Distribution<sub>est 2024</sub></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="border-top m-auto my-2 my-lg-0"
            style={{ maxHeight: '1000px' }}
            navbarScroll
          >
            {buttonData.map((button) => (
              <Nav.Link
                key={button.id}
                as={Link}
                to={button.to}
                className={`bronzenavtext nav-link px-5 ${activeButton === button.id ? "active" : ""}`}
              >
                {button.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default NavBar;