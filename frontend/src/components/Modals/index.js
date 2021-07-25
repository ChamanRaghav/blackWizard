import DeleteProductModal from "./DeleteProductModal";
import React from 'react'
import MODAL_ID from "../../store/modals/modals.constants";


const showSelectednModal = (modalName = '') => {
    switch (modalName) {
        case MODAL_ID.DELETE_PRODUCT:
            return <DeleteProductModal />
        default:
            break;
    }
}

export default showSelectednModal