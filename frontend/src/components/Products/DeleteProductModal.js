import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export const DeleteProductModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow} className="float-right">
                <i class="fas fa-trash-alt"></i>
            </Button>

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
                    <Button variant="primary">DELETE</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteProductModal
