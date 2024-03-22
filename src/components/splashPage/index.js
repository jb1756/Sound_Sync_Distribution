import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./index.css";
import img1 from "../../assets/Pioneer_DJ_equipment_-_angled_left_-_Expomusic_2014.jpg";
import img2 from "../../assets/3111401033_d51a24ceeb.jpg";
import img3 from "../../assets/alquiler-de-sonido-e-iluminacion-servicio-de-dj-7920-MLA5302463100_102013-F.jpg";
import img4 from "../../assets/ssdLogo.jpg";

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
      imageUrl: img4,
    },
    {
      title: "Special Offers",
      text: "Uncover exclusive deals and offers from renowned brands.",
      buttonLabel: "Expose",
      imageUrl: img4,
    },
    {
      title: "Audio Installers",
      text: "Experience seamless audio integration with our recommendation of expert labor services. ",
      buttonLabel: "Excelsior",
      imageUrl: img4,
    },
  ];

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-30" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-30" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-30" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <Row xs={1} md={4} className="g-4">
          {cardsData.map((card, index) => (
            <Col key={index}>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={card.imageUrl} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{card.text}</Card.Text>
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
