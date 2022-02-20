import React from "react";
import ImageSlider from "./ImageSlider";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <ImageSlider />
      <Jumbotron fluid className="p-35">
        <h1>Welcome to <i><b>Black Wizard</b></i> world of largest range of Categories!</h1>
        <p className="text-align-center">
          We deal <span role='img' aria-label=''>🔥</span>
        </p>
        <p className="text-align-center">
          Get your premium sportswear by <b>BLACK WIZARD!</b>
        </p>
        <p className="text-align-center">
          Commited to provide quality products designed & developed specially for <b>Sport Persons.</b>
        </p>
        <p>
          <Link to={`/clothes/2`} className="text-decoration-none">
            <Button variant="outline-dark" size="lg" block>
              Checkout Categories
            </Button>
          </Link>
        </p>
      </Jumbotron>
    </>
  );
};
