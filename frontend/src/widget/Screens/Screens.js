import React from 'react'
import { useSelector } from "react-redux";
import { getSelectedModal } from "../../store/modals/modals.getters";
import showSelectednModal from "../../components/Modals";
import { selectProductIdToBeDeleted } from '../../store/products/products.getters';

const Screens = ({ children }) => {
    const selectedModal = useSelector(getSelectedModal)
    const produsct = useSelector(selectProductIdToBeDeleted)
    console.log('selectedModal', selectedModal, children, produsct)
    return (
        <>
            {selectedModal && showSelectednModal(selectedModal)}
            {children}
        </>
    )
}

export default Screens
