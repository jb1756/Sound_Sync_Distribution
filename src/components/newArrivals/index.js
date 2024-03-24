import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";
import img4 from "../../assets/ssdLogo.jpg";

const NewArrivals = () => {
  const cardsData = [
    { 
      imageUrl: img4,
      title: "Product Arrivals",
      text: "We don't have any products...yet! Be our business partner.",
      buttonLabel: "Audio",
      to: "/newarrivals",
    },
  ];


    return (
    <Container className='mt-4' >
      <Row xs={1} md={4} className="g-4">
          {cardsData.map((card, index) => (
      <Col key={index}>
        <Card className='bg-dark' style={{ height: "100%"}}>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body className='d-flex flex-column'>
            <Card.Title className='oleoScript' style={{ color: "#dfcc89" }}>{card.title}</Card.Title>
            <Card.Text className='flex-grow-1' style={{ color: "#dfcc89" }}>
              {card.text}
            </Card.Text>
            <Link to={card.to} className="my-button"></Link>
            <Button variant="primary" className="my-button mt-auto oleoScript goldBackground text-dark">
              {card.buttonLabel}
            </Button>
          </Card.Body>
        </Card>
      </Col>
          ))}
      </Row>
    </Container>
  );
}

export default NewArrivals;