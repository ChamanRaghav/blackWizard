import React from 'react'
import { useSelector } from 'react-redux'
import { selectShouldShowSpinner } from '../../store/spinners/spinners.getters'
import { Spinner as SpinnerItem } from 'react-bootstrap'
import './spinner.css'
import { PropagateLoader } from 'react-spinners'
import { SPINNER_TYPES } from './spinner.constants'

const { PROPAGATE_LOADER, REACT_BOOTSTRAP_SPINNER } = SPINNER_TYPES

// https://www.npmjs.com/package/react-spinners
// Demo: https://www.davidhu.io/react-spinners/

function Spinner({ children, spinnerType = REACT_BOOTSTRAP_SPINNER }) {
    const showSpinner = useSelector(selectShouldShowSpinner)
    return (
        <>
            {showSpinner ? (
                <>
                    {spinnerType === PROPAGATE_LOADER ? (<div className="ml-50p">
                        <PropagateLoader size={20} color="#B8E986" />
                    </div>) : (
                        < div className="ml-20p">
                            <SpinnerItem animation="grow" variant="primary" />
                            <SpinnerItem animation="grow" variant="secondary" />
                            <SpinnerItem animation="grow" variant="success" />
                            <SpinnerItem animation="grow" variant="danger" />
                            <SpinnerItem animation="grow" variant="warning" />
                            <SpinnerItem animation="grow" variant="info" />
                            <SpinnerItem animation="grow" variant="dark" />
                        </div>)}
                </>
            ) : (
                <>
                    {children}
                </>
            )
            }
        </>
    )
}

export default Spinner
