import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationMessage } from '../../store/notifications';
import { getNotificationMessage, getNotificationMessageVariant } from '../../store/notifications/modals.getters';
import './notification.css'

const Notification = () => {
    const message = useSelector(getNotificationMessage)
    const variant = useSelector(getNotificationMessageVariant)
    const dispatch = useDispatch()

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                dispatch(setNotificationMessage())
            }, 5000)
        }
    }, [dispatch, message])

    return (
        <div className="display-flex">
            {message && (<Alert
                variant={variant || 'danger'}
                className="my-2 mx-4 alert"
                onClose={() => dispatch(setNotificationMessage())}
                dismissible
            >{message}</Alert>)}
        </div>
    )
}

export default Notification
