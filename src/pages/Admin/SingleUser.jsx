import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'
import DeleteUserModel from '../../components/models/UserModels/DeleteUserModel'
import UpdateModel from '../../components/models/UserModels/UpdateModel'
import '../Profile.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "500px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SingleUser = ({user}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const DeleteUser = () =>{
   // dispatch(deleteUser(user._id));
    handleClose();
  }
  return (
    <>
    <tr >
    
    				<td onClick={handleOpen}>ID0001</td>
    				<td onClick={handleOpen}>ahamed Fadhil</td>
    				<td onClick={handleOpen}>fadhilahamed07@gmail.com</td>
    				<td onClick={handleOpen}>
                    18-05-2014
    				</td >
    				<td onClick={handleOpen}>0770567366</td>
    				<td onClick={handleOpen}>Personal Account</td>
    				<td onClick={handleOpen}><span>pending</span></td>
          
                    <td>
                    <div style={{display:"flex" }}>
        <UpdateModel/> <DeleteUserModel user={user}/>
        </div>

                    </td>
    			</tr>
          <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Box sx={style}>
   
      <div className="modal-header bg-info text-white" style={{marginBottom: '5px'}}>
                  <h5 className="modal-title text-white">User Details</h5>
                  
                  </div>
                  <div  className="tab-content pt-3">
                <div  className="tab-pane active">
                 
                    <div  className="row">
                      <div  className="col">
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>First Name</label>
                              <p>xxxxxxxxxxxxxxxxx</p>
                            </div>
                          </div>
                          <div  className="col">
                            <div  className="form-group">
                              <label>Last Name</label>
                              <p>xxxxxxxxxxxxx</p>
                            </div>
                          </div>
                        </div>
                      
                       
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Email</label>
                              <p>xxxxxxxxxxxxxxx</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Contact Number</label>
                              <p>xxxxxxxx</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Date Of Birth</label>
                              <p>xxxxxxx</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Account Type</label>
                              <p>xxxxxx</p>
                            </div>
                          </div>
                        </div>
                     
                      </div>
                    </div>
            
            </div>
          </div>
     
     
    
         
      
 
     
<br/>

     
       
        
      </Box>
    </Modal>

          </>
    		
  )
}

export default SingleUser