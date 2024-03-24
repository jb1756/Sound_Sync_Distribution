import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Footer = () => {  
  const buttonData = [
  { id: "splashpage", label: "", to: "/" },
  { id: "products", label: "Products", to: "/products" },
  { id: "newarrivals", label: "New Arrivals", to: "/newarrivals" },
  { id: "about", label: "About", to: "/about" },
  { id: "contact", label: "Contact", to: "/contact" },
  { id: "support", label: "Support", to: "/support" },
];
return (
  <Container className="container text-warning">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {buttonData.map(button => (
          <li key={button.id} className="nav-item">
            <Link to={button.to} className="nav-link px-2 text-warning">
              {button.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center font-weight-bold">Sound Sync Distribution</p>
    </footer>
  </Container>
);
}

export default Footer;