import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosClientRequest from '../../http'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { dispatch }) =>
        await axiosClientRequest({
            url: '/products',
            errorMessage: 'Unable to fetch Products, Please Try Again Later.',
            dispatch
        })
)

export const saveProduct = createAsyncThunk(
    'products/saveProduct',
    async (product, { dispatch }) => {
        return await axiosClientRequest({
            url: '/products',
            httpMethod: 'post',
            data: product,
            successMessage: 'Product Saved Successfully!',
            errorMessage: 'Unable to save product, Please Try Again Later.',
            dispatch
        })
    }
)


export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId, { dispatch }) => {
        console.log('product in deleted API', productId)
        return await axiosClientRequest({
            url: `/products/${productId}`,
            httpMethod: 'delete',
            successMessage: 'Product Deleted Successfully!',
            errorMessage: 'Unable to delete Product, Please Try Again Later.',
            dispatch
        })
    }
)