import { combineReducers } from 'redux'
import * as products from './products'
import * as spinners from './spinners'
import * as modals from './modals'
import * as notifications from './notifications'

const rootReducer = combineReducers({
    [products.name]: products.reducer,
    [spinners.name]: spinners.reducer,
    [modals.name]: modals.reducer,
    [notifications.name]: notifications.reducer
})

export default rootReducer