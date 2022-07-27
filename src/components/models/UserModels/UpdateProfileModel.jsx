import React,{useState,useEffect} from 'react'
import { Form ,FormGroup , Label ,Input,Card} from 'reactstrap'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch} from "react-redux";
import UpdateIcon from '@mui/icons-material/Update';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {updateUser} from '../../../actions/user'

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

const UpdateProfileModel = ({user}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstname , setfirstname] = useState('');
  const [lastname  , setlastname] = useState('');
  const [email , setemail] = useState('');
  const [dateOfBirth , setdob] = useState('');
  const [mobile , setphone] = useState(0);
  const [accountType , setaccountType] = useState('');
//firstname , lastname , email , dateOfBirth , mobile  , accountType
  useEffect(()=>{
    if({user}){
        setfirstname(user?.firstname);
        setlastname(user?.lastname);
        setemail(user?.email);
        setdob(user?.dateOfBirth);
        setphone(user?.mobile);
        setaccountType(user?.accountType);
    }
},[user]);

const handleSubmit = (e) =>{
    e.preventDefault();
    if(mobile.length > 10){
        alert("Invalied Phone Number.....(Phone Number Must Contains 10 numbers)");
    }else{
        dispatch(updateUser(user._id ,{firstname , lastname , email , dateOfBirth , mobile  , accountType}));
    }
    
         
    clear();
    handleClose();
            
};
const clear =()=>{
    setfirstname('');
    setlastname('');
    setemail('');
    setdob('');
    setphone(0);
    setaccountType('');
  
  }
  return (
    <div>
      
      
    
    <Button color="success"  variant="contained" endIcon={<UpdateIcon/>} onClick={handleOpen}>Save Changes</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Box sx={style}>
      <Form   onSubmit={handleSubmit}>
      <div className="modal-header bg-info text-white" style={{marginBottom: '5px'}}>
                  <h5 className="modal-title text-white">Update Profile</h5>
                  
                      
              </div>

              <div style={{ display: "flex" }}>
           
           <FormGroup>
           <Label for="fname">
         First Name
       </Label>
       <Input
         id="fname"
         name="firstname"
         placeholder="with a placeholder"
         type="text"
         value={firstname}  onChange={(e)=> setfirstname(e.target.value)}
         style={{width: "268px"}}
         required
       />
     </FormGroup>
     <FormGroup>
       <Label for="lname"  style={{ marginLeft: "40px"}}>
         Last Name
       </Label>
       <Input
         id="lname"
         name="lastname"
         placeholder="with a placeholder"
         type="text"
         value={lastname}  onChange={(e)=> setlastname(e.target.value)}
         style={{width: "268px" , marginLeft: "40px"}}
         required
       />
     </FormGroup>
     </div>
  
     <FormGroup>
       <Label for="exampleEmail">
         Email
       </Label>
       <Input
         id="exampleEmail"
         name="email"
         placeholder="with a placeholder"
         type="email"
         value={email}  onChange={(e)=> setemail(e.target.value)}
         style={{width :  "570px"}}
         required
       />
     </FormGroup>
   
    
                 <FormGroup>
       <Label for="exampleDate">
         Date Of Birth
       </Label>
       <Input
         id="exampleDate"
         name="dob"
         placeholder="date placeholder"
         type="date"
         value={dateOfBirth}  onChange={(e)=> setdob(e.target.value)}
         style={{width :  "570px"}}
         required
       />
     </FormGroup>
     <FormGroup>
       <Label for="price">
         Phone Number
       </Label>
       <Input
         id="phone"
         name="phone"
         placeholder="with a placeholder"
         type="Number"
         value={mobile}  onChange={(e)=> setphone(e.target.value)}
         style={{width :  "570px"}}
         required
       />
     </FormGroup>
   
     <FormGroup>
    <Label for="panel">
         Account
    </Label>
    <Input
      id="panel"
      name="panel"
      type="select"
      onChange={(e)=> setaccountType(e.target.value)}
      style={{width :  "570px"}}
      required
    >
        <option value = "Select panel">
        Select Account
      </option>
      <option value = "panel 1">
      Personel Account
      </option>
      <option value = "panel 2">
      Student Account
      </option>
     
      
    </Input>
  </FormGroup>
   
  
     
     
    
         
      
 
     <Button type="submit" color="success"  variant="contained" endIcon={<SendIcon />}>
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

export default UpdateProfileModel