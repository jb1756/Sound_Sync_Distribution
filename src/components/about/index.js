import React from 'react'
import { Stack } from 'react-bootstrap';

const About = () => {
  return (
    <Stack gap={10}>
      <div>
        <h1 className="text-center text-primary mb-4">ABOUT US</h1>
      </div>
        <div className="h5 text-muted bg-light mb-4 p-4" style={{ marginBottom: '10px' }} >
          <div>Our mission is to amplify creativity and enrich experiences through the distribution of high-quality
        audio proucts. We are dedicated to delivering innovative solutions that inspire and delight our customers,
        while fostering lasting partnerships with manufacturers and retailers. With a focus on excellence, 
        sustainability, and customer satisfaction, we strive to elevate the world of 
        audio technology and enhance the way people connect with sound.
          </div>
      </div>

      <div className="text-center text-primary mb-4" style={{ marginBottom: '10px' }}>
        <h1>Vision Statment</h1>
      </div>
      <div className="h4 text-muted bg-light mb-4 p-4" style={{ marginBottom: '10px' }}>
        <div>We aim to become the premier distributor for discovering,
        sharing and enjoying immersive audio experiences across all platforms
        and devices.
        </div>
      </div>

      <div className="text-center text-primary mb-4" style={{ marginBottom: '10px' }}>
        <h1>Goals</h1>
      </div>

      <div className= "h4 text-muted bg-light mb-4 p-4" style={{ marginBottom: '20px' }}>
        <ul className="list-unstyled" style={{ marginBottom: '20px' }}>
          <li>On time delivery</li>
          <li>Customer satisfaction</li>
        </ul>
      </div>
    </Stack>
  )
}

export default About;