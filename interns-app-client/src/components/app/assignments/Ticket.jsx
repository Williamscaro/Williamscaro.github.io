import React  , {useState,useEffect} from 'react'
import {getAsignaciones} from './../helpers/asignaciones'


export default function Ticket() {

  const [Asignaciones, setAsignaciones] = useState([])
  

  useEffect(() => {

    const dataAsignaciones = getAsignaciones()
    setAsignaciones(dataAsignaciones)
 
  })


  return ( 
   <>


        {Asignaciones.map(({id,subject,type,status,priority,agent}) =>  
        <div className="col-12 shadow p-3 mb-2 bg-body rounded card d-inline">

          
          <div class="row" >
                
                <div class="col-1 d-inline" >       
                  <div class="form-check form-check-inline ">
                    <input class="form-check-input mt-5" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  </div>
                </div>

                <div class="col-1 d-inline-block me-4" >
                  <h2 class=" py-2 px-3 mt-4  d-inline-block rounded text-center border bg-danger text-white">{id}</h2>     
                </div>

                <div class="col-6 d-inline mt-2">
                  <p class="d-inline h6">New</p>
                  <p class="h5">{subject}</p>
                  <p class=""><small>Creada por {agent}</small> </p>
                </div>

                <div class="col d-inline mx-2 p-3">
                  <b class="d-block">prioridad: <p className={priority == "alta" ? 'text-white bg-danger rounded d-inline px-2 ': priority == "media" ? 'text-white bg-warning rounded d-inline px-2 ': 'text-white bg-success rounded d-inline px-2 '}>{priority}</p> </b>
                  <b class="d-block">estatus: <p className="d-inline">{status}</p></b>
                  <b class="d-block">tipo: <p className="d-inline">{type}</p></b>
                </div>

                <br/>          
              </div>
    

          </div>


)}
  

</>    


      
  );
}
