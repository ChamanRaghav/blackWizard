import { createSlice } from '@reduxjs/toolkit'
import * as apiActions from './products.apiActions'

const initialState = {
    products: [],
    productsVisibility: true,
    productIdToBeDeleted: ''
}

const slice = createSlice({
    name: 'productsStore',
    initialState,
    reducers: {
        toggleProductsVisibility(state, action) {
            state.productsVisibility = action.payload || initialState.productsVisibility
        },
        setProductIdToBeDeleted(state, action) {
            state.productIdToBeDeleted = action.payload || initialState.productIdToBeDeleted
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(apiActions.fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload || initialState.products
            }).addCase(apiActions.saveProduct.fulfilled, (state, action) => {
                console.log('action', action.payload)
            }).addCase(apiActions.deleteProduct.fulfilled, (state, action) => {
                console.log('action product deleted', action.payload)
                // state.
            })
    },
})

export default slice

export const { name, actions, reducer } = slice