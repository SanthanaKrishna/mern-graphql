import { combineReducers } from 'redux';
import { auth } from './authReducer';

export const rootReducers = combineReducers({
    auth,
})