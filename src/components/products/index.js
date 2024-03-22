import React from 'react'
import {Button, Card, Container, Row} from 'react-bootstrap';
import img4 from "../../assets/ssdLogo.jpg";


const Products = () => {
  const cardsData = [
    {
      title: "Home Audio",
      text: "Be our business partner.",
      buttonLabel: "Audio",
      imageUrl: img4
    },
    {
      title: "Headphones",
      text: "Collaborate with us.",
      buttonLabel: "Headphones",
      imageUrl: img4
    },
    {
      title: "Wireless Audio",
      text: "Partner with us and we'll distribute your products.",
      buttonLabel: "Wireless Audio",
      imageUrl: img4
    }
  ];


    return (
      <Container >
      <Row className="mt-3">
          {cardsData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
            </Card.Text>
            <Button variant="primary">{card.buttonLabel}</Button>
          </Card.Body>
        </Card>
          ))}
      </Row>
      </Container>
  );
}

export default Products;