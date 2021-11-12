import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/whiteLogo.svg";
export default function Header() {
  return (
    <div className="container-fluid px-0 fondo text-center">
      <Link to="/">
        <embed src={logo} />
      </Link>
    </div>
  );
}
