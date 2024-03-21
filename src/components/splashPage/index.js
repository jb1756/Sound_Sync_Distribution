import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import img1 from "../../assets/Pioneer_DJ_equipment_-_angled_left_-_Expomusic_2014.jpg";
import img2 from "../../assets/3111401033_d51a24ceeb.jpg";
import img3 from "../../assets/alquiler-de-sonido-e-iluminacion-servicio-de-dj-7920-MLA5302463100_102013-F.jpg";


const SplashPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-30" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-30" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-30" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SplashPage;
