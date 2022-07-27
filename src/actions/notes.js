import * as api from '../api/index';
import {CREATE_NOTES , UPDATE_NOTES , DELETE_NOTES , FETCH_ALL_NOTES} from '../constants/actionTypes';

export const createNotes = (notes) => async(dispatch) =>{
    try{
        const {data} = await api.addNotes(notes);
        console.log(data);
        dispatch({ type: CREATE_NOTES, payload: data });
        alert("Notes Added Successfull...")
        
    }catch(err){
        console.log(err);
    }
};


export const updateNotes = (id , notes) => async(dispatch) =>{
    try{
        const {data} = await api.updateNotes(id , notes);
        console.log(data);
        dispatch({ type: UPDATE_NOTES, payload: data });

    }catch(err){
        console.log(err);
    }
};


export const deleteNotes = (id) => async(dispatch) =>{
    try{
        await api.deleteNotes(id);
        dispatch({ type: DELETE_NOTES, payload: id });

    }catch(err){
        console.log(err);
    }
};


export const getNotes = (page) => async(dispatch) =>{
    try{
        const {data} = await api.fetchNotes(page);
        console.log(data);
        dispatch({ type: FETCH_ALL_NOTES , payload: data });

    }catch(err){
        console.log(err);
    }
};
