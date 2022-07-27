import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './Users.css';
import '../Student/Notes.css';
import SingleUser from './SingleUser';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import UsersPagination from '../../components/paginations/UsersPagination';
import { lightGreen } from '@mui/material/colors';


function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Users = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1 ;
    const {users} = useSelector((state) => state.user);
  return (
    <>
     <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>

        <div className="row" style={{width: '500px', marginLeft: '1300px' }} >
            <div className="col-12 grid-margin">
              
                  <form action="#">
                    <div className="form-group d-flex search-field">
                      <input type="text" className="form-control" placeholder="Search Here" />
                      <button type="submit" className="btn btn-primary ml-3">Search</button>
                    </div>
                  </form>
                
            </div>
          </div>
   
    <div className="container bootstrap snippets bootdey">
    <div className="table-responsive">
    	
    	<table className="table colored-header datatable project-list">
    		<thead>
    			<tr>
    				<th>ID</th>
    				<th>fullName</th>
    				<th>Email</th>
    				<th>DateOfBirth</th>
    				<th>mobile</th>
    				<th>accountType</th>
    				<th>Status</th>
                    <th>Actions</th>
    			</tr>
    		</thead>
    		<tbody>
    { users?.data?.map((user)=>(
    			<SingleUser key={user._id}  user={user}/>
    			
    			))}
    			
    				
    				
    		</tbody>
    	</table>
    
    </div>
</div>
<div style={{marginLeft: '480px'}}>
<UsersPagination  page={page}/>
</div>
</>
  )
}

export default Users