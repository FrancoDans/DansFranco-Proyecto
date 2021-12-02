import React from "react";
import Umbro from "../../Imagenes/Fustal/UmbroN.jpg";
import { useHistory, Link } from "react-router-dom";

export default function producto6() {
  return (
    <div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={Umbro} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines Umbro FUTSAL</h1>
          <p>Botines Future Z 3.2 FG/AG de fútbol para hombre</p>
          <p className="precio">$12.000</p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al Carrito</button>
          <button className="btn">Ver producto</button>
        </div>
      </div>
      <Link to={"/futsal"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}
