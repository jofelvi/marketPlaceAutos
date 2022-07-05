import { combineReducers } from 'redux'
import ubicationsReducer from './ubications/reducers'
import notificationsReducer from './notifications/reducers'

export default combineReducers({
    ubications: ubicationsReducer,
    notifications: notificationsReducer
})
