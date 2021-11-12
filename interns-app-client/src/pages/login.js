import React, {useState,useEffect} from "react";
import large from "../assets/images/large.png";
import { Link } from "react-router-dom";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import axios from "axios";


export default function Login() {
  const [listOfUser, setListOfUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(()=> {
    axios.get("http://localhost:3001/user/").then((response) =>{
      setListOfUsers(response.data);
    },[])
  })

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const login = () =>{
    const data = {username: username, password: password}
    //Apregada palabra login a la ruta
    axios.post("http://localhost:3001/user/login", data).then((response) =>{
      console.log(response.data);
    })
  };
  return (
    
    <>
      <Header />
      <main class="form-signin rounded-bottom align-middle ">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">          
            <img className="mb-4 " src={large} alt="" width="72" height="57" />
            <h2 className="h3 mb-3 fw-normal login-title ">Login</h2>
          </div>



          <div class="form-floating my-2">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Usuario"
              onChange={(event) => {
                setUsername(event.target.value)} }
            />

            <label for="floatingInput">Usuario</label>
          </div>
          <div className="form-floating  my-2">
              
              <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value)} }
            />
            <label for="floatingPassword">Constraseña</label>
          </div>
          <div className="row">
            <div class="checkbox mb-3 col text-small">
              <label>Perdiste tu constraseña?</label>
            </div>
            <div class="checkbox mb-3 text-small col">
              <label>
                <a href="#" className=" text-small link-hover-red">
                  Recuperar
                </a>
              </label>
            </div>
          </div>




          <input
            onClick={login}
            type="submit"
            className="w-100 btn btn-lg bg-color-primary btn-send btn-block"
            value="Iniciar sección"
          />
          <p class="mt-5 mb-3 text-muted">
            No estas registrado aun?
            <Link to="/register" className="text-danger text-small">
              {" "}
              Registrate aquí
            </Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
