import { combineReducers } from 'redux'
import ubicationsReducer from './ubications/reducers'
import notificationsReducer from './notifications/reducers'
import vehiclesReducer from './vehicles/reducers'

export default combineReducers({
    ubications: ubicationsReducer,
    notifications: notificationsReducer,
    vehicles: vehiclesReducer
})
