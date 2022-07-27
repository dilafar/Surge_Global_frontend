import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
//import {updatePanel} from '../../../actions/panel';
import Modal from '@mui/material/Modal';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import {useDispatch} from 'react-redux'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '650px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateModel = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [status , setStatus] = useState('');
  //const [type  ,setpaneltype] = useState('');


 // useEffect(()=>{
   // if({paneldata}){
    //    setpanel(paneldata.panel);
    //    setpaneltype(paneldata.type);
       
  //  }
//},[paneldata]);

const handleSubmit = (e) =>{
    e.preventDefault();

    //dispatch(updatePanel(paneldata._id ,{panel ,type}));
         
    clear();
    handleClose();
            
};
const clear =()=>{
    //setStatus('pending');
    //
  }
 
  return (
    <div>
      
      
    <UpdateIcon onClick={handleOpen}/>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Box sx={style}>
      <Form   onSubmit={handleSubmit}>
      <div className="modal-header bg-info text-white">
                  <h5 className="modal-title text-white">Update Notes</h5>
                  
                      
              </div>


               
       <FormGroup>
    <Label for="categories">
      state
    </Label>
    <Input
      id="categories"
      name="status"
      type="select"
      onChange={(e)=> setStatus(e.target.value)}
      
    >
        <option value = "Select State">
        Select State
      </option>
      <option value = "pending">
        pending
      </option>
      <option value = "Rejected">
        Rejected
      </option>
      <option value = "Approved">
        Approved
      </option>
      
    </Input>
  </FormGroup>


<Button variant="contained" type="submit" >
  Submit
</Button>
<Button onClick={handleClose} variant="contained" style={{marginLeft: "10px"}}>Cancel</Button>
<br/>

     </Form>
       
        
      </Box>
    </Modal>
  </div>
  )
}

export default UpdateModel