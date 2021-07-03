import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Images from "../../assets/Images";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = selectedIndex => setIndex(selectedIndex);

  return (
    <Carousel
      activeIndex={index}
      interval={10000}
      onSelect={handleSelect}
      className="m-20"
    >
      <Carousel.Item>
        <img
          className="d-block w-100 mh-500"
          src={Images.bwCarousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Trusted Brand</h3>
          <p>A fastest growing Brand!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mh-500"
          src={Images.bwCarousel1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Trusted Brand</h3>
          <p>A fastest growing Brand!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mh-500"
          src={Images.bwCarousel3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Trusted Brand</h3>
          <p>A fastest growing Brand!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mh-500"
          src={Images.bwCarousel4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Trusted Brand</h3>
          <p>A fastest growing Brand!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mh-500"
          src={Images.bwCarousel5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Trusted Brand</h3>
          <p>A fastest growing Brand!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
