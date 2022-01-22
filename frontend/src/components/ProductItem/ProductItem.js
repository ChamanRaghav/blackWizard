import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { products } from "../Products/productsStore";
import { useParams } from "react-router-dom";
import { ProductImages } from "./ProductImages.js";

export const ProductItem = () => {
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  return <>{product && <CardItem product={product} />} </>;
};

const CardItem = ({ product }) => {
  return (
    <>
      <h1 className="font-family-cursive text-align-center">{product.type} </h1>
      <Row className="m-20 mx-20">
        <Col lg={7}>
          <Card className="bg-dark text-white">
            <ProductImages productImages={product.images} />
            {/* <Card.Img src={product.src} alt="Card image" className=" mh-500" /> */}
            <Card.ImgOverlay>
              <Card.Title className="text-black">{product.title}</Card.Title>
              <Card.Text className="text-black">
                {product.description}
              </Card.Text>
              <a href="tel:+918920811986" className="link-to-text">
                <Card.Text className="text-black">
                  Contact Us for more details{" "}
                  <i className="fas fa-phone mr-3"></i>
                </Card.Text>{" "}
              </a>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col lg={5} className="text-align-center font-family-cursive">
          <span>
            <b>Product: </b> {product.type}
          </span>
          {product.detail.map((each, index) => (
            <React.Fragment key={index}>
              {index === 0 && <hr />}
              <span>Varient - {each.varient}</span> :{" "}
              <span>{each.price} ₹</span>
              <hr />
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </>
  );
};
