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