import React from "react";
import { Link } from "react-router-dom";
export default function ApplyButton({ clasStyles }) {
  return (
    <Link to="/register">
      <button className={clasStyles}> Aplicar</button>;
    </Link>
  );
}
