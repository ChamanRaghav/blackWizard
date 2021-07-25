import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedModal: ''
}

const slice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setSelectedModal(state, action) {
            state.selectedModal = action.payload || initialState.selectedModal
        }
    }
})

export default slice

export const { name, actions, reducer } = slice