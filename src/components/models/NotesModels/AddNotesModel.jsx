import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import { createNotes} from '../../../actions/notes';
import Modal from '@mui/material/Modal';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import {useDispatch} from 'react-redux'
import AddIcon from '@mui/icons-material/Add';

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

const AddNotesModel = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title , settitle] = useState('');
  const [description  ,setdescription] = useState('');


const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createNotes({title , description}));
         
    clear();
    handleClose();
            
};
const clear =()=>{
    settitle('');
    setdescription('');
    //style={{marginLeft: "1400px" , marginBottom: "10px"}}
  }
 
  return (
    <div>
      
      
      <Button color="primary"  variant="contained"  startIcon={<AddIcon />} onClick={handleOpen} style={{marginLeft: "1150px" , marginBottom: "10px"}}>Add Notes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        <Form   onSubmit={handleSubmit}>
        <div className="modal-header bg-info text-white">
                    <h5 className="modal-title text-white">Add Notes</h5>
                    
                        
                </div>

    <FormGroup>
    <Label for="type">
     Title
    </Label>
    <Input
      id="type"
      name="type"
      placeholder="with a placeholder"
      type="text"
      value={title}  onChange={(e)=> settitle(e.target.value)}
      style={{width: "580px"}}
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleText">
      Description
    </Label>
    <Input
      id="exampleText"
      name="address"
      type="textarea"
      value={description}  onChange={(e)=> setdescription(e.target.value)}
      style={{width: "580px"}}
    />
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

export default AddNotesModel