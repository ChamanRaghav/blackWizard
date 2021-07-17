import { combineReducers } from 'redux'
import * as products from './products'

const rootReducer = combineReducers({
    [products.name]: products.reducer,
})

export default rootReducer