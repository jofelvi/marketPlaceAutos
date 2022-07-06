import { combineReducers } from 'redux'
import authReducer from './auth/reducers'
import ubicationsReducer from './ubications/reducers'
import notificationsReducer from './notifications/reducers'
import vehiclesReducer from './vehicles/reducers'

export default combineReducers({
    auth: authReducer,
    ubications: ubicationsReducer,
    notifications: notificationsReducer,
    vehicles: vehiclesReducer
})
