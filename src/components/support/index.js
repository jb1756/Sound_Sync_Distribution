import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import img5 from "../../assets/ssdLogo.jpg";

const Support = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <Card>
        <Card.Body>
          <Card.Text>
            Be our partner and contact us via email, please send your message to:
          </Card.Text>
          <a href="mailto:Soundsyncdistribution@gmail.com" className="btn btn-primary">
            Soundsyncdistribution@gmail.com
          </a>
          
        </Card.Body>
        <row><div className='mt-6 mb-4' >
        <Image src={img5} thumbnail/>
      </div></row>
      </Card>
      
      
    </Container>
  )
}

export default Support