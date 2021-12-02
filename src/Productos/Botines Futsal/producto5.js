import React from "react";
import Puma from "../../Imagenes/Fustal/puma.jpg";
import { useHistory, Link } from "react-router-dom";

export default function Producto5() {
  return (
    <div>
      <div className="producto">
        <a href="#">
          <div className="producto-img">
            <img src={Puma} alt="" />
          </div>
        </a>
        <div className="producto-footer">
          <h1>Botines PUMA FUTSAL</h1>
          <p>Botines Ultra 2.3 FG/AG de fútbol para hombre</p>
          <p className="precio">$15.000</p>
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
