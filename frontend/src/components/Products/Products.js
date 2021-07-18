import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/products/products.apiActions";
import { selectProducts } from "../../store/products/products.getters";
import ReactStars from "react-rating-stars-component";
import AddProductModal from "./AddProductModal";
import { hideSpinner, showSpinner } from '../../store/spinners';
import Spinner from "../../widget/Spinner/Spinner";
import { SPINNER_TYPES } from "../../widget/Spinner/spinner.constants";
import DeleteProductModal from "./DeleteProductModal";

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
    dispatch(showSpinner())
    dispatch(fetchProducts()).then(() => dispatch(hideSpinner()))
  }, [dispatch])

  return (
    <div className="mb-100">
      <h1 className="mt-20 mb-20 text-black text-align-center font-family-monospace">
        <AddProductModal />
        Products
      </h1>
      <Spinner spinnerType={SPINNER_TYPES.PROPAGATE_LOADER}>
        <Cards products={products} />
      </Spinner>
    </div>
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
                    <Card.Header as="h5">Featured <DeleteProductModal /></Card.Header>

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
                      <Card.Text className="mb-3i">Available In Stock: {product.available ? `Yes(${Math.floor((Math.random() * 1000))})` : 'No(0)'}</Card.Text>
                      <Card.Text className="mb-3i">For: {product.gender.toUpperCase()}</Card.Text>
                      <Card.Text className="">Category: {product.category.toUpperCase()}</Card.Text>
                      <Link to={`/products/${product._id}`}>
                        <Button variant="light" className="">
                          Check Product Details
                        </Button>
                      </Link>
                      <Link to={`/products/${product._id}`}>
                        <Button variant="primary" className="float-right">
                          Buy
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
