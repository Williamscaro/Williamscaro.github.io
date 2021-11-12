import React, { useState, useEffect } from "react";
import { getProvincias } from "../../../helpers/provincias.js";
import { getMunicipiosByProvincia } from "../../../helpers/municipios";
import { Link } from "react-router-dom";
export default function GeneralInformation() {
  //VARIABLE DECLARATION
  const [provincias, setprovincias] = useState([]);
  const [provinciaId, setprovinciaId] = useState(0);
  const [municipios, setmunicipios] = useState([]);
  const [address, setaddress] = useState({
    province: 0,
    city: 0,
    address: "",
    postal_code: "",
  });
  const [personalInfo, setpersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: 0,
  });

  // SOMETHING ITS LOADING
  //WHEN THE MAIN COMPONENT ITS RENDERING IN THE PAGE
  useEffect(() => {
    const dataProvincias = getProvincias();
    setprovincias(dataProvincias);
  });

  //WHEN YOU SELECT A PROVINCE, THEN THE CITY SELECTS LOAD
  useEffect(() => {
    if (provinciaId != 0) {
      const data = getMunicipiosByProvincia(provinciaId);
      setmunicipios(data);
    }
  }, [provinciaId]);

  //THE POST REQUEST
  const sendData = (event) => {
    event.preventDefault();
    console.log(
      `{first name: ${personalInfo.firstName}
      last name: ${personalInfo.lastName}
      email:  ${personalInfo.email}
      phone: ${personalInfo.phone}
      gender: ${personalInfo.gender}}
      
      {
        province: ${address.province}
      city: ${address.city}
      address:  ${address.address}
      postal code: ${address.postal_code}
      }`
    );
  };
  //HANDLE FUNTIONS
  //HERE WE CAPTURE ALL PERSONAL INFORMATION
  const handleChangePersonalInfo = (event) => {
    const target = event.target;
    const value = target.type === "radio" ? target.id : target.value;
    const name = target.name;

    setpersonalInfo({ ...personalInfo, [name]: [value] });
  };
  //HERE WE CAPTURE THE USER ADDRESS
  const handleAddress = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "province") {
      setprovinciaId(value);
    }
    setaddress({ ...address, [name]: [value] });
  };

  return (
    <div className="col-md-7 col-lg-8 main-container">
      <h4 className="mb-3">Información personal</h4>
      <form className="needs-validation" novalidate="" onSubmit={sendData}>
        {
          //PERSONAL INFORMATION
        }
        <div className="row g-3">
          {
            //INPUT NAME
          }
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">
              Nombre <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              required=""
              name="firstName"
              onChange={handleChangePersonalInfo}
            />
            <div className="invalid-feedback">
              Un nombre valido es requerido
            </div>
          </div>
          {
            //INPUT LAST NAME
          }
          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">
              Apellido <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder=""
              required=""
              onChange={handleChangePersonalInfo}
            />
            <div className="invalid-feedback">
              Un Apellido valido es requerido
            </div>
          </div>
          {
            //INPUT EMAIL
          }
          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChangePersonalInfo}
            />
            <div className="invalid-feedback">
              Por favór ingresa un Email Valido.
            </div>
          </div>
          {
            //INPUT PHONE
          }
          <div className="col-6">
            <label htmlFor="phone" className="form-label">
              Telefono <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="000-000-0000"
              onChange={handleChangePersonalInfo}
            />
            <div className="invalid-feedback">
              Por favor ingresa un telefono valido.
            </div>
          </div>
          {
            //INPUT GENDER
          }
          <div className="my-3 row" onChange={handleChangePersonalInfo}>
            <label htmlFor="Gender" className="form-label">
              Sexo
            </label>

            <div className="form-check col-2">
              <input
                id="1"
                name="gender"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" htmlFor="credit">
                Masculino
              </label>
            </div>
            <div className="form-check col-2">
              <input
                id="0"
                name="gender"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" htmlFor="debit">
                Femenino
              </label>
            </div>
          </div>

          {
            //<input type="submit" value="send" />
          }
          <hr className="my-4" />

          <h4 className="mb-3">Datos de contacto</h4>
          {
            //INPUT PROVINCE
          }
          <div className="col-md-5">
            <label htmlFor="country" className="form-label">
              Provincia
            </label>
            <select
              className="form-select"
              id="province"
              name="province"
              required=""
              onChange={handleAddress}
            >
              <option value="">Seleccione...</option>
              {provincias.map(({ provincia, provincia_id }) => (
                <option value={provincia_id}>{provincia}</option>
              ))}
            </select>
            <div className="invalid-feedback">
              Por favor seleccione una provincia valida
            </div>
          </div>
          {
            //INPUT CITY
          }
          <div className="col-md-5">
            <label htmlFor="country" className="form-label">
              Municipio o Ciudad
            </label>
            <select
              className="form-select"
              id="city"
              name="city"
              required=""
              onChange={handleAddress}
            >
              <option value="">Seleccione...</option>
              {municipios.map(({ municipio, municipio_id }) => (
                <option value={municipio_id}>{municipio}</option>
              ))}
            </select>
            <div className="invalid-feedback">
              Por favor seleccione un municipio valido
            </div>
          </div>
          {
            //INPUT ADDRESS
          }
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Digite su sector y calle"
              required=""
              onChange={handleAddress}
            />
            <div className="invalid-feedback">
              Por favor introdusca una direccion valida
            </div>
          </div>
          {
            //INPUT ZIP OR POSTAL CODE
          }
          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">
              Zip o Codigo Postal
            </label>
            <input
              type="text"
              className="form-control"
              id="postal_code"
              name="postal_code"
              placeholder=""
              required=""
              onChange={handleAddress}
            />
            <div className="invalid-feedback">Codigo Postal es requerido</div>
          </div>
        </div>

        <hr className="my-4" />

        <Link to="/register/">
        <button className="w-40 m-5 btn btn-primary btn-lg" type="submit">
          Volver
        </button>
        </Link>


        <Link to="/register/academic">
        <button className="w-40 btn btn-primary btn-lg" type="submit">
          Continue a Datos Académicos
        </button>
        </Link>
        
      </form>
    </div>
  );
}
