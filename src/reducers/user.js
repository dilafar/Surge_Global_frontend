import {FETCH_ALL_USER , UPDATE_USER ,DELETE_USER , FETCH_USER} from '../constants/actionTypes';

export default (state = [] , action)=>{

    switch(action.type){
        case FETCH_ALL_USER :
            return {
                ...state,
                users: action.payload.data,
                currentPage: action.payload.data.currentPage,
                numberOfPages: action.payload.data.numberOfPages,
               };
        case FETCH_USER :
                return {
                    ...state,
                    user2: action.payload.user,
                };
        case UPDATE_USER   :
            return state.map((user)=>(user._id === action.payload._id ? action.payload : user));
        case DELETE_USER   :
            return state.filter((user)=> user._id !== action.payload);
        default:
            return state;
    }

}