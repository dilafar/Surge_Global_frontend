import React, { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { useDispatch ,useSelector } from 'react-redux';
import decode from 'jwt-decode';
import {getUser} from '../actions/user';
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import './Profile.css';
import UpdateProfileModel from "../components/models/UserModels/UpdateProfileModel";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const {user2} = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = user?.token;
    
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken.id);
      dispatch(getUser(decodedToken.id));
      console.log(user2?.data?.firstname);
     
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <div>
         <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
      <div className="container">
<div style={{display: 'flex'}}>


  <div className="col">
    <div className="row">
      <div className="col mb-3">
        <div className="card">
          <div className="card-body">
            <div classNames="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{width: '140px'}}>
                    <div className="d-flex justify-content-center align-items-center rounded" style={{height: '140px' , backgroundColor: 'rgb(233, 236, 239)'}}>
                     
                     
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div className="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{user2?.data?.firstname} {user2?.data?.lastname}</h4>
                    <p className="mb-0">@fullname.edu</p>
                    <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                    <div className="mt-2">
                     
                    </div>
                  </div>
                  <div className="text-center text-sm-right">
                    <span className="badge badge-secondary">Student</span>
                    <div className="text-muted"><small>timestamp</small></div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item"><a href="" className="active nav-link">Details</a></li>
                
              </ul>
              <div  className="tab-content pt-3">
                <div  className="tab-pane active">
                 
                    <div  className="row">
                      <div  className="col">
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>First Name</label>
                              <p>{user2?.data?.firstname}</p>
                            </div>
                          </div>
                          <div  className="col">
                            <div  className="form-group">
                              <label>Last Name</label>
                              <p>{user2?.data?.lastname}</p>
                            </div>
                          </div>
                        </div>
                      
                       
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Email</label>
                              <p>{user2?.data?.email}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Contact Number</label>
                              <p>{user2?.data?.mobile}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Date Of Birth</label>
                              <p>{user2?.data?.dateOfBirth}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Account Type</label>
                              <p>{user2?.data?.accountType}</p>
                            </div>
                          </div>
                        </div>
                     
                      </div>
                    </div>
            
            </div>
          </div>
        </div>
      </div>

      
    </div>

  </div>
  <div className="row">
                      <div className="col d-flex justify-content-end">
                        <UpdateProfileModel user={user2?.data}/>
                      </div>
                    </div>
</div>
</div>




<div className="col-12 col-md-3 mb-3">
        <div className="card mb-3">
          <div className="card-body">
            <div className="px-xl-3">
              <button className="btn btn-block btn-secondary">
                <i className="fa fa-sign-out"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="card-title font-weight-bold">Support</h6>
            <p className="card-text">Get fast, free help from our friendly assistants.</p>
            <button type="button" className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>

    
     
    </div>
    
    </div>

  )
}

export default Profile