import React from 'react'
import DeleteModel from '../../components/models/NotesModels/DeleteModel';
import UpdateModel from '../../components/models/NotesModels/UpdateModel';
import './Notes.css';

const SingleNotes = ({note,count}) => {
  return (

   
          <div className="card">
            <div className="faq-block card-body">
              <div className="container-fluid py-2">
                <h5 className="mb-0">Notes {count}</h5>
              </div>
              <div id="accordion-1" className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {note?.title}
                      </a>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion-1">
                    <div className="card-body">
                      <p className="mb-0">{note?.description}</p><p>
                    </p></div>
                  </div>
                </div>

              <div style={{display: "flex" , marginLeft : "500px"}}> 
                            <UpdateModel note={note}/>
                            <DeleteModel note={note}/>
              </div>
            </div>
          </div>
        </div>
   

  )
}

export default SingleNotes