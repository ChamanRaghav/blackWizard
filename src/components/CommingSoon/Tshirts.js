import React from "react";
// import { Image, Container, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image1 from "../../assets/Images/tshirt1.jpeg";
import Image2 from "../../assets/Images/tshirt2.jpeg";
import Image3 from "../../assets/Images/tshirt3.jpeg";
import Image4 from "../../assets/Images/tshirt4.jpeg";
import Image5 from "../../assets/Images/tshirt5.jpeg";
import Image6 from "../../assets/Images/tshirt6.jpeg";
// import Background from "../../assets/Images/background.jpg";

export const Tshirts = () => {
  return (
    <div>
      <h1 className="text-align-center">
        Tshirts
        <span role="img" aria-label="">
          ✨💪
        </span>
      </h1>

      <Container>
        <img src={Image1} alt={""} className="w-100" />
        <img src={Image2} alt={""} className="w-100" />
        <img src={Image3} alt={""} className="w-100" />
        <img src={Image4} alt={""} className="w-100" />
        <img src={Image5} alt={""} className="w-100" />
        <img src={Image6} alt={""} className="w-100" />
      </Container>

      <h1 className="text-align-center">
        {" "}
        Shop Now!
        <span role="img" aria-label="">
          😊{" "}
        </span>
      </h1>
    </div>
  );
};
