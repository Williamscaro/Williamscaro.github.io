import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css'
import {SignoutaltIcon,BarsIcon} from "../icons";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown  from 'react-bootstrap/Dropdown'




export default function HeaderAppRegistration() {
  return (
<>
  <header className="p-3 bg-light border-bottom">
    <div className="container">
          <div className="d-flex flex-wrap align-items-center  justify-content-lg-start">
            <a href="./" className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none">
              
            </a>

            <DropdownButton id="dropdown-basic-button" title= {<BarsIcon />}>
              <Dropdown.Item href="#/action-1">Asignaciones pendientes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Asignaciones Vencidas</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Orden de pertenecia</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Orden prioritarida</Dropdown.Item>
              <Dropdown.Item href="#/action-6" className="bg-secondary text-white d-block d-sm-block d-md-none"> <SignoutaltIcon />  Cerrar seccion</Dropdown.Item>
              
            </DropdownButton>


            <div class="col px-4 d-block d-sm-block d-md-none">
            <DropdownButton id="dropdown-basic-button"  variant="info" title= "Nuevo">
              <Dropdown.Item href="#/action-1">Nueva Asignacion</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Nuevo Post</Dropdown.Item>
        

              
            </DropdownButton>

              </div>

              
              <div class="col d-block d-sm-block d-md-none ">
              <button type="button" className="btn btn-warning px-3"> J </button>
              </div>


            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="./" className="nav-link  px-4 ">Asignaciones</a></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            
            </form>

            <div className="text-end">

            <div className="row d-flex">

          

            <div class="col d-none d-sm-none d-md-block">
            <DropdownButton id="dropdown-basic-button"  variant="info" title= "Nuevo">
              <Dropdown.Item href="#/action-1">Nueva Asignacion</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Nuevo post</Dropdown.Item>
        

              
            </DropdownButton>

              </div>
              
              <div class="col  d-none d-sm-none d-md-block">
              <button type="button" className="btn btn-outline-dark d-none d-sm-none d-md-block  "><SignoutaltIcon /></button>
              </div>

          

        
              <div class="col d-none d-sm-none d-md-block">
              <button type="button" className="btn btn-warning px-3 d-none d-sm-none d-md-block "> J </button>
              </div>
              </div>
            </div>
        </div>
    </div>
  </header>


    </>
  
  );
}
