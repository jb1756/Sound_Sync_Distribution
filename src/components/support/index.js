import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Support = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <Card>
        <Card.Body>
          <Card.Text>
            If you prefer to contact us via email, please send your message to:
          </Card.Text>
          <a href="mailto:Soundsyncdistribution@gmail.com" className="btn btn-primary">
            Soundsyncdistribution@gmail.com
          </a>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Support