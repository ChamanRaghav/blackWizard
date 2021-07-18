import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/products/products.apiActions";
import { selectProducts } from "../../store/products/products.getters";
import ReactStars from "react-rating-stars-component";

const CARD_VARIANT = [
  'Primary',
  'Secondary',
  'Success',
  'Danger',
  'Warning',
  'Info',
  'Light',
  'Dark',
]

const getRandomCardVariant = () => CARD_VARIANT[Math.floor((Math.random() * CARD_VARIANT.length))]

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
            products.map((product) => {
              const randomVariant = getRandomCardVariant()
              return (
                <Col className="mb-20" key={product._id}>
                  <Card
                    bg={randomVariant.toLowerCase()}
                    text={randomVariant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: "18rem" }}
                    key={product._id}
                    fluid="true"
                    className="mx-auto"
                  >
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Description: {product.description || 'N/A'}</Card.Text>
                      <Card.Text className="mb-m5">Price: ₹ {product.price || 'N/A'}</Card.Text>
                      <div className="d-flex">
                        <span className="mt-2 mr-3">Rating:</span> <ReactStars
                          count={5}
                          value={parseFloat(product.rating)}
                          size={24}
                          activeColor="#ffd700"
                          edit={false}
                          isHalf={true}
                        />
                      </div>
                      <Card.Text className="mb-3i">Available: {product.available ? 'Yes' : 'No'}</Card.Text>
                      <Card.Text className="mb-3i">Gender: {product.gender.toUpperCase()}</Card.Text>
                      <Card.Text className="">Category: {product.category.toUpperCase()}</Card.Text>
                      <Link to={`/products/${product._id}`}>
                        <Button variant="outline-primary float-right" disabled={true} className="">
                          Check Product Details
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
            )}
        </Row>
      </Container>
    </>
  );
};
