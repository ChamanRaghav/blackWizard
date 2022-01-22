import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedModal } from '../../store/modals';
import { setProductIdToBeDeleted } from '../../store/products';
import { deleteProduct, fetchProducts } from '../../store/products/products.apiActions';
import { selectProductIdToBeDeleted } from '../../store/products/products.getters';
import { hideSpinner, showSpinner } from '../../store/spinners';

export const DeleteProductModal = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        dispatch(setSelectedModal())
        dispatch(setProductIdToBeDeleted())
    }

    const dispatch = useDispatch()
    const productId = useSelector(selectProductIdToBeDeleted)

    const handleDelete = () => {
        dispatch(showSpinner())
        dispatch(deleteProduct(productId)).then(() => dispatch(fetchProducts()).then(() => {
            dispatch(hideSpinner())
            console.log('Waiting to make all API Calls')
            handleClose()
        }))
    }


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete product? The action is irreversible.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>DELETE</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteProductModal
