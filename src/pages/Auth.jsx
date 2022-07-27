import React,{useState} from 'react'
import { Form ,FormGroup , Label ,Input,Card} from 'reactstrap'
import Navbar from '../components/navbar/Navbar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {signin , signup} from '../actions/auth';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import sideimage from '../assets/12345.jpg';
//import farm from '../components/images/Farming.png';
//firstname , lastname , email , dateOfBirth , mobile , status ,password , confirmpassword , accountType

const Auth = () => {
  const [isSignup , setIsSignup] = useState(false);
  const [firstname , setfirstname] = useState('');
  const [lastname  , setlastname] = useState('');
  const [email , setemail] = useState('');
  const [dateOfBirth , setdob] = useState('');
  const [mobile , setphone] = useState(0);
  const [password , setpassword] = useState('');
  const [confirmpassword , setconfirmpassword] = useState('');
  const [accountType , setaccountType] = useState('');
  const [status , setStatus] = useState(false);
 
  const [ph , setph] = useState(false);
  const [em , setem] = useState(false);
  
  const [panel , setpanel] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
   
    setIsSignup((prevIsSignup) => !prevIsSignup);
   
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(isSignup){
              if(password !== confirmpassword){
                  alert("Password Miss Match");
            
              }else if(mobile.length > 10){
                alert("Invalied Phone Number.....(Phone Number Must Contains 10 numbers)");
                
              }else{
                dispatch(signup({firstname , lastname , email , dateOfBirth , mobile,status  ,password , confirmpassword , accountType},navigate));
                clear();
              }

              
    }else{
             dispatch(signin({email , password} , navigate));
             clear();
    }
    console.log({email , password});

    
  
};

  const clear = ()=>{
    setfirstname('');
    setlastname('');
    setemail('');
    setdob('');
    setpassword('');
    setconfirmpassword('');
    setphone(0);
    setaccountType('');
    setem(false);
    setph(false);
  }
  return (
    <div style={{backgroundImage : `url(${sideimage})` , backgroundSize: 'cover' , paddingBottom : '400px'}}>
      <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
        <Card style={{ margin: "100px 500px 40px 500px"}}>
          
        <Form onSubmit={handleSubmit}>
          <div style={{ marginLeft: "300px" , marginTop: "50px" , marginBottom: "100px"}}>
          <h2 style={{ margin: "30px 0px 30px 300px" , }}>{isSignup ? "Register" : "Login"}</h2>
          {isSignup && (
              <>
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
      style={{width: "330px"}}
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
      style={{width: "330px" , marginLeft: "40px"}}
      required
    />
  </FormGroup>
  </div>
  </>
)}
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
      style={{width :  "700px"}}
      required
    />
  </FormGroup>

  {isSignup && (
              <>
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
      style={{width :  "700px"}}
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
      style={{width :  "700px"}}
      required
    />
  </FormGroup>


</>
  )}
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={password}  onChange={(e)=> setpassword(e.target.value)}
      style={{width :  "700px"}}
      required
    />
  </FormGroup>
  {isSignup && (
              <>
  <FormGroup>
    <Label for="examplePassword">
      Confirm Password
    </Label>
    <Input
      id="examplePassword"
      name="confirmpassword"
      placeholder="password placeholder"
      type="password"
      value={confirmpassword}  onChange={(e)=> setconfirmpassword(e.target.value)}
      style={{width :  "700px"}}
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
      style={{width :  "700px"}}
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
</>
  )}
  <Button type="submit" color="success"  variant="contained" endIcon={<SendIcon />}>
    Submit
  </Button>
<br/>
  <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>

  </div>
        </Form>

        </Card>
      
      </div>
  )
}

export default Auth