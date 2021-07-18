import { createSlice } from '@reduxjs/toolkit'
// import * as apiActions from './products.apiActions'

const initialState = {
    spinnerVisibility: false
}

const slice = createSlice({
    name: 'spinners',
    initialState,
    reducers: {
        toggleSpinnersVisibility(state, action) {
            state.spinnerVisibility = action.payload || initialState.spinnerVisibility
        },
        showSpinner(state) {
            console.log('state', state.spinnerVisibility)
            state.spinnerVisibility = true
        },
        hideSpinner(state) {
            state.spinnerVisibility = false
        },
    }
})

export default slice

export const { name, actions, reducer } = slice