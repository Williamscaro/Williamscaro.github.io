import React,{useState} from 'react'
import {DoorClosedIcon,DoorOpenIcon} from './icons/index'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

export default function SegundaBarraApp() {

    const pagina = ("1 - 12 de 12")

    const [cerrado,setcerrado] = useState(true)

    const iconchanger = () => {
        if (cerrado == true)
           {setcerrado(false)}
        else if (cerrado == false)
            {setcerrado(true)}

            
        
    }
    return (
      <>
        <div className=" bg-light py-2 shadow-sm container-fluid">
            <div className="row  align-items-center justify-content-between">

            <div className="col ">

            <div className="row align-items-center">
                
            <div className="col-3  ">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
            <label className="form-check-label" for="flexCheckIndeterminate">
                Ordenar por 
            </label>
            </div>
            </div>
            
            <div className="col-2 ">
            <select className="form-select" id="province" required="" >
                <option value="">A-z</option>
                <option value="">Creador</option>
                <option value="">Prioridad</option>
                <option value="">Tipo</option>
                <option value="">Prioridad</option>
              </select>
            </div>
            </div>
            </div>


            <div className="col  ">
            <div className="row ">
            
            <div className="col-2 align-self-center">
                Tipo de vista:
            </div>
            <div className="col-3">
            <select className="form-select" id="province" required="" >
                <option value="">Vista por tarjeta</option>
                <option value="">Vista por tabla</option>
              
              </select>
            </div>

            <div className="col-2  align-self-center">
                {pagina}
            </div>
            <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-primary">{'<'}</button>
                <button type="button" className="btn btn-outline-primary">{'>'}</button>
            </div>
            </div>

            <div className="col-2  align-self-center">
            <button type="button" onClick={iconchanger}  className="btn btn-outline-primary"> {cerrado ? <DoorClosedIcon/>:<DoorOpenIcon/>}</button>
               
            </div>

            </div>
            </div>


            </div>
        </div>
    
      
      </>
    )
}
