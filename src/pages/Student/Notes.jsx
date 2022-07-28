import React ,{useState} from 'react';
import './Notes.css';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotesPagination from '../../components/paginations/NotesPagination';
import AddNotesModel from '../../components/models/NotesModels/AddNotesModel';
import SingleNotes from './SingleNotes';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { CircularProgress, Grid } from "@material-ui/core";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Notes = () => {
    const dispatch = useDispatch();
    const [search , setsearch] = useState('');
    let count =1;
    const query = useQuery();
    const page = query.get('page') || 1 ;
    const { notes} = useSelector((state) => state.notesReducer);

  return (
    <>
    <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
   
    <div className="container">
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form action="#">
                    <div className="form-group d-flex search-field">
                      <input type="text" className="form-control" placeholder="Search Here" onChange={(e)=> setsearch(e.target.value)} />
                      <button type="submit" className="btn btn-primary ml-3">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <AddNotesModel />
          {!notes?.data?.length && (<> <div className='col-lg-12 col-md-12 col-xl-12'><div className='alert alert-info' role="alert"><h4>Notes Not Found !</h4><p>No Notes Were Created !!!.</p></div></div>
           </>
           )}
          
          <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(40rem, 1fr))', gap:'1rem'}}>
          {!notes?.data?.length ? <CircularProgress/> : (
          notes?.data?.filter((val)=>{
             if(search == ""){
                 return val;
             }else if(val.title.toLowerCase().includes(search.toLowerCase())){
               return val;
            }
        }).map((note)=>(
        <SingleNotes key={note._id} note={note} count={count++}/>
        ))
        )}
       
        </div>
       
        <div style={{marginTop: '100px'}}>
           <NotesPagination page={page} /></div>
          
        </div>
        <div style={{marginTop: '200px'}}>
          <Footer />
        </div>
        </>
  )
}

export default Notes