import { createSlice } from '@reduxjs/toolkit'
import * as apiActions from './products.apiActions'

const initialState = {
    products: [],
    productsVisibility: true
}

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleProductsVisibility(state, action) {
            state.productsVisibility = action.payload || initialState.productsVisibility
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(apiActions.fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload || initialState.products
            }).addCase(apiActions.saveProduct.fulfilled, (state, action) => {
                console.log('action', action.payload)
                // state.products = action.payload || initialState.products
            })
    },
})

export default slice

export const { name, actions, reducer } = slice