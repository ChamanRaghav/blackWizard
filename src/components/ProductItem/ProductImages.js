import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../Home/ImageSlider.css";

export const ProductImages = ({ productImages }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);
  return (
    <>
      <Carousel
        activeIndex={index}
        interval={10000}
        onSelect={handleSelect}
        className="m-10"
      >
        {productImages &&
          productImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 mh-500"
                src={image.src}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};
