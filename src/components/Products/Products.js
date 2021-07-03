import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { products } from "./productsStore";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <h1 className="mt-20 mb-20 text-black text-align-center font-family-monospace">
        Products
      </h1>
      <Cards products={products} />)
    </>
  );
};

const Cards = ({ products }) => {
  return (
    <>
      <Container fluid>
        <Row className="mt-20 mb-20">
          {products &&
            products.map((product, index) => (
              <Col className="mb-20" key={index}>
                <Card
                  bg="light"
                  style={{ width: "18rem" }}
                  key={product.id}
                  fluid="true"
                >
                  <Card.Img variant="top" src={product.src} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Link to={`/products/${product.id}`}>
                      <Button variant="outline-primary">
                        Check Product Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>{" "}
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
