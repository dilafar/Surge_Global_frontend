import * as api from '../api/index';
import {UPDATE_USER , DELETE_USER , FETCH_ALL_USER , FETCH_USER} from '../constants/actionTypes';

export const getAllUsers = (page) => async(dispatch)=>{
    try{
        const {data} = await api.fetchUser(page);
        console.log(data);
        dispatch({ type: FETCH_ALL_USER , payload: data });

    }catch(err){
        console.log(err);
    }
};

export const updateUser = (id , user) => async(dispatch)=>{
    try{
        const {data} = await api.updateUser(id , user);
        console.log(data);
        dispatch({ type: UPDATE_USER , payload: data });
        alert("Update successfull...");
    }catch(err){
        console.log(err);
    }
};

export const deleteUser = (id) => async(dispatch)=>{
    try{
        const {data} = await api.deleteUser(id);
        console.log(data);
        dispatch({ type: DELETE_USER , payload: id });

    }catch(err){
        console.log(err);
    }
};

export const getUser = (id) => async(dispatch)=>{
    try{
        const { data } = await api.fetchSingleUser(id);
        console.log(data);
        dispatch({ type: FETCH_USER, payload:{ user: data } });

    }catch(err){
        console.log(err);
    }
}

export const updateUserStatus = (id , user) => async(dispatch)=>{
    try{
        const {data} = await api.updateUserStatus(id , user);
        console.log(data);
        dispatch({ type: UPDATE_USER , payload: data });
        alert("Update successfull...");
    }catch(err){
        console.log(err);
    }
};