import React, { useState, useEffect } from "react";
import {
  getAllStatus,
  getStatusById,
} from "../../../api/services/AcademicStatus.js";
import { Link } from "react-router-dom";

export default function Academic() {
  const [academicStatus, setacademicStatus] = useState([]);
  const [academicStatusId, setacademicStatusId] = useState(0);
  const [academic, setacademic] = useState({
    institution: "",
    degree: "",
    status: 0,
    start_date: "",
    end_date: "",
  });
  useEffect(() => {
    const dataAcademicStatus = getAllStatus();
    setacademicStatus(dataAcademicStatus);
  });
  const handleAcademicStatusChange = (e) => setacademicStatusId(e.target.value);
  const handleAcademicData = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setacademic({ ...academic, [name]: [value] });
  };
  const sendData = (event) => {
    event.preventDefault();
    console.log(`name: ${academic.institution}
    title: ${academic.degree}
    status: ${academic.status}
    start date : ${academic.start_date}
    start date : ${academic.end_date}`);
  };
  return (
    <div className="col-md-7 col-lg-8 main-container">
      <form className="needs-validation" novalidate="" onSubmit={sendData}>
        <hr className="my-4" />
        <h4 className="mb-3">Datos Academicos</h4>

        <div className="col-sm-12">
          <label htmlFor="nameInstitution" className="form-label">
            Nombre de la institucion
          </label>
          <input
            type="text"
            className="form-control"
            id="institution"
            name="institution"
            placeholder=""
            onChange={handleAcademicData}
            required=""
          />
          <div className="invalid-feedback">Un nombre es requerido</div>
        </div>

        <div className="col-sm-12">
          <label htmlFor="title" className="form-label">
            Titulo obtenido
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            name="degree"
            onChange={handleAcademicData}
            placeholder=""
            required=""
          />
          <div className="invalid-feedback">Un titulo es requerido</div>
        </div>
        <div className="col-md-5">
          <label htmlFor="country" className="form-label">
            Status Academico
          </label>
          <select
            className="form-select"
            id="status_academic"
            name="status"
            required=""
            onChange={handleAcademicData}
          >
            <option value="">Seleccione...</option>
            {academicStatus.map(({ status_description, id }) => (
              <option value={id}>{status_description}</option>
            ))}
          </select>
          <div className="invalid-feedback">
            Por favor seleccione un estado academico
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <label htmlFor="title" className="form-label">
              Fecha de inicio
            </label>
            <input
              type="text"
              className="form-control"
              id="start_date"
              name="start_date"
              placeholder="mm-yyyy"
              onChange={handleAcademicData}
              required=""
            />
            <div className="invalid-feedback">La fecha es requerido</div>
          </div>
          <div className="col-sm-5">
            <label htmlFor="title" className="form-label">
              Fecha de finalizacion
            </label>
            <input
              type="text"
              className="form-control"
              id="end_date"
              name="end_date"
              placeholder="mm-yyyy"
              onChange={handleAcademicData}
              required=""
            />
            <div className="invalid-feedback">
              La fecha es requerida es requerido
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">


        <Link to="/register/general-info">
          <button className="w-40 m-5 btn btn-primary mx-2 col" type="submit">
            Vuelva a Informacion General
          </button>
        </Link>

        <Link to="/register/self-appraisal">
          <button className="w-40 btn btn-primary mx-2 col">
            Continue a Auto Evaluación
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
}
