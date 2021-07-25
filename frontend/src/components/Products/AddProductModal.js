import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label";
import './products.css'
import { ImagePicker } from 'react-file-picker'
import { useDispatch } from "react-redux";
import { saveProduct, fetchProducts } from '../../store/products/products.apiActions';
import Spinner from '../../widget/Spinner/Spinner';
import { hideSpinner, showSpinner } from '../../store/spinners';

const categories = [
    { label: 'T Shirt', value: 'T_SHIRTS' },
    { label: 'Shorts', value: 'SHORTS' },
    { label: 'Track Pants', value: 'TRACK_PANTS' },
    { label: 'Track Suits', value: 'TRACK_SUITS' },
    { label: 'Sando', value: 'SANDOS' },
    { label: 'Shoes', value: 'SHOES' },
    { label: 'Under Wear', value: 'UNDER_WEARS' },
    { label: 'Shokes', value: 'SHOKES' }
]


function AddProductModal() {
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
        setProduct({ ...initialProduct })
    }
    const handleShow = () => setShow(true)
    const dispatch = useDispatch()

    const initialProduct = {
        name: '',
        description: '',
        imageUrl: '', // Implement from here - https://dev.to/yosraskhiri/how-to-upload-an-image-using-mern-stack-1j95
        price: '233',
        gender: '',
        category: '',
        available: true
    }

    const [product, setProduct] = useState(initialProduct)
    const setProductFildValue = (field, value) => {
        setProduct({ ...product, [field]: value })
    }

    const isAnyFieldEmpty = () => {
        for (var key in product) {
            if (product[key] === null && product[key] === "") return true;
        }
        return false;
    }

    const handleProductSave = () => {
        if (!isAnyFieldEmpty()) {
            dispatch(showSpinner())
            dispatch(saveProduct(product)).then(() => dispatch(fetchProducts()).then(() => {
                dispatch(hideSpinner())
                handleClose()
            }))
        }
    }

    const handlePhoto = (e = '') => setProduct({ ...product, imageUrl: e })

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mr-5p float-right mt-8" size="md">Add Products</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Spinner>
                        <Form.Group
                            className='mb-15'
                            controlId='gender'
                        >
                            <Form.Label><b>Product Picture(Feature Comming Soon!): </b></Form.Label>
                            <Row>
                                <Col>
                                    <ImagePicker
                                        extensions={['jpg', 'jpeg', 'png']}
                                        dims={{ minWidth: 1, maxWidth: 5000, minHeight: 1, maxHeight: 5000 }}
                                        onChange={handlePhoto}
                                        onError={errMsg => console.log('errMsg', errMsg)}
                                    >
                                        <button
                                            className="select-file"
                                        >
                                            Click to Upload Product Image / Select File
                                        </button>
                                    </ImagePicker>
                                </Col>
                                {product.imageUrl && (
                                    <Col>
                                        <Image
                                            src={product.imageUrl}
                                            alt='Image Not Found'
                                            className='product-preview'
                                        />
                                        <i className="fas fa-times remove-icon fa-lg" onClick={() => handlePhoto()}></i>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3"
                            onChange={event => setProductFildValue('name', event.target.value)}
                        >
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingDescription"
                            label="Description"
                            className="mb-3"
                            onChange={event => setProductFildValue('description', event.target.value)}
                        >
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Price(In ₹)" className="mb-3"
                            type="number" value={234}
                            onChange={event => setProductFildValue('price', event.target.value)}
                        >
                        </FloatingLabel>
                        <Form.Group
                            className='mb-15'
                            controlId='gender'
                        >
                            <Row>
                                <Col lg={6} md={6} sm={6} className="d-flex">
                                    <Form.Label className='mt-10'>For: </Form.Label>
                                </Col>
                                <Col lg={6} md={6} sm={6} className="d-flex">
                                    <Form.Control
                                        as='select'
                                        name='gender'
                                        required
                                        defaultValue={product.gender}
                                        onChange={event => setProductFildValue('gender', event.target.value)}
                                    >
                                        <option value=''>Select Gender:</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group
                            className='mb-15'
                            controlId='category'
                        >
                            <Row>
                                <Col lg={6} md={6} sm={6} className="d-flex">
                                    <Form.Label className='mt-10'>Choose Product Categrory: </Form.Label>
                                </Col>
                                <Col lg={6} md={6} sm={6} className="d-flex">
                                    <Form.Control
                                        as='select'
                                        name='categories'
                                        required
                                        defaultValue={product.category}
                                        onChange={event => setProductFildValue('category', event.target.value)}
                                    >
                                        <option value=''>Select Categrory</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.value}>{category.label}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Spinner>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleProductSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProductModal
