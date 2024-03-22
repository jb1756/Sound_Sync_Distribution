import React from 'react'
import {Button, Card, Container, Row} from 'react-bootstrap';
import img4 from "../../assets/ssdLogo.jpg";


const Products = () => {
  const cardsData = [
    {
      title: "Home Audio",
      text: "Be our partner.",
      buttonLabel: "Audio",
      imageUrl: img4
    },
    {
      title: "Headphones",
      text: "Be our partner.",
      buttonLabel: "Headphones",
      imageUrl: img4
    },
    {
      title: "Wireless Audio",
      text: "Be our partner.",
      buttonLabel: "Wireless Audio",
      imageUrl: img4
    }
  ];


    return (
      <Container >
      <Row className="justify-content-space-evenly">
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