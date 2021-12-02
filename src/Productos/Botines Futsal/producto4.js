import React from "react";
import Penalty from "../../Imagenes/Fustal/penalty.jfif";
import { useHistory, Link } from "react-router-dom";

export default function producto4() {
  return (
    <div className="producto">
      <a href="#">
        <div className="producto-img">
          <img src={Penalty} alt="" />
        </div>
      </a>
      <div className="producto-footer">
        <h1>Botines Penalty FUTSAL</h1>
        <p>Botines Nike Phantom GT Academy FG/MG</p>
        <p className="precio">$14.000</p>
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
