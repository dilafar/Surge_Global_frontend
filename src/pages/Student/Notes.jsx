import React from 'react';
import './Notes.css';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotesPagination from '../../components/paginations/NotesPagination';
import AddNotesModel from '../../components/models/NotesModels/AddNotesModel';
import SingleNotes from './SingleNotes';
import Navbar from '../../components/navbar/Navbar';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Notes = () => {
    const dispatch = useDispatch();
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
                      <input type="text" className="form-control" placeholder="Search Here" />
                      <button type="submit" className="btn btn-primary ml-3">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <AddNotesModel />
          <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(40rem, 1fr))', gap:'1rem'}}>
          { notes?.data?.map((note)=>(
        <SingleNotes key={note._id} note={note} />
        ))}
        </div>
           <NotesPagination page={page} />
          
        </div>
        </>
  )
}

export default Notes