import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { products } from "./productsStore";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/products/products.apiActions";
import { selectProducts } from "../../store/products/products.getters";
import ReactStars from "react-rating-stars-component";

export const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <h1 className="mt-20 mb-20 text-black text-align-center font-family-monospace">
        <Button variant="primary" className="mr-5p float-right mt-8" size="md">Add Products</Button>
        Products
      </h1>
      <Cards products={products} />

    </>
  );
};

const Cards = ({ products }) => {
  return (
    <>
      <Container fluid>
        <Row className="mt-20 mb-20">
          {products &&
            products.map((product) => (
              <Col className="mb-20" key={product._id}>
                <Card
                  bg="light"
                  style={{ width: "18rem" }}
                  key={product._id}
                  fluid="true"
                  className="mx-auto"
                >
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description || 'Description Not Available'}</Card.Text>
                    <Card.Text>₹ {product.price || 'Price Not Available'}</Card.Text>
                    Rating: <ReactStars
                      count={5}
                      value={parseFloat(product.rating)}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                      isHalf={true}
                    />
                    <Card.Text>Available: {product.available ? 'Yes' : 'No'}</Card.Text>
                    <Card.Text>Gender: {product.gender.toUpperCase()}</Card.Text>
                    <Card.Text>Category: {product.category.toUpperCase()}</Card.Text>
                    <Link to={`/products/${product.id}`}>
                      <Button variant="outline-primary" disabled={true}>
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
