import React from "react";
import NikeGyR from "../../Imagenes/Fustal/NikeGyR.jpg";
import { useHistory, Link } from "react-router-dom";

export default function producto3() {
  return (
    <div className="producto">
      <a href="#">
        <div className="producto-img">
          <img src={NikeGyR} alt="" />
        </div>
      </a>
      <div className="producto-footer">
        <h1>Botines NIKE FUTSAL</h1>
        <p>
          BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 8 ACADEMY FG/MG UNISEX ROJO
        </p>
        <p className="precio">$17.000</p>
      </div>
      <div className="buttom">
        <button className="btn">Añadir al Carrito</button>
        <button className="btn">Ver producto</button>
      </div>
      <Link to={"/futsal"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
