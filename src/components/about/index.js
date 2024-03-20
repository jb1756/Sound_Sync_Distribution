import React from 'react'
import { Stack } from 'react-bootstrap';

const About = () => {
  return (
    <Stack gap={3}>
      
        <div className="h5 text-muted bg-light mb-4 m-5 p-4 border" style={{ marginBottom: '10px' }} ><div>
        <h1 className="text-center text-primary mb-4">ABOUT US</h1>
      </div>
          <div>Our mission is to amplify creativity and enrich experiences through the distribution of high-quality
        audio products. We are dedicated to delivering innovative solutions that inspire and delight our customers,
        while fostering lasting partnerships with manufacturers and retailers. With a focus on excellence, 
        sustainability, and customer satisfaction, we strive to elevate the world of 
        audio technology and enhance the way people connect with sound.
          </div>
      </div>

      
      <div className="h4 text-muted bg-light mb-4 m-5 p-4 border" style={{ marginBottom: '10px' }}>
        <div className="text-center text-primary mb-4" style={{ marginBottom: '10px' }}>
        <h1>Vision Statment</h1>
      </div>
        <div>We aim to become the premier distributor for discovering,
        sharing and enjoying immersive audio experiences across all platforms
        and devices.
        </div>
      </div>

      

      <div className= "h4 text-muted bg-light mb-4 m-5 p-4 border" style={{ marginBottom: '20px' }}>
        <div className="text-center text-primary mb-4" style={{ marginBottom: '10px' }}>
        <h1>Goals</h1> 
        </div>
      <ul className="list-unstyled" style={{ marginBottom: '20px' }}>
          <li>Customer Satisfaction - Prioritize and understand the uniquite requirements of each client.</li>
          <li>Friendly & Reliable distributor of Audio products - We understand the importance of timely and effecient delivery process.</li>
        </ul>
      </div>

      <div className= "h4 text-muted bg-light mb-4 m-5 p-4 border" style={{ marginBottom: '20px' }}>
        <div className="text-center text-primary mb-4" style={{ marginBottom: '10px' }}>
        <h1>Services</h1> 
        </div>
      <ul className="list-unstyled" style={{ marginBottom: '20px' }}>
          <li>Logistic and Distribution: Whether it's within New Jersey or elsewhere domestically, we have the expertise and resources to
            handle all your distribution needs.
          </li>
          <li>Consulting and Support: Need guidance on optimizing your supply chain or expanding to U.S market? Our team can help. We offer personalized Consulting
            services to help you achieve your goals and overcome any challenges.
          </li>
        </ul>
      </div>
    </Stack>
  )
}

export default About;