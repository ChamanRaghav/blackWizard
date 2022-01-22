import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    spinnerVisibility: false
}

const slice = createSlice({
    name: 'spinners',
    initialState,
    reducers: {
        showSpinner(state) {
            state.spinnerVisibility = true
        },
        hideSpinner(state) {
            state.spinnerVisibility = false
        },
    }
})

export default slice

export const { name, actions, reducer } = slice