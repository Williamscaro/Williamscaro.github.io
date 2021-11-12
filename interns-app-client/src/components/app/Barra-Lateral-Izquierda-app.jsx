import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import { TasksIcon,TachometerAltIcon,UserIcon,UserCogIcon,StickyNoteIcon,CogsIcon } from "../icons";
import Seccionticket from "./assignments/Seccionticket";
import SegundaBarraApp from "../SegundaBarraApp";
import HeaderAppRegistration from "../HeaderAppRegistration";




export default function BarraLateralIzquierdaapp() {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-auto  bg-dark sticky-top">
                <div className="d-flex  bg-dark flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                    <a href="./" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                
                    </a>
                    <ul className="nav nav-pills nav-flush  flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                        <li className="nav-item">
                            <a href="./" className="nav-link  link-light hoverbutton py-3 px-3 " title="Home" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <TasksIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="./" className="nav-link link-light hoverbutton py-3 px-3" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <TachometerAltIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="./" className="nav-link link-light hoverbutton py-3 px-3" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                    <UserIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="./" className="nav-link link-light hoverbutton py-3 px-3" title="Products" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                    <UserCogIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="./" className="nav-link link-light hoverbutton py-3 px-3" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <StickyNoteIcon/>
                        
                            </a>
                        </li>
                        <li>
                            <a href="./" className="nav-link link-light hoverbutton py-3 px-3" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <CogsIcon/>
                        
                            </a>
                        </li>
                    </ul>
             
                </div>
            </div>
            <div className="col-sm p-3 min-vh-100">
            </div>
        </div>
    </div>
    )
}
