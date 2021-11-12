import React from "react";
import { Link } from "react-router-dom";
export default function HomeRegister() {
  return (
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center min-h">
      <main class="px-3">
        <h1>Bienvenido al Registro de Pasantes</h1><br/><br/>
        <p class="lead">
        Estas a punto de registrate a nuestra convocatoria de pasantias, gracias por participar, para nosotros es un placer contar contigo y esperamos poder verte pronto.
        </p><br/><br/>
        <Link to="/register/general-info">
          <button className="btn btn-lg btn-secondary fw-bold border-white bg-color-primary">
            Vamos allá
          </button>
        </Link>
      </main>
    </div>
  );
}
