import { combineReducers } from 'redux'
import authReducer from './auth/reducers'
import ubicationsReducer from './ubications/reducers'
import notificationsReducer from './notifications/reducers'
import vehiclesReducer from './vehicles/reducers'
import publicationsReducer from './publications/reducers'

export default combineReducers({
    auth: authReducer,
    ubications: ubicationsReducer,
    notifications: notificationsReducer,
    vehicles: vehiclesReducer,
    publications: publicationsReducer,
})
