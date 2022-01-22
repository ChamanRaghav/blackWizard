import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
    variant: 'danger'
}

const slice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotificationMessage(state, action) {
            state.message = action.payload ? action.payload.message : initialState.message
            state.variant = action.payload ? action.payload.variant : initialState.variant
        }
    }
})

export default slice

export const { name, actions, reducer } = slice
