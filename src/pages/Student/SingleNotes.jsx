import React from 'react'
import DeleteModel from '../../components/models/NotesModels/DeleteModel';
import UpdateModel from '../../components/models/NotesModels/UpdateModel';
import './Notes.css';

const SingleNotes = ({note}) => {
  return (

   
          <div className="card">
            <div className="faq-block card-body">
              <div className="container-fluid py-2">
                <h5 className="mb-0">Section 1</h5>
              </div>
              <div id="accordion-1" className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How many instances of Lorum Ipsum usage can be found on the web?
                      </a>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion-1">
                    <div className="card-body">
                      <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p><p>
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