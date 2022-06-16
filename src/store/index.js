import { combineReducers } from 'redux'
import sharedReducer, * as fromCart from './shared/reducer'

export default combineReducers({
    shared: sharedReducer,
})
