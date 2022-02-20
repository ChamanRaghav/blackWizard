import React from "react";
import { Container } from "react-bootstrap";
import Image1 from "../../assets/Images/track_pant1.jpeg";
import Image2 from "../../assets/Images/track_pant2.jpeg";
import Image3 from "../../assets/Images/track_pant3.jpeg";

export const TrackPants = () => {
  return (
    <div>
      <h1 className="text-align-center">
        Shorts
        <span role="img" aria-label="">
          ✨💪
        </span>
      </h1>

      <Container>
        <img src={Image1} alt={""} className="w-100" />
        <img src={Image2} alt={""} className="w-100" />
        <img src={Image3} alt={""} className="w-100" />
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
