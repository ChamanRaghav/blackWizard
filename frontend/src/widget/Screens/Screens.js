import React from 'react'
import { useSelector } from "react-redux";
import { getSelectedModal } from "../../store/modals/modals.getters";
import showSelectednModal from "../../components/Modals";

const Screens = ({ children }) => {
    const selectedModal = useSelector(getSelectedModal)
    return (
        <>
            {selectedModal && showSelectednModal(selectedModal)}
            {children}
        </>
    )
}

export default Screens
