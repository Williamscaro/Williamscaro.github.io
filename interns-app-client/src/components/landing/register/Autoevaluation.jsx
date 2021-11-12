import React from "react";
import { Link } from "react-router-dom";
export default function Buttons_f_b() {
  return (
   <div className="row">
   <button className="w-40 btn btn-primary mx-2 col" type="submit">
     Volver
   </button>
   <button className="w-50 btn btn-primary mx-2 col">Terminar</button>
 </div>
  );
}