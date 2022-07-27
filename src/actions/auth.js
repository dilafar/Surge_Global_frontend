import * as api from '../api/index';
import {AUTH} from '../constants/actionTypes';

export const signin = (formdata , navigate) => async(dispatch)=>{
    try{
        const {data} = await api.signIn(formdata);
        console.log(data.data.result.firstname);
        dispatch({type: AUTH, data:data.data});
        if(data.data.result.firstname === "admin"){
            navigate("/user");
        }else{
            navigate("/notes");
        }
        
       // navigate("/");

    }catch(err){
        alert("Email doesn't exist...");
        console.log(err);

    }
};

export const signup = (formdata , navigate) => async(dispatch)=>{
    try{
        const {data} = await api.signUp(formdata);
        console.log(data);
        dispatch({type: AUTH, data});
        if(data){
            alert("Success...");
        }
        navigate("/");

    }catch(err){
        alert("Email Already Exist , Try With a Different Email ...");
        console.log(err);

    }
};