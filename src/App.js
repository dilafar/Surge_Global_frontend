import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Auth from './pages/Auth';
import Notes from './pages/Student/Notes';
import Users from './pages/Admin/Users';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Auth"  element={<Auth/>}/>
    <Route exact path='/notes' element={<Notes/>}/>
    <Route exact path='/user' element={<Users/>}/>
    <Route exact path='/profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
