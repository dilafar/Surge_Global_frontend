import axios from 'axios';

const url = 'http://localhost:5000/api/v1';


export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);
export const fetchUser = (page) => axios.get(`${url}/user?page=${page}`);
export const updateUser = (id , formdata) => axios.put(`${url}/user/${id}`,formdata);
export const updateUserStatus = (id , formdata) => axios.put(`${url}/user/status/${id}`,formdata);
export const deleteUser = (id) => axios.delete(`${url}/user/${id}`);
export const fetchSingleUser = (id) => axios.get(`${url}/user/${id}`);

export const addNotes = (formdata) => axios.post(`${url}/notes/add`,  formdata,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });
export const updateNotes = (id , formdata) => axios.put(`${url}/notes/${id}`,formdata);
export const deleteNotes = (id) => axios.delete(`${url}/notes/${id}`);
export const fetchNotes  = (page) => axios.get(`${url}/notes?page=${page}`,{
    headers:{
        Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
      }
}); 
