import React from 'react'
import { Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid>
      <h1 stlye={{ textAlign: 'center', marginBottom: '20px' }}>ABOUT US</h1>
      <Row style={{ marginBottom: '20px' }}>
        Our mission is to amplify creativity and enrich experiences through the distribution of high-quality
        audio proucts. We are dedicated to delivering innovative solutions that inspire and delight our customers,
        while fostering lasting partnerships with manufacturers and retailers. With a focus on excellence, 
        sustainability, and customer satisfaction, we strive to elevate the world of 
        audio technology and enhance the way people connect with sound.
      </Row>
      <h2 style={{ marginBottom: '10px' }}>Vision Statment</h2>
      <Row style={{ marginBottom '20px' }}>We aim to become the premier distributor for discovering,
        sharing and enjoying immersive audio experiences across all platforms
        and devices.
      </Row>
      <h2 style={{ marginBottom: '10px' }}>Goals</h2>
      <Row style={{ marginBottom: '20px' }}>
        <ul style={{ paddingLeft: '20px' }}>
          <li>- On time delivery</li>
          <li>- Customer satisfaction</li>
        </ul>
      </Row>
    </Container>
  )
}

export default About;