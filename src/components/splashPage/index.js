import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./index.css";
import img1 from "../../assets/Pioneer_DJ_equipment_-_angled_left_-_Expomusic_2014.jpg";
import img2 from "../../assets/creation.webp";
import img3 from "../../assets/creation-3.webp";
import img4 from "../../assets/creation-21.jpg";
import img5 from "../../assets/creation-31.jpg";


const SplashPage = () => {
  const cardsData = [
    {
      title: "Top Brands",
      text: "Experience luxury and sophistication with top brand collections.",
      buttonLabel: "Explore",
      imageUrl: img4,
    },
    {
      title: "Sound Advice",
      text: "Transform your events with expert sound advice tailored just for you.",
      buttonLabel: "Enhance",
      imageUrl: img5,
    },
    {
      title: "Special Offers",
      text: "Uncover exclusive deals and offers from renowned brands.",
      buttonLabel: "Expose",
      imageUrl: img4,
    },
    {
      title: "Audio Installers",
      text: "Experience seamless audio integration with our recommendation of expert labor services.",
      buttonLabel: "Excelsior",
      imageUrl: img4,
    },
  ];

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-item-content">
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption  style={{ color: 'gold' }}>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption  style={{ color: 'gold' }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption  style={{ color: 'gold' }}>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
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
                  <Card.Title style={{ color: 'gold' }}>{card.title}</Card.Title>
                  <Card.Text className="flex-grow-1" style={{ color: 'gold' }}>{card.text}</Card.Text>
                  <Button variant="primary" className="mt-auto">
                    {card.buttonLabel}
                  </Button>
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
