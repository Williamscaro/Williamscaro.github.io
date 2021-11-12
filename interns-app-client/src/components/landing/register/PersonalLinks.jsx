import React from "react";

export default function PersonalLinks() {
  return (
    <div className="main-container">
      <form action="">
        <div className="col-sm-6">
          <label htmlFor="github" className="form-label">
            GitHub
          </label>
          <input
            type="url"
            className="form-control"
            name="github-link"
            id="github-link"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="cv-lb" className="form-label">
            Curriculum Vitae (Link)
          </label>
          <input
            type="url"
            className="form-control"
            name="cv-link"
            id="cv-link"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="linkenin-link" className="form-label">
            LinkedIn
          </label>
          <input
            type="url"
            className="form-control"
            name="likedin-link"
            id="linkedin-link"
          />
        </div>
        <br /><br />

              <div className="row">

                        <button className="w-40 btn btn-primary mx-2 col" type="submit">
                          Volver
                        </button>


                        <button className="w-50 btn btn-primary mx-2 col">Terminar
                        </button>
              </div>
        
      </form>

    </div>
  );
}
