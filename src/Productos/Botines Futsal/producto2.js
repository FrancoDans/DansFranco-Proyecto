import React from "react";
import AdidasByD from "../../Imagenes/Fustal/AdidasByD.jfif";
import { useHistory, Link } from "react-router-dom";

export default function Producto2() {
  return (
    <div className="producto">
      <a href="#">
        <div className="producto-img">
          <img src={AdidasByD} alt="" />
        </div>
      </a>
      <div className="producto-footer">
        <h1>Botines Adidas FUTSAL</h1>
        <p>BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 7 ACADEMY FG/MG AZUL</p>
        <p className="precio">$20.000</p>
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
