import { combineReducers } from 'redux'
import * as products from './products'
import * as spinners from './spinners'

const rootReducer = combineReducers({
    [products.name]: products.reducer,
    [spinners.name]: spinners.reducer
})

export default rootReducer