import React from "react";
import Academic from "./Academic";
import GeneralInformation from "./GeneralInformation";
import PersonalLinks from "./PersonalLinks";
import SelfAppraisal from "./SelfAppraisal";
import HomeRegister from "./HomeRegister.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function Menu() {
  let url = "/register";

  return (
    <div className="container container-bg">
      <Router>
        <ul className="nav nav-tabs ul-down">
          <li className="nav-item">
            <Link className="nav-link " to={`${url}/general-info`}>
              Informacion General
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/academic`}>
              Academicos
            </Link>
          </li>
          {<li className="nav-item">
            <Link className="nav-link" to={`${url}/self-appraisal`}>
              Auto Evaluacion
            </Link>
          </li> }
          <li className="nav-item">
            <Link className="nav-link " to={`${url}/personal-links`}>
              Enlaces
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/register">
            <HomeRegister />
          </Route>
          <Route path={`${url}/general-info`}>
            <GeneralInformation />
          </Route>
          <Route path={`${url}/academic`}>
            <Academic />
          </Route>
          {/*           <Route path={`${url}/self-appraisal`}>
            <SelfAppraisal />
          </Route> */}
          <Route path={`${url}/personal-links`}>
            <PersonalLinks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
