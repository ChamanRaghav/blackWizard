import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosClientRequest from '../../http'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (userId, thunkAPI) =>
        await axiosClientRequest({
            url: '/products'
        })
)

export const saveProduct = createAsyncThunk(
    'products/saveProduct',
    async (product, thunkAPI) => {
        console.log('product in API', product)
        return await axiosClientRequest({
            url: '/products',
            httpMethod: 'post',
            data: product
        })
    }
)