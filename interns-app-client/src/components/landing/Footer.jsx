import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';
import { GithubIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from '../icons/index.js';

export default function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-white bs-gray-600 p-4 "
        id="ancho"
      >
        <div className="row align-items-center">
          <div className="col">
            <img
              src={ process.env.PUBLIC_URL + '/img/small.png' }
              alt="img"
              width={50}
              className="pt-4 rounded mx-auto d-block d-none d-sm-none d-md-block"
            />

            <div className="row">
              <div className="row  justify-content-center">
                <div className="col col-2">
                  <a href="" className="link">
                    <p>login</p>
                  </a>
                </div>

                <div className="w-100 d-block d-sm-block d-md-none"></div>

                <div className="col col-2">
                  <a href="" className="link">
                    <p>contacto</p>
                  </a>
                </div>

                <div className="w-100 d-block d-sm-block d-md-none"></div>

                <div className="col col-2">
                  <a href="" className="link">
                    <p>home</p>
                  </a>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col col-1">
                  <FacebookIcon/>
                </div>
                <div className="col col-1">
                  <LinkedinIcon/>
                </div>
                <div className="col col-1">
                    <GithubIcon />
                </div>
                <div className="col col-1">
                  <YoutubeIcon />
                </div>
              </div>
            </div>
            <div className="row mb-4"></div>
          </div>

          <div class="col">
            <p> ©2021 AI Logic, Todos los Derechos Reservados .</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
