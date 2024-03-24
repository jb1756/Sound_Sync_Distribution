import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import img5 from "../../assets/ssdLogo.jpg";

const Support = () => {
  return (
    <Container className='mt-4'>
      <h1 className='flext-grow-1 bd-dark oleoScript'
      style={{ color: "#dfcc89"}}>Contact Us</h1>
      <Card className='bg-dark' style= {{ height: "100%"}}>
        <Card.Body>
          <Card.Text className="flex-grow-1 bg-dark"
                    style={{ color: "#dfcc89" }}> 
            Be our partner and contact us via email, please send your message to:
          </Card.Text>
          <a href="mailto:Soundsyncdistribution@gmail.com" className="btn btn-primary mt-auto oleoScript goldBackground text-dark">
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