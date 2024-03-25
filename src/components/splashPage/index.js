import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import img1 from "../../assets/creation-6.webp";
import img2 from "../../assets/creation.webp";
import img3 from "../../assets/creation-5.webp";
import img4 from "../../assets/creation-22.jpg";
import img5 from "../../assets/creation-31.jpg";
import img6 from "../../assets/creation-7.webp";
import img7 from "../../assets/creation-41.jpg";
const SplashPage = () => {
  const cardsData = [
    {
      imageUrl: img4,
      title: "Top Brands",
      text: "Experience luxury and sophistication with top brand collections.",
      buttonLabel: "Explore!",
      to: "/products",
    },
    {
      imageUrl: img5,
      title: "Sound Advice",
      text: "Transform your events with expert sound advice tailored just for you.",
      buttonLabel: "Enhance!",
      to: "/contact",
    },
    {
      imageUrl: img6,
      title: "Special Offers",
      text: "Uncover exclusive deals and offers from renowned brands.",
      buttonLabel: "Expose!",
      to: "/products",
    },
    {
      imageUrl: img7,
      title: "Audio Installers",
      text: "Integrate your audio with recommended installers.",
      buttonLabel: "Excelsior!",
      to: "/support",
    },
  ];

  return (
    <div>
      <Carousel className="carousel-container">
        <Carousel.Item>
          <div className="carousel-item-content">
            <img className="d-block w-100" src={img1} alt="First slide" />
           {/*} <Carousel.Caption style={{ color: "white" }}>
              <p>The latest hardware for the hippest events</p>
  </Carousel.Caption> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <img className="d-block w-100" src={img2} alt="Second slide" />
            {/* 
            <Carousel.Caption style={{ color: "white" }}>
              <p>
                Tech for when you need to focus and block out your surroundings
              </p>
            </Carousel.Caption>            
            */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <img className="d-block w-100" src={img3} alt="Third slide" />
            {/* 
            <Carousel.Caption style={{ color: "gold" }}>
              <p>
                Let Sound Sync Distribution help you get your home audio set up!
              </p>
            </Carousel.Caption>
            */}
          </div>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <Row xs={1} md={4} className="g-4">
          {cardsData.map((card, index) => (
            <Col key={index}>
              <Card className="bg-dark" style={{ height: "100%" }}>
                <Card.Img variant="top" src={card.imageUrl} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    className="oleoScript"
                    style={{ color: "#dfcc89" }}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Text
                    className="flex-grow-1 bg-dark"
                    style={{ color: "#dfcc89" }}
                  >
                    {card.text}
                  </Card.Text>
                  <Link to={card.to} className="my-button">
                    <Button
                      variant="primary"
                      className="my-button mt-auto oleoScript goldBackground text-dark"
                    >
                      {card.buttonLabel}
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SplashPage;
