import React from "react";
import { Stack } from "react-bootstrap";

const About = () => {
  return (
    <Stack gap={3}>

      <div
        className="h4 text-muted bg-dark mb-4 m-5 p-4"
        style={{ marginBottom: "20px" }}
      >
        <div
          className="text-center  mb-4 oleoScript"
          style={{ marginBottom: "10px", color: "#dfcc89" }}
        >
          <h1>Services</h1>
        </div>
        <ul
          className="list-unstyled bronzenavtext"
          style={{ marginBottom: "20px", color: "#dfcc89" }}
        >
          <li>Sales. Marketing. Fulfillment.</li>
          <br/>
          <li>
            Let's groove together in the world of audio distribution, where
            satisfaction isn't just a goal; it's our anthem. With us, it's all
            about the beat of efficiency and the melody of reliability.
          </li>
        </ul>
      </div>


      <div
        className="h5 text-muted bg-dark mb-4 m-5 p-4"
        style={{ marginBottom: "10px" }}
      >
        <div>
          <h1
            className="text-center mb-4 oleoScript"
            style={{ color: "#dfcc89" }}
          >
            ABOUT US
          </h1>
        </div>
        <div className ="bronzenavtext" style={{ marginBottom: "20px", color: "#dfcc89" }}>
          Our mission is to amplify creativity and enrich experiences through
          the distribution of high-quality audio products. We are dedicated to
          delivering innovative solutions that inspire and delight our
          customers, while fostering lasting partnerships with manufacturers and
          retailers. With a focus on excellence, sustainability, and customer
          satisfaction, we strive to elevate the world of audio technology and
          enhance the way people connect with sound.
        </div>
      </div>

    </Stack>
  );
};

export default About;
