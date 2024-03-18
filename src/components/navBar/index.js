import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";


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
    <nav className="plain navContainer">
      <section className="navSection">
        {buttonData.map((button) => (
          <button
            key={button.id}
            className={`main-btn ${activeButton === button.id ? "active" : ""}`}
            onClick={() => navigate(button.to)}
          >
            <h4>{button.label}</h4>
          </button>
        ))}
      </section>
    </nav>
  );
}

export default NavBar;