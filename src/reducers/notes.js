import { CREATE_NOTES , UPDATE_NOTES ,DELETE_NOTES ,FETCH_ALL_NOTES} from '../constants/actionTypes';

const notesReducer = (state =  [] , action) => {
  switch (action.type) {
    case FETCH_ALL_NOTES:
        return {
          ...state,
          notes: action.payload.data,
          currentPage: action.payload.data.currentPage,
          numberOfPages: action.payload.data.numberOfPages,
         }; 
    case CREATE_NOTES:
      return [...state , action.payload];
    case UPDATE_NOTES:
      return state.map((product) => (product._id === action.payload._id ? action.payload : product));
    case DELETE_NOTES:
      return state.filter((product) => product._id !== action.payload);
    default:
      return state;
  }
};
export default notesReducer;