import {combineReducers} from 'redux';
import authReducer from './auth';
import user from './user';
import notesReducer from './notes';

export default combineReducers({
    authReducer , user , notesReducer
});