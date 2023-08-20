import { combineReducers } from 'redux'
import { movieBookingReducer } from './movieBooking/slice'



export const rootReducer = combineReducers({
    movieBooking: movieBookingReducer,
    
})